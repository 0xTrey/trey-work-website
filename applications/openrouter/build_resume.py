"""Build the one-page OpenRouter Enterprise AE resume.

Run from anywhere with a Python environment that has reportlab installed:
    python3 applications/openrouter/build_resume.py
"""

from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "public/resume/Trey-Harnden-OpenRouter-Enterprise-AE.pdf"
PAGE_WIDTH, PAGE_HEIGHT = letter
LEFT = 42
RIGHT = 42
WIDTH = PAGE_WIDTH - LEFT - RIGHT
INK = colors.HexColor("#172023")
MUTED = colors.HexColor("#455054")
ACCENT = colors.HexColor("#536900")
RULE = colors.HexColor("#D7DEDA")


def paragraph(pdf, text, x, top, width, *, size=8.7, leading=11.9, color=MUTED):
    style = ParagraphStyle(
        "body",
        fontName="Helvetica",
        fontSize=size,
        leading=leading,
        textColor=color,
        spaceAfter=0,
        splitLongWords=False,
    )
    item = Paragraph(escape(text), style)
    _, height = item.wrap(width, PAGE_HEIGHT)
    item.drawOn(pdf, x, top - height)
    return top - height


def section(pdf, label, top):
    top -= 18
    pdf.setFont("Helvetica-Bold", 8.2)
    pdf.setFillColor(ACCENT)
    heading = label.upper()
    pdf.drawString(LEFT, top, heading)
    pdf.setStrokeColor(RULE)
    pdf.setLineWidth(0.6)
    rule_start = LEFT + pdf.stringWidth(heading, "Helvetica-Bold", 8.2) + 16
    pdf.line(rule_start, top + 2, PAGE_WIDTH - RIGHT, top + 2)
    return top - 18


def bullet(pdf, text, top):
    pdf.setFillColor(ACCENT)
    pdf.circle(LEFT + 2.5, top - 5.7, 1.6, stroke=0, fill=1)
    return paragraph(pdf, text, LEFT + 12, top, WIDTH - 12) - 3.0


def role(pdf, company, title, dates, top, bullets):
    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 9.1)
    pdf.drawString(LEFT, top, f"{company}  |  {title}")
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 8.2)
    pdf.drawRightString(PAGE_WIDTH - RIGHT, top, dates)
    top -= 17
    for text in bullets:
        top = bullet(pdf, text, top)
    return top - 10


