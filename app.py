import streamlit as st
import streamlit.components.v1 as components
from pathlib import Path
import re

st.set_page_config(
    page_title="AutiCure",
    layout="wide",
    initial_sidebar_state="collapsed"
)

BASE_DIR = Path(__file__).parent

# Read files
html = (BASE_DIR / "index.html").read_text(encoding="utf-8")
css = (BASE_DIR / "styles.css").read_text(encoding="utf-8")

# Read JavaScript files if they exist
js_files = {}

for filename in ["data.js", "app.js", "script.js"]:
    path = BASE_DIR / filename
    if path.exists():
        js_files[filename] = path.read_text(encoding="utf-8")

# Read world.json if it exists
world_json = ""
world_path = BASE_DIR / "world.json"

if world_path.exists():
    world_json = world_path.read_text(encoding="utf-8")

# Replace CSS file reference with inline CSS
html = re.sub(
    r'<link[^>]+href=["\']styles\.css["\'][^>]*>',
    f"<style>{css}</style>",
    html,
    flags=re.IGNORECASE
)

# Replace JavaScript file references with inline JavaScript
for filename, content in js_files.items():
    pattern = rf'<script[^>]+src=["\'](?:\.\/)?{re.escape(filename)}["\'][^>]*>\s*</script>'

    html = re.sub(
        pattern,
        f"<script>\n{content}\n</script>",
        html,
        flags=re.IGNORECASE
    )

# Make world.json available to JavaScript
if world_json:
    html = html.replace(
        "</head>",
        f"""
        <script>
        window.AUTICURE_WORLD_DATA = {world_json};
        </script>
        </head>
        """
    )

# Remove Streamlit-style margins around the embedded page
wrapper = f"""
<style>
html, body {{
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    overflow-x: hidden !important;
}}

body {{
    background: transparent !important;
}}

.stApp {{
    background: transparent !important;
}}
</style>

{html}
"""

components.html(
    wrapper,
    height=1200,
    scrolling=True
)