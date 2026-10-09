// Adapted from Trey's personal-site v2 liquid field. Same pointer wake model, Varick blue palette.
export function createLiquidField(root, canvas, toggle) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!root || !canvas) return;

    root.dataset.liquidReady = 'true';
    root.dataset.wakeCount = '0';

    const gl = canvas.getContext('webgl', {
        alpha: false,
        antialias: false,
        depth: false,
        powerPreference: 'high-performance',
    });

    function updateToggle(paused, unsupported) {
        if (!toggle) return;
        toggle.setAttribute('aria-pressed', String(paused));
        toggle.innerHTML = `<span aria-hidden="true"></span> ${unsupported ? 'Static field' : paused ? 'Resume field' : 'Pause field'}`;
        toggle.disabled = Boolean(unsupported);
    }

    if (!gl) {
        canvas.hidden = true;
        updateToggle(true, true);
        return;
    }

    const vertexSource = [
        'attribute vec2 aPosition;',
        'varying vec2 vUv;',
        'void main(){',
        '  vUv = aPosition * 0.5 + 0.5;',
        '  gl_Position = vec4(aPosition, 0.0, 1.0);',
        '}',
    ].join('\n');

    const fragmentSource = [
        'precision highp float;',
        'varying vec2 vUv;',
        'uniform vec2 uResolution;',
        'uniform float uTime;',
        'uniform vec4 uRipples[24];',
        'uniform vec2 uFlowVelocity[24];',
        'float gridLine(vec2 uv){',
        '  vec2 cell = abs(fract(uv) - 0.5);',
        '  float edge = max(cell.x, cell.y);',
        '  return smoothstep(0.465, 0.498, edge);',
        '}',
        'void main(){',
        '  float aspect = uResolution.x / max(uResolution.y, 1.0);',
        '  vec2 displacement = vec2(0.0);',
        '  float flowGlow = 0.0;',
        '  for(int i = 0; i < 24; i++){',
        '    vec4 ripple = uRipples[i];',
        '    vec2 velocity = uFlowVelocity[i];',
        '    float age = uTime - ripple.z;',
        '    if(age > 0.0 && age < 3.25 && ripple.w > 0.0){',
        '      float fadeOut = 1.0 - smoothstep(2.03, 3.13, age);',
        '      float decay = exp(-age * 0.8965) * fadeOut;',
        '      vec2 carriedOrigin = ripple.xy + velocity * age * 0.0288;',
        '      vec2 flowDelta = (vUv - carriedOrigin) * vec2(aspect, 1.0);',
        '      vec2 direction = normalize(velocity + vec2(0.0001));',
        '      vec2 tangent = vec2(-direction.y, direction.x);',
        '      float alongFlow = dot(flowDelta, direction);',
        '      float acrossFlow = dot(flowDelta, tangent);',
        '      float velocityAmount = clamp(length(velocity) * 1.8, 0.0, 1.0);',
        '      float broadWake = exp(-(alongFlow * alongFlow * 5.0 + acrossFlow * acrossFlow * 70.2));',
        '      float wakeCore = exp(-(alongFlow * alongFlow * 9.1 + acrossFlow * acrossFlow * 179.4));',
        '      float curl = sin(alongFlow * 18.0 - acrossFlow * 11.0 + age * 1.8);',
        '      float flow = (broadWake * 0.82 + wakeCore * 0.18) * decay * ripple.w * (0.72 + velocityAmount * 0.28);',
        '      vec2 flowVector = direction * (0.76 + curl * 0.1) + tangent * (0.14 + curl * 0.24);',
        '      displacement += flowVector * flow * 0.01092;',
        '      flowGlow += (broadWake * 0.58 + wakeCore * 0.32) * decay * ripple.w * velocityAmount;',
        '    }',
        '  }',
        '  displacement *= min(1.0, 0.06 / max(length(displacement), 0.0001));',
        '  vec2 uv = vUv + displacement;',
        '  float currentA = sin(uv.x * 13.0 + sin(uv.y * 8.0 + uTime * 0.18) * 1.4 + uTime * 0.24);',
        '  float currentB = sin(uv.y * 16.0 - sin(uv.x * 7.0 - uTime * 0.14) * 1.6 - uTime * 0.19);',
        '  vec2 idleWarp = vec2(currentA, currentB) * 0.0035;',
        '  vec2 tiledUv = (uv + idleWarp) * vec2(7.2, 5.2);',
        '  float tile = gridLine(tiledUv);',
        '  float causticA = abs(sin((uv.x * 8.0 + sin(uv.y * 9.0 + uTime * 0.22)) * 2.2));',
        '  float causticB = abs(sin((uv.y * 7.0 - sin(uv.x * 11.0 - uTime * 0.16)) * 2.0));',
        '  float caustic = pow(max(0.0, 1.0 - abs(causticA - causticB)), 8.0);',
        '  vec3 deep = vec3(0.010, 0.055, 0.37);',
        '  vec3 mid = vec3(0.035, 0.24, 1.0);',
        '  vec3 glow = vec3(0.42, 0.69, 1.0);',
        '  float depthGradient = smoothstep(-0.1, 1.05, uv.y);',
        '  vec3 color = mix(deep, mid, depthGradient * 0.72);',
        '  color += glow * caustic * 0.22;',
        '  color += glow * tile * 0.085;',
        '  float liquidWake = min(0.62, 1.0 - exp(-flowGlow * 0.42));',
        '  color += glow * liquidWake * 0.42;',
        '  float vignette = 1.0 - smoothstep(0.28, 0.86, length((vUv - 0.5) * vec2(0.8, 1.0)));',
        '  color *= 0.7 + vignette * 0.42;',
        '  color += vec3(0.016, 0.06, 0.15) * smoothstep(0.2, 0.95, vUv.x) * 0.7;',
        '  gl_FragColor = vec4(color, 1.0);',
        '}',
    ].join('\n');

    function compile(type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            throw new Error(gl.getShaderInfoLog(shader) || 'Shader compilation failed');
        }
        return shader;
    }

    let program;
    try {
        program = gl.createProgram();
        gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
        gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource));
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            throw new Error(gl.getProgramInfoLog(program) || 'Shader link failed');
        }
    } catch (error) {
        canvas.hidden = true;
        updateToggle(true, true);
        return;
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    gl.useProgram(program);

    const position = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolutionUniform = gl.getUniformLocation(program, 'uResolution');
    const timeUniform = gl.getUniformLocation(program, 'uTime');
    const rippleUniform = gl.getUniformLocation(program, 'uRipples[0]');
    const flowVelocityUniform = gl.getUniformLocation(program, 'uFlowVelocity[0]');
    const ripples = new Float32Array(24 * 4);
    const flowVelocities = new Float32Array(24 * 2);
    let rippleIndex = 0;
    let lastPoint = null;
    let lastWakeTime = 0;
    let frame = 0;
    let visible = true;
    let failed = false;
    let paused = reduceMotion.matches;
    let pausedAt = paused ? performance.now() : 0;
    let pausedDuration = 0;
    const startTime = performance.now();

    function clearWake() {
        for (let index = 0; index < 24; index += 1) {
            const rippleOffset = index * 4;
            const velocityOffset = index * 2;
            ripples[rippleOffset] = 0;
            ripples[rippleOffset + 1] = 0;
            ripples[rippleOffset + 2] = -1000;
            ripples[rippleOffset + 3] = 0;
            flowVelocities[velocityOffset] = 0;
            flowVelocities[velocityOffset + 1] = 0;
        }
        rippleIndex = 0;
    }

    function elapsed(now) {
        const currentPause = paused ? now - pausedAt : 0;
        return (now - startTime - pausedDuration - currentPause) / 1000;
    }

    function resize() {
        const density = Math.min(window.devicePixelRatio || 1, 1.5);
        const bounds = root.getBoundingClientRect();
        const width = Math.max(1, Math.round(bounds.width * density));
        const height = Math.max(1, Math.round(bounds.height * density));
        if (canvas.width === width && canvas.height === height) return;
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
        gl.uniform2f(resolutionUniform, width, height);
    }

    function addWake(clientX, clientY, strength, now, velocityX, velocityY) {
        if (paused) return;
        const offset = rippleIndex * 4;
        const bounds = root.getBoundingClientRect();
        ripples[offset] = (clientX - bounds.left) / Math.max(bounds.width, 1);
        ripples[offset + 1] = 1 - ((clientY - bounds.top) / Math.max(bounds.height, 1));
        ripples[offset + 2] = elapsed(now);
        ripples[offset + 3] = Math.min(1.65, Math.max(0.28, strength));
        const velocityOffset = rippleIndex * 2;
        flowVelocities[velocityOffset] = velocityX || 0;
        flowVelocities[velocityOffset + 1] = velocityY || 0;
        rippleIndex = (rippleIndex + 1) % 24;
        root.dataset.wakeCount = String(Number(root.dataset.wakeCount || '0') + 1);
    }

    function onPointerMove(event) {
        if (paused || event.pointerType === 'touch') return;
        const now = performance.now();
        const nextPoint = { x: event.clientX, y: event.clientY };
        if (!lastPoint) {
            lastPoint = nextPoint;
            lastWakeTime = now;
            return;
        }

        const dx = nextPoint.x - lastPoint.x;
        const dy = nextPoint.y - lastPoint.y;
        const distance = Math.sqrt((dx * dx) + (dy * dy));
        if (distance < 10 && now - lastWakeTime <= 42) return;

        const directionScale = distance > 0 ? Math.min(distance / 34, 1) / distance : 0;
        addWake(
            event.clientX,
            event.clientY,
            (0.45 + Math.min(distance / 52, 0.8)) * 0.9,
            now,
            dx * directionScale,
            -dy * directionScale,
        );
        lastPoint = nextPoint;
        lastWakeTime = now;
    }

    function draw(now) {
        if (failed) return;
        resize();
        gl.uniform1f(timeUniform, elapsed(now));
        gl.uniform4fv(rippleUniform, ripples);
        gl.uniform2fv(flowVelocityUniform, flowVelocities);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        if (!paused && !document.hidden && visible) frame = window.requestAnimationFrame(draw);
    }

    function setPaused(nextPaused) {
        if (paused === nextPaused) return;
        const now = performance.now();
        paused = nextPaused;
        if (paused) {
            pausedAt = now;
            window.cancelAnimationFrame(frame);
        } else {
            pausedDuration += now - pausedAt;
            lastPoint = null;
            frame = window.requestAnimationFrame(draw);
        }
        updateToggle(paused, false);
    }

    clearWake();
    const resetPointer = () => { lastPoint = null; };
    const onResize = () => { resize(); if (paused) draw(performance.now()); };
    const onToggle = () => { setPaused(!paused); };
    const onMotion = event => { setPaused(event.matches); if (paused) draw(performance.now()); };
    const onVisibility = () => {
        window.cancelAnimationFrame(frame);
        if (!document.hidden && visible) draw(performance.now());
    };
    const onTouch = event => {
        if (event.pointerType !== 'touch') return;
        addWake(event.clientX, event.clientY, 1.4, performance.now(), 0.5, -0.3);
    };
    const onLoss = event => { event.preventDefault(); failed = true; window.cancelAnimationFrame(frame); canvas.hidden = true; updateToggle(true, true); };
    root.addEventListener('pointermove', onPointerMove, { passive: true });
    root.addEventListener('pointerdown', onTouch, { passive: true });
    root.addEventListener('pointerleave', resetPointer, { passive: true });
    canvas.addEventListener('webglcontextlost', onLoss);
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    toggle?.addEventListener('click', onToggle);
    reduceMotion.addEventListener?.('change', onMotion);
    const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        window.cancelAnimationFrame(frame);
        if (visible && !document.hidden) draw(performance.now());
    });
    observer.observe(root);
    updateToggle(paused, false);
    resize();
    if (!paused) {
        const bounds = root.getBoundingClientRect();
        addWake(bounds.left + bounds.width * .66, bounds.top + bounds.height * .34, 1.1, performance.now(), -.62, .18);
    }
    draw(performance.now());
    return () => {
        window.cancelAnimationFrame(frame);
        observer.disconnect();
        root.removeEventListener('pointermove', onPointerMove);
        root.removeEventListener('pointerdown', onTouch);
        root.removeEventListener('pointerleave', resetPointer);
        canvas.removeEventListener('webglcontextlost', onLoss);
        window.removeEventListener('resize', onResize);
        document.removeEventListener('visibilitychange', onVisibility);
        toggle?.removeEventListener('click', onToggle);
        reduceMotion.removeEventListener?.('change', onMotion);
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
    };
}