def contact_link(pdf, text, href, x, baseline):
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 8.5)
    pdf.drawString(x, baseline, text)
    text_width = pdf.stringWidth(text, "Helvetica", 8.5)
    pdf.linkURL(href, (x, baseline - 2, x + text_width, baseline + 9), relative=0)
    return x + text_width


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=letter, pageCompression=1)
    pdf.setTitle("Trey Harnden - OpenRouter Enterprise Account Executive Resume")
    pdf.setAuthor("Trey Harnden")

    y = PAGE_HEIGHT - 39
    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 23)
    pdf.drawString(LEFT, y, "Trey Harnden")
    pdf.setFont("Helvetica-Bold", 9.8)
    pdf.drawRightString(PAGE_WIDTH - RIGHT, y + 3, "ENTERPRISE SALES  |  AI INFRASTRUCTURE")
    y -= 20
    x = LEFT
    for label, url in [
        ("Milwaukee, WI", None),
        ("(269) 364-1250", "tel:+12693641250"),
        ("harnden.trey@gmail.com", "mailto:harnden.trey@gmail.com"),
    ]:
        if url:
            x = contact_link(pdf, label, url, x, y)
        else:
            pdf.setFont("Helvetica", 8.5)
            pdf.setFillColor(MUTED)
            pdf.drawString(x, y, label)
            x += pdf.stringWidth(label, "Helvetica", 8.5)
        x += 12
    y -= 12
    x = LEFT
    for label, url in [
        ("treyharnden.com", "https://treyharnden.com"),
        ("github.com/0xTrey", "https://github.com/0xTrey"),
        ("linkedin.com/in/treyharnden", "https://www.linkedin.com/in/treyharnden/"),
    ]:
        x = contact_link(pdf, label, url, x, y) + 13
    y -= 9
    pdf.setStrokeColor(INK)
    pdf.setLineWidth(1.0)
    pdf.line(LEFT, y, PAGE_WIDTH - RIGHT, y)

    y = section(pdf, "Profile", y)
    y = paragraph(
        pdf,
        "Enterprise SaaS seller and AI builder with 8 years across new business, account growth, partnerships, and solution engineering. Closed 20+ six-figure new-logo deals at Folloze, self-sourced 78% of 2023 revenue, and delivered 111% net revenue retention on a $3.57M TCV book in 2025. I also build with LLM APIs and run my own model gateway and agent harness.",
        LEFT,
        y,
        WIDTH,
        size=9.0,
        leading=12.2,
        color=INK,
    )

    y = section(pdf, "Enterprise sales experience", y)
    y = role(pdf, "Folloze", "Head of Partnerships & Go-to-Market Engineering", "Jan 2026 - Present", y, [
        "Lead solution engineering and GTM engineering across technical discovery, customer AI workshops, POCs, demos, partnerships, and product feedback.",
        "Built customer-facing and internal AI systems for outbound, account research, demo environments, and content operations. The broader content program contributed to a 27% increase in inbound demo requests in H1 2026.",
    ])
    y = role(pdf, "Folloze", "Enterprise Account Manager & Partnership Manager", "Jan 2025 - Jan 2026", y, [
        "Achieved 111% net revenue retention on a $3.57M TCV book; renewed 27 of 31 customers and moved 21 to multiyear agreements.",
        "Rebuilt the partner program, producing four partner-sourced deals worth $337K ARR and a new agency channel worth $202K ARR.",
    ])
    y = role(pdf, "Folloze", "Enterprise Account Executive & Agency Partnerships Manager", "Mar 2022 - Jul 2024", y, [
        "Closed 20+ six-figure new-logo deals, finished as the #2 AE in 2023, and self-sourced 78% of that year's revenue.",
        "Owned enterprise deals from discovery through contract while leading agency, OEM, and co-sell motions; reached 111% of Q4 2023 quota.",
    ])
    y = role(pdf, "Banzai / Demio", "Account Executive", "Mar 2020 - Mar 2022", y, [
        "Ranked #1 AE every quarter and achieved 130% of 2021 quota while helping move the webinar SaaS business upmarket.",
        "Upgraded 43 customers from monthly to annual contracts; enterprise customers included KPMG and Square.",
    ])
    y = role(pdf, "Modern Stoa", "Head of Sales", "Mar 2020 - Jan 2022", y, [
        "Owned the P&L and a three-person team; generated $1.23M in 2021 ad sales across 136 deals, up 400% from 2020.",
    ])
    y = role(pdf, "DemandDrive", "Senior Inside Sales Representative & Team Lead", "Jun 2018 - Jan 2020", y, [
        "Booked 139% of lifetime quota, earned President's Club, and trained new hires as the team scaled.",
    ])

    y = section(pdf, "Technical work relevant to OpenRouter", y)
    y = bullet(pdf, "Personal LLM gateway and router: OpenAI-compatible profiles for local and cloud models, provider choices, and usage telemetry under my agent harness.", y)
    y = bullet(pdf, "AgentTape and GTM systems: built a Mac agent-context product and API-driven Folloze outbound and content workflows used in real sales operations.", y)

    y = section(pdf, "Education and skills", y)
    y = paragraph(
        pdf,
        "Wabash College, B.A. in Religion and Political Science. Enterprise prospecting, executive discovery, technical demos, multistakeholder sales, multiyear contracts, partnerships, Salesforce, LLM APIs, model routing, agent workflows.",
        LEFT,
        y,
        WIDTH,
        size=8.4,
        leading=11.3,
    )
    if y < 34:
        raise RuntimeError(f"Resume content exceeds the page: last baseline {y:.1f}")
    pdf.showPage()
    pdf.save()
    print(OUTPUT)


if __name__ == "__main__":
    build()
