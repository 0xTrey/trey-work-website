import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Self-host on Trey's site, without redistributing the licensed fonts in the public repo.
const manifest = JSON.parse(await readFile(new URL('./asset-sources.json', import.meta.url), 'utf8'));
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
for (const font of manifest.fonts.filter(font => font.family === 'Switzer')) {
  const destination = fileURLToPath(new URL(font.file, import.meta.url));
  let existing;
  try { existing = await readFile(destination); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (existing && digest(existing) === font.sha256) continue;
  const response = await fetch(font.source, { signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`Font download failed: ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length > 1_000_000 || digest(bytes) !== font.sha256) {
    throw new Error(`Font differs from the reviewed asset: ${font.file}`);
  }
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, bytes);
  console.log(`Prepared ${font.file}`);
}
