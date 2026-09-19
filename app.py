import streamlit as st
import streamlit.components.v1 as components
import json
from pathlib import Path
import re

st.set_page_config(
    page_title="AutiCure",
    layout="wide",
    initial_sidebar_state="collapsed"
)

BASE_DIR = Path(__file__).parent

def read_text(filename: str) -> str:
    """Read a frontend file relative to this Streamlit entry point."""
    return (BASE_DIR / filename).read_text(encoding="utf-8")


def inline_local_assets(document: str) -> str:
    """Replace local stylesheet/script tags while retaining their original order."""
    document = re.sub(
        r'<link[^>]+href=["\'](?:\./)?styles\.css["\'][^>]*>',
        f"<style>\n{read_text('styles.css')}\n</style>",
        document,
        flags=re.IGNORECASE,
    )

    for filename in ("data.js", "app.js", "script.js"):
        document = re.sub(
            rf'<script[^>]+src=["\'](?:\./)?{re.escape(filename)}["\'][^>]*>\s*</script>',
            f"<script>\n{read_text(filename)}\n</script>",
            document,
            flags=re.IGNORECASE,
        )

    return document


html = inline_local_assets(read_text("index.html"))

# Keep the original page's data contract available even if a future script uses it.
world_path = BASE_DIR / "world.json"
if world_path.exists():
    world_data = json.loads(world_path.read_text(encoding="utf-8"))
    world_script = (
        "<script>window.AUTICURE_WORLD_DATA = "
        + json.dumps(world_data, ensure_ascii=False, separators=(",", ":"))
        + ";</script>"
    )
    html = html.replace("</head>", world_script + "\n</head>", 1)

# components.html runs in an iframe. These rules remove the iframe document's
# default margins without touching the site's own layout or component styles.
wrapper = f"""
<style>
html, body {{
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    min-height: 100% !important;
    overflow-x: hidden !important;
}}
</style>
{html}
"""

components.html(
    wrapper,
    height=900,
    scrolling=True
)