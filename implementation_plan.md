# Implementation Plan — Community Partners Accessibility, Distinct Multi-Child Data, and Compact Non-Scrolling Parental Dashboard

This plan updates the technical specifications based on your direct preferences:
1. **Community Partners Website Accessibility**: Ensure all partner website links (NIEPID, Sahara Foundation, Sri Vidya School, Nayi Disha) are fully accessible, open safely in new tabs (`target="_blank" rel="noopener noreferrer"`), have explicit click-propagation isolation, accessible keyboard attributes, and prominent website links both on partner cards and inside the partner modal overlay.
2. **Distinct Multi-Child Data in School & Therapist Portals**: Expand data models in `data.js` so each child (Liam R., Ava K., Noah T., Maya S.) has rich, distinct data in the School Dashboard (Student Insights, Classroom Adaptations, Activities, Teacher Guidance, Progress Sharing) and Therapist Dashboard.
3. **Refined Single-Child Non-Scrolling Parental Dashboard**: Re-design the Parental Dashboard to display details for a **single child** (Liam R.) cleanly fitting within **one single compact card area without any vertical scrolling**.

---

## User Review Required

> [!IMPORTANT]
> - **Parental Dashboard Layout**: The Parental Dashboard will showcase **only one child's details** (Liam R.) without multi-child selector pills. The entire widget layout will be compact and streamlined so **all information fits into a single, non-scrolling viewable area**.
> - **Community Partner Links**: Direct website links on partner cards and inside the modal will open official websites safely in new browser tabs without event conflicts.
> - **School Dashboard Child Diversity**: Switching children in the School Dashboard (Liam, Ava, Noah, Maya) will update all 5 classroom tabs with completely unique, personalized data.

---

## Proposed Changes

### Data Layer

#### [MODIFY] [data.js](file:///d:/AutiCuree%20Web/data.js)
- Ensure external partner URLs in `partnerData` are complete and accessible.
- Expand `SCHOOL_DATA` with unique dataset records for each of the 4 children across metrics, adaptations, activities, guidance, and teacher sharing logs.

---

### UI & Layout

#### [MODIFY] [index.html](file:///d:/AutiCuree%20Web/index.html)
- Add accessibility ARIA labels, role attributes, and keyboard focus tags to Community Partner cards and website link buttons.

#### [MODIFY] [script.js](file:///d:/AutiCuree%20Web/script.js)
- Ensure partner website links inside cards and modal open in new tabs with `event.stopPropagation()` and proper focus handling.

#### [MODIFY] [app.js](file:///d:/AutiCuree%20Web/app.js)
- **Parental Dashboard (`renderParentDashboard`)**:
  - Focus strictly on a single child profile (Liam R.) without child selector pills.
  - Structure the layout into a clean, compact, non-scrolling grid:
    - **Header**: Liam's Live Telemetry Status & Support Tier (Level 1).
    - **Live Telemetry Rings Row**: Compact rings for Mood (85%), Focus (70%), Energy (90%), and Routine Adherence (94%).
    - **Home Routine & Sync Box**: Compact 3-item daily checklist with interactive toggle status and real-time school sync note from Ms. Ananya Sen.
    - **Health & Quick Actions Footer**: Resting Heart Rate (84 bpm), Latency (1.2s), "💬 Contact Therapist" button, and "📄 Download Report" button.
  - Remove inner scroll containers to ensure 100% fit within the single card area.
- **School Dashboard (`renderSchoolDashboard`)**:
  - Update all 5 tabs (Student Insights, Adaptations, Activities, Guidance, Progress Sharing) to dynamically render child-specific data when switching between Liam, Ava, Noah, and Maya.

#### [MODIFY] [styles.css](file:///d:/AutiCuree%20Web/styles.css)
- Add CSS rules for compact single-area Parental Dashboard (fixed height, gap optimization, clean typography, zero scrollbar).
- Add CSS rules for Community Partner website buttons (hover effects, focus indicators, responsive card layout).

---

## Verification Plan

### Automated Tests
- Syntax check for JS files and clean console log verification.

### Manual Verification
1. **Community Partners Accessibility**:
   - Click "🌐 Visit Website ↗" on each partner card to ensure it opens the external site in a new tab without opening the modal.
   - Click the card to open the detail modal and test the "Visit Official Website →" link.
   - Test keyboard navigation (`Tab` + `Enter`/`Space`).
2. **School Dashboard Multi-Child Data**:
   - Select different children (Liam, Ava, Noah, Maya) in the School Dashboard.
   - Verify each tab displays distinct, customized data for that child.
3. **Compact Non-Scrolling Parental Dashboard**:
   - Inspect the Parental Dashboard card on various screen resolutions.
   - Confirm it displays only Liam R.'s details.
   - Confirm there is NO scrollbar and all information fits neatly inside the single viewable area.
