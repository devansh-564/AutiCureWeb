/* =====================================================
   AutiCure – Core Application Controller & State Engine
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  let therapistTab = 'overview';
  let therapistChild = 'ALL';
  let therapistStatus = 'ALL';
  let therapistPlanChild = 'DEMO-A';
  let therapistInsightChild = 'DEMO-A';
  let therapistReportChild = 'DEMO-A';
  let parentChild = 'DEMO-A';
  let schoolChild = 'DEMO-A';
  let schoolTab = 'insights';
  let caregiverChild = 'DEMO-A';
  let caregiverTab = 'dashboard';

  // -----------------------------------------------------
  // 1. MAIN RENDER CONTROLLER
  // -----------------------------------------------------
  function renderAllDashboards() {
    renderParentDashboard();
    renderTherapistDashboard();
    renderSchoolDashboard();
    renderCaregiverDashboard();
  }

  // -----------------------------------------------------
  // 2. REFINED PARENT DASHBOARD VIEW
  // -----------------------------------------------------
  // 2. REFINED PARENT DASHBOARD VIEW (SINGLE CHILD - ZERO SCROLL)
  // -----------------------------------------------------
  function renderParentDashboard() {
    const pContainer = document.getElementById('parent-dashboard');
    if (!pContainer) return;

    // Single child details: Liam R. (DEMO-A)
    const childId = "DEMO-A";
    const childObj = getChild(childId);
    const latest = latestOf(childId);
    const moodVal = Math.round((latest.Mood_1_to_10 || 8.5) * 10);
    const focusVal = Math.round((latest.Focus_1_to_10 || 7.0) * 10);
    const energyVal = Math.round((latest.Energy_1_to_10 || 9.0) * 10);
    const routines = PARENT_ROUTINES[childId] || [];

    pContainer.innerHTML = `
      <!-- SINGLE FLOATING WHITE DEVICE CARD (PARENT) - NO SCROLL -->
      <div class="device-card" style="height: 520px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; padding: 20px;">
        <!-- Header -->
        <div class="device-header">
          <div class="header-left">
            <div class="header-icon icon-purple">💜</div>
            <div class="header-titles">
              <h2 class="header-title">${childObj.firstName}'s Live Status</h2>
              <span class="header-sub">${childObj.diagnosis} • Age ${childObj.age}</span>
            </div>
          </div>
          <div class="header-right">
            <span class="status-pill online">• Live Synced</span>
          </div>
        </div>

        <!-- Single Area Non-Scrolling Body -->
        <div style="display: flex; flex-direction: column; gap: 10px; flex: 1; margin-top: 10px; justify-content: space-between;">
          <!-- Telemetry Status Alert Banner -->
          <div style="background: #f0fff4; border: 1.5px solid #c6f6d5; padding: 8px 12px; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; font-size: 0.78rem;">
            <span style="color: #276749; font-weight: 700;">🟢 Today's Telemetry: Stable & Strong Focus</span>
            <span style="color: #6f7488; font-size: 0.72rem;">Last Sync: 2m ago</span>
          </div>

          <!-- Live Telemetry Rings -->
          <div class="sub-card" style="padding: 10px 14px; gap: 6px;">
            <div class="sub-card-header" style="font-size: 0.68rem;">REAL-TIME TELEMETRY RINGS</div>
            <div class="rings-row">
              <div class="ring-box">
                <div class="ring-svg-wrap" style="width: 44px; height: 44px;">
                  <svg viewBox="0 0 36 36" class="ring-svg">
                    <path class="ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="ring-circle mood" stroke-dasharray="${moodVal}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <span class="ring-text" style="font-size: 0.75rem;">${moodVal}%</span>
                </div>
                <span class="ring-lbl" style="font-size: 0.68rem;">Mood</span>
              </div>
              <div class="ring-box">
                <div class="ring-svg-wrap" style="width: 44px; height: 44px;">
                  <svg viewBox="0 0 36 36" class="ring-svg">
                    <path class="ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="ring-circle focus" stroke-dasharray="${focusVal}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <span class="ring-text" style="font-size: 0.75rem;">${focusVal}%</span>
                </div>
                <span class="ring-lbl" style="font-size: 0.68rem;">Focus</span>
              </div>
              <div class="ring-box">
                <div class="ring-svg-wrap" style="width: 44px; height: 44px;">
                  <svg viewBox="0 0 36 36" class="ring-svg">
                    <path class="ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="ring-circle energy" stroke-dasharray="${energyVal}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <span class="ring-text" style="font-size: 0.75rem;">${energyVal}%</span>
                </div>
                <span class="ring-lbl" style="font-size: 0.68rem;">Energy</span>
              </div>
              <div class="ring-box">
                <div class="ring-svg-wrap" style="width: 44px; height: 44px;">
                  <svg viewBox="0 0 36 36" class="ring-svg">
                    <path class="ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="ring-circle" style="stroke: #7c6be0;" stroke-dasharray="94, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <span class="ring-text" style="font-size: 0.75rem;">94%</span>
                </div>
                <span class="ring-lbl" style="font-size: 0.68rem;">Adherence</span>
              </div>
            </div>
          </div>

          <!-- Middle Grid: Home Routine & Greenfield Academy Sync -->
          <div class="grid-2col" style="gap: 8px;">
            <!-- Home Routine Checklist -->
            <div class="sub-card" style="padding: 10px 12px; gap: 6px;">
              <div class="sub-card-header" style="font-size: 0.68rem;">DAILY HOME ROUTINE</div>
              <div class="timeline-list" style="gap: 4px;">
                ${routines.slice(0, 3).map(item => `
                  <div class="timeline-row ${item.status}" data-p-routine-id="${item.id}" style="cursor: pointer; font-size: 0.75rem;" title="Click to toggle status">
                    <span class="t-icon" style="font-size: 0.85rem;">${item.icon}</span>
                    <div class="t-details" style="flex: 1;">
                      <span class="t-title" style="font-size: 0.74rem;">${item.title}</span>
                    </div>
                    <span class="resp-badge ${item.status === 'completed' ? 'fast' : (item.status === 'active' ? 'great' : 'avg')}" style="font-size: 0.65rem; padding: 1px 6px;">${item.status}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Greenfield Academy Classroom Sync -->
            <div class="sub-card" style="padding: 10px 12px; gap: 6px;">
              <div class="sub-card-header" style="font-size: 0.68rem;">CLASSROOM TEACHER SYNC</div>
              <div style="font-size: 0.75rem; color: #334155; line-height: 1.35; background: #f8fafc; padding: 6px 8px; border-radius: 8px; border: 1px solid #edf0f7;">
                <strong>Ms. Ananya Sen:</strong> "Liam achieved 92% visual sorting accuracy today with 3-min timer."
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: #6f7488; margin-top: 2px;">
                <span>❤️ HR: <strong>84 bpm</strong></span>
                <span>⏱️ Latency: <strong>1.2s</strong></span>
              </div>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div style="display: flex; gap: 8px;">
            <button class="view-logs-btn" style="flex: 1; text-align: center; font-size: 0.75rem; padding: 8px 12px;" onclick="alert('Direct message sent to Dr. Priya Mehta regarding Liam R.')">💬 Contact Dr. Priya Mehta</button>
            <button class="download-card-report-btn" style="flex: 1; text-align: center; font-size: 0.75rem; padding: 8px 12px;" onclick="triggerPdfReportDownload('DEMO-A')">📄 Download PDF Report</button>
          </div>
        </div>
      </div>
    `;

    attachParentEvents();
  }

  function attachParentEvents() {
    const routineRows = document.querySelectorAll('#parent-dashboard .timeline-row[data-p-routine-id]');
    routineRows.forEach(row => {
      row.addEventListener('click', () => {
        const id = parseInt(row.getAttribute('data-p-routine-id'));
        const list = PARENT_ROUTINES["DEMO-A"] || [];
        const item = list.find(r => r.id === id);
        if (item) {
          if (item.status === 'completed') item.status = 'upcoming';
          else if (item.status === 'upcoming') item.status = 'active';
          else item.status = 'completed';
          renderParentDashboard();
        }
      });
    });
  }

  // -----------------------------------------------------
  // 3. THERAPIST PLATFORM VIEW
  // -----------------------------------------------------
  function renderTherapistDashboard() {
    const tContainer = document.getElementById('therapist-dashboard');
    if (!tContainer) return;

    tContainer.innerHTML = `
      <!-- SINGLE FLOATING WHITE DEVICE CARD (THERAPIST) -->
      <div class="device-card">
        <!-- Header -->
        <div class="device-header">
          <div class="header-left">
            <div class="header-icon icon-green">🩺</div>
            <div class="header-titles">
              <h2 class="header-title">Dr. Priya Mehta</h2>
              <span class="header-sub">Developmental Therapist</span>
            </div>
          </div>
          <div class="header-right">
            <span class="status-pill live">• Live</span>
            <button class="export-btn" id="tpExportCsv">Export CSV</button>
          </div>
        </div>

        <!-- Sub-Nav Tabs -->
        <div class="sub-nav-tabs">
          <button class="tab-btn ${therapistTab === 'overview' ? 'active' : ''}" data-t-tab="overview">Overview</button>
          <button class="tab-btn ${therapistTab === 'monitoring' ? 'active' : ''}" data-t-tab="monitoring">Monitoring</button>
          <button class="tab-btn ${therapistTab === 'plan' ? 'active' : ''}" data-t-tab="plan">Therapy Plan</button>
          <button class="tab-btn ${therapistTab === 'insights' ? 'active' : ''}" data-t-tab="insights">AI Insights</button>
          <button class="tab-btn ${therapistTab === 'reports' ? 'active' : ''}" data-t-tab="reports">Reports</button>
          <button class="tab-btn ${therapistTab === 'messages' ? 'active' : ''}" data-t-tab="messages">Messages</button>
        </div>

        <!-- Tab Body Container with Dedicated Scroll -->
        <div class="device-body-scroll">
          ${renderTherapistTabBody()}
        </div>
      </div>
    `;

    attachTherapistEvents();
  }

  function renderTherapistTabBody() {
    if (therapistTab === 'overview') {
      return `
        <!-- 2x2 KPI Grid -->
        <div class="grid-2x2">
          <div class="sub-card kpi-widget">
            <div class="kpi-top">
              <span class="kpi-icon">👤</span>
              <span class="kpi-val">${CHILDREN.length}</span>
            </div>
            <div class="sub-card-header">ACTIVE CHILDREN</div>
            <span class="kpi-trend green">↗ +2 this week</span>
          </div>

          <div class="sub-card kpi-widget">
            <div class="kpi-top">
              <span class="kpi-icon">⏱️</span>
              <span class="kpi-val">${SESSIONS.length}</span>
            </div>
            <div class="sub-card-header">SESSIONS TODAY</div>
            <span class="kpi-trend purple">2 completed</span>
          </div>

          <div class="sub-card kpi-widget">
            <div class="kpi-top">
              <span class="kpi-icon">⚠️</span>
              <span class="kpi-val">3</span>
            </div>
            <div class="sub-card-header">ALERTS</div>
            <span class="kpi-trend coral">Needs attention</span>
          </div>

          <div class="sub-card kpi-widget">
            <div class="kpi-top">
              <span class="kpi-icon">📈</span>
              <span class="kpi-val">87%</span>
            </div>
            <div class="sub-card-header">AVG PROGRESS</div>
            <span class="kpi-trend green">+12% improvement</span>
          </div>
        </div>

        <!-- Today's Schedule List -->
        <div class="sub-card">
          <div class="sub-card-header">TODAY'S SCHEDULE</div>
          <div class="sched-list">
            <div class="sched-row">
              <span class="sched-time">9:00 AM</span>
              <span class="sched-desc"><strong>Liam R.</strong> — Speech Therapy</span>
              <span class="resp-badge fast">Done</span>
            </div>
            <div class="sched-row">
              <span class="sched-time">10:30 AM</span>
              <span class="sched-desc"><strong>Ava K.</strong> — Motor Skills</span>
              <span class="resp-badge fast">Done</span>
            </div>
            <div class="sched-row">
              <span class="sched-time">12:00 PM</span>
              <span class="sched-desc"><strong>Noah T.</strong> — Cognitive Play</span>
              <span class="resp-badge avg">In Session</span>
            </div>
            <div class="sched-row">
              <span class="sched-time">2:30 PM</span>
              <span class="sched-desc"><strong>Maya S.</strong> — Social Interaction</span>
              <span class="resp-badge great">Upcoming</span>
            </div>
          </div>
        </div>
      `;
    } else if (therapistTab === 'monitoring') {
      return `
        <div class="sub-card">
          <div class="table-filter-bar">
            <select id="tpChildFilter" class="clean-select">
              <option value="ALL" ${therapistChild === 'ALL' ? 'selected' : ''}>All Children (Current Progress)</option>
              ${CHILDREN.map(c => `<option value="${c.id}" ${therapistChild === c.id ? 'selected' : ''}>${c.name}</option>`).join('')}
            </select>
            <select id="tpStatusFilter" class="clean-select">
              <option value="ALL" ${therapistStatus === 'ALL' ? 'selected' : ''}>All Statuses</option>
              <option value="Strong" ${therapistStatus === 'Strong' ? 'selected' : ''}>Strong</option>
              <option value="Developing" ${therapistStatus === 'Developing' ? 'selected' : ''}>Developing</option>
              <option value="Needs Support" ${therapistStatus === 'Needs Support' ? 'selected' : ''}>Needs Support</option>
            </select>
          </div>

          ${therapistChild === 'ALL' ? `
            <!-- UNIQUE CHILD CURRENT PROGRESS CARDS (NO DUPLICATE NAMES) -->
            <div class="child-progress-list">
              ${CHILDREN.filter(c => therapistStatus === 'ALL' || c.status === therapistStatus).map(c => {
                const cSessions = sessionsOf(c.id);
                const avgAcc = avg(cSessions, 'Accuracy_pct');
                const avgRoutine = avg(cSessions, 'Routine_Adherence_pct');
                const latest = latestOf(c.id);
                const statusClass = c.status === 'Strong' ? 'fast' : (c.status === 'Developing' ? 'great' : 'avg');
                const plans = THERAPIST_DATA.therapyPlans[c.id] || [];
                const activePlan = plans[0] ? plans[0].name : "Active Interventions";
                return `
                  <div class="child-progress-card">
                    <div class="c-info">
                      <span class="avatar-circle ${c.color}">${c.avatar}</span>
                      <div>
                        <div class="c-name">${c.name} <span class="c-diag">(${c.diagnosis})</span></div>
                        <div class="c-sub">Current Focus: <strong>${activePlan}</strong> • HR: ${c.baselineHeartRate} bpm</div>
                      </div>
                    </div>

                    <!-- Progress Bar & Key Telemetry Metrics -->
                    <div class="c-progress-meta">
                      <div class="c-mbar-wrap">
                        <div class="c-mbar-info">
                          <span>Overall Progress & Accuracy</span>
                          <strong>${avgAcc}%</strong>
                        </div>
                        <div class="mbar-track">
                          <div class="mbar-fill" style="width: ${avgAcc}%;"></div>
                        </div>
                      </div>
                      <div class="c-mini-stats">
                        <div class="mini-stat"><span class="m-val">${avgRoutine}%</span><span class="m-lbl">Adherence</span></div>
                        <div class="mini-stat"><span class="m-val">${cSessions.length}</span><span class="m-lbl">Sessions</span></div>
                        <span class="resp-badge ${statusClass}">${c.status}</span>
                      </div>
                    </div>

                    <div class="c-actions">
                      <button class="view-logs-btn" data-view-child="${c.id}">View Logs &rarr;</button>
                      <button class="download-card-report-btn" data-child="${c.id}">📄 PDF Report</button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          ` : `
            <!-- DETAILED SESSION LOGS FOR SELECTED CHILD -->
            <div class="child-detail-header">
              <button class="back-all-btn" id="btnBackToAllChildren">&larr; Back to All Children</button>
              <h3 style="margin:0; font-size: 0.95rem; color:#1a1d2e;">Historical Session Telemetry — ${getChild(therapistChild).name}</h3>
            </div>
            <div style="overflow-x:auto; margin-top: 10px;">
              <table class="clean-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Context</th>
                    <th>Accuracy</th>
                    <th>Focus</th>
                    <th>Status</th>
                    <th>Clinical Observations</th>
                  </tr>
                </thead>
                <tbody>
                  ${SESSIONS.filter(s => s.childId === therapistChild && (therapistStatus === 'ALL' || s.status === therapistStatus)).map(s => {
                    const bClass = s.status === 'Strong' ? 'fast' : (s.status === 'Developing' ? 'great' : 'avg');
                    return `
                      <tr>
                        <td><strong>${s.formattedDate}</strong></td>
                        <td>${s.context}</td>
                        <td><strong>${s.Accuracy_pct}%</strong></td>
                        <td>${s.Focus_1_to_10}/10</td>
                        <td><span class="resp-badge ${bClass}">${s.status}</span></td>
                        <td style="font-size:0.75rem; color:#5a607f;">${s.notes}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>
      `;
    } else if (therapistTab === 'plan') {
      const selectedChild = getChild(therapistPlanChild);
      const plans = THERAPIST_DATA.therapyPlans[therapistPlanChild] || THERAPIST_DATA.therapyPlans["DEMO-A"];

      return `
        <div class="sub-card">
          <div class="sub-card-header">INDIVIDUALIZED THERAPY PLANS — ${selectedChild.firstName.toUpperCase()}</div>
          <div class="child-pills-row" style="margin-bottom: 12px;">
            ${CHILDREN.map(c => `
              <button class="child-pill-btn ${c.id === therapistPlanChild ? 'active' : ''}" data-t-plan-child="${c.id}">${c.firstName}</button>
            `).join('')}
          </div>

          <div class="plan-cards-list">
            ${plans.map(p => `
              <div class="plan-item-card">
                <div class="plan-top">
                  <span class="plan-icon">${p.icon}</span>
                  <div style="flex:1;">
                    <div class="plan-title">${p.name} <span class="plan-freq">(${p.frequency})</span></div>
                    <div class="plan-cat">${p.category}</div>
                  </div>
                  <span class="resp-badge ${p.status === 'Active' ? 'fast' : (p.status === 'In Progress' ? 'great' : 'avg')}">${p.status}</span>
                </div>
                <div class="plan-body">
                  <div class="plan-goal-box"><strong>Target Goal:</strong> ${p.targetGoal || 'Maintain 85%+ accuracy.'}</div>
                  <div class="plan-inter-box"><strong>Prescribed Intervention:</strong> ${p.intervention || 'Standard guided practice.'}</div>
                  <div class="plan-mastery-wrap">
                    <div class="mbar-info"><span>Goal Mastery Level</span><strong>${p.mastery}%</strong></div>
                    <div class="mbar-track"><div class="mbar-fill" style="width: ${p.mastery}%;"></div></div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (therapistTab === 'insights') {
      const selectedChild = getChild(therapistInsightChild);
      const insights = THERAPIST_DATA.aiInsights[therapistInsightChild] || THERAPIST_DATA.aiInsights["DEMO-A"];

      return `
        <div class="sub-card">
          <div class="sub-card-header">AI TELEMETRY & CLINICAL INSIGHTS — ${selectedChild.firstName.toUpperCase()}</div>
          <div class="child-pills-row" style="margin-bottom: 12px;">
            ${CHILDREN.map(c => `
              <button class="child-pill-btn ${c.id === therapistInsightChild ? 'active' : ''}" data-t-insight-child="${c.id}">${c.firstName}</button>
            `).join('')}
          </div>

          <div class="ai-insights-list">
            ${insights.map(ins => `
              <div class="ai-insight-box ${ins.type}">
                <div class="ai-header">
                  <span class="ai-badge">${ins.badge}</span>
                  <span class="ai-date">${ins.date || 'Recent Telemetry'}</span>
                </div>
                <p class="ai-text">${ins.text}</p>
                <div class="ai-footer">
                  <div class="ai-confidence">AI Confidence Score: <strong>${ins.confidence}%</strong></div>
                  <button class="ai-action-btn" onclick="alert('Insight applied to IEP plan for ${selectedChild.firstName}')">Apply to IEP</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (therapistTab === 'reports') {
      const selectedChild = getChild(therapistReportChild);
      const report = THERAPIST_DATA.reports[therapistReportChild] || THERAPIST_DATA.reports["DEMO-A"];

      return `
        <div class="sub-card">
          <div class="sub-card-header">CLINICAL TELEMETRY REPORTS — ${selectedChild.firstName.toUpperCase()}</div>
          <div class="child-pills-row" style="margin-bottom: 12px;">
            ${CHILDREN.map(c => `
              <button class="child-pill-btn ${c.id === therapistReportChild ? 'active' : ''}" data-t-report-child="${c.id}">${c.firstName}</button>
            `).join('')}
          </div>

          <div class="report-card-body">
            <div class="report-header-info">
              <div class="r-avatar ${selectedChild.color}">${selectedChild.avatar}</div>
              <div>
                <h3 class="r-name">${report.childName}</h3>
                <div class="r-sub">${report.diagnosis} • Age ${report.age}</div>
                <div class="r-isaa">${report.isaaScore}</div>
              </div>
            </div>

            <div class="report-stats-grid">
              <div class="r-stat">
                <span class="r-val">${report.avgAccuracy}%</span>
                <span class="r-lbl">Avg Accuracy</span>
              </div>
              <div class="r-stat">
                <span class="r-val">${report.attendancePct}%</span>
                <span class="r-lbl">Attendance</span>
              </div>
              <div class="r-stat">
                <span class="r-val">${report.routineAdherence}%</span>
                <span class="r-lbl">Adherence</span>
              </div>
              <div class="r-stat">
                <span class="r-val">${report.baselineHR}</span>
                <span class="r-lbl">Baseline HR</span>
              </div>
            </div>

            <div class="report-summary-box">
              <div class="sub-card-header">CLINICIAN EVALUATION SUMMARY</div>
              <p class="r-summary-txt">${report.summary}</p>
              <div class="r-sig">${report.therapist}</div>
            </div>

            <div class="report-actions-row">
              <button class="download-report-btn" id="btnDownloadChildReport" data-child="${selectedChild.id}">📄 Download PDF Clinical Report</button>
              <button class="download-csv-btn" id="btnDownloadChildCsv" data-child="${selectedChild.id}">📊 Download CSV Dataset</button>
            </div>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="sub-card">
          <div class="sub-card-header">${therapistTab.toUpperCase()} MODULE</div>
          <p style="font-size:0.88rem; color:#5a607f; margin:0;">Clinical data & telemetry synchronized for ${therapistTab}.</p>
        </div>
      `;
    }
  }

  function attachTherapistEvents() {
    const tabs = document.querySelectorAll('#therapist-dashboard .tab-btn[data-t-tab]');
    tabs.forEach(t => {
      t.addEventListener('click', () => {
        therapistTab = t.getAttribute('data-t-tab');
        renderTherapistDashboard();
      });
    });

    const cSelect = document.getElementById('tpChildFilter');
    if (cSelect) {
      cSelect.addEventListener('change', (e) => {
        therapistChild = e.target.value;
        renderTherapistDashboard();
      });
    }

    const sSelect = document.getElementById('tpStatusFilter');
    if (sSelect) {
      sSelect.addEventListener('change', (e) => {
        therapistStatus = e.target.value;
        renderTherapistDashboard();
      });
    }

    // View Logs buttons in Monitoring
    const viewLogBtns = document.querySelectorAll('#therapist-dashboard .view-logs-btn[data-view-child]');
    viewLogBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        therapistChild = btn.getAttribute('data-view-child');
        renderTherapistDashboard();
      });
    });

    // Back to All Children button in Monitoring Detail
    const backBtn = document.getElementById('btnBackToAllChildren');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        therapistChild = 'ALL';
        renderTherapistDashboard();
      });
    }

    // Card Report Buttons in Monitoring
    const cardReportBtns = document.querySelectorAll('#therapist-dashboard .download-card-report-btn[data-child]');
    cardReportBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cId = btn.getAttribute('data-child');
        triggerPdfReportDownload(cId);
      });
    });

    // Plan Child Pills
    const planPills = document.querySelectorAll('#therapist-dashboard .child-pill-btn[data-t-plan-child]');
    planPills.forEach(p => {
      p.addEventListener('click', () => {
        therapistPlanChild = p.getAttribute('data-t-plan-child');
        renderTherapistDashboard();
      });
    });

    // Insight Child Pills
    const insightPills = document.querySelectorAll('#therapist-dashboard .child-pill-btn[data-t-insight-child]');
    insightPills.forEach(p => {
      p.addEventListener('click', () => {
        therapistInsightChild = p.getAttribute('data-t-insight-child');
        renderTherapistDashboard();
      });
    });

    // Report Child Pills
    const reportPills = document.querySelectorAll('#therapist-dashboard .child-pill-btn[data-t-report-child]');
    reportPills.forEach(p => {
      p.addEventListener('click', () => {
        therapistReportChild = p.getAttribute('data-t-report-child');
        renderTherapistDashboard();
      });
    });

    // Download PDF Report Button
    const pdfReportBtn = document.getElementById('btnDownloadChildReport');
    if (pdfReportBtn) {
      pdfReportBtn.addEventListener('click', () => {
        const cId = pdfReportBtn.getAttribute('data-child');
        triggerPdfReportDownload(cId);
      });
    }

    function triggerPdfReportDownload(cId) {
      const r = THERAPIST_DATA.reports[cId] || THERAPIST_DATA.reports["DEMO-A"];
      const childObj = getChild(cId);
      const plans = THERAPIST_DATA.therapyPlans[cId] || [];
      const insights = THERAPIST_DATA.aiInsights[cId] || [];

      // Open formatted print / report window
      const reportWin = window.open('', '_blank');
      reportWin.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>AutiCure Clinical Telemetry Report - ${r.childName}</title>
          <style>
            body { font-family: 'Inter', 'Segoe UI', sans-serif; padding: 40px; color: #1a1d2e; line-height: 1.6; max-width: 800px; margin: 0 auto; }
            .header-bar { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #7c6be0; padding-bottom: 12px; }
            .brand-name { font-size: 28px; font-weight: 800; color: #1a1d2e; }
            .brand-name span { color: #7c6be0; }
            .doc-type { font-size: 14px; font-weight: 700; color: #4e9f6e; text-transform: uppercase; letter-spacing: 0.05em; }
            .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; background: #f8fafc; padding: 20px; border-radius: 12px; margin: 24px 0; border: 1.5px solid #edf0f7; }
            .meta-item { font-size: 14px; }
            .stat-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px; margin-bottom: 24px; }
            .stat-box { background: #f1f5f9; padding: 14px; border-radius: 10px; text-align: center; }
            .stat-num { font-size: 20px; font-weight: 800; color: #1a1d2e; }
            .stat-lbl { font-size: 11px; color: #6f7488; text-transform: uppercase; font-weight: 600; }
            .box { background: #ffffff; border: 1.5px solid #edf0f7; padding: 20px; border-radius: 12px; margin-top: 20px; }
            .box-title { font-size: 16px; font-weight: 700; color: #7c6be0; margin-top: 0; margin-bottom: 12px; border-bottom: 1px solid #edf0f7; padding-bottom: 6px; }
            .plan-row { font-size: 13px; border-bottom: 1px dashed #cbd5e1; padding: 8px 0; display: flex; justify-content: space-between; }
            .sig { margin-top: 40px; font-weight: 700; color: #4e9f6e; text-align: right; }
          </style>
        </head>
        <body>
          <div class="header-bar">
            <div class="brand-name">AutiCure<span>.</span> Telehealth</div>
            <div class="doc-type">Clinical Telemetry & IEP Report</div>
          </div>
          <div style="font-size: 13px; color: #6f7488; margin-top: 8px;">Report Period: ${r.period} | Generated: ${new Date().toLocaleDateString()}</div>
          
          <div class="meta-grid">
            <div class="meta-item"><strong>Child Name:</strong> ${r.childName}</div>
            <div class="meta-item"><strong>Age:</strong> ${r.age} years</div>
            <div class="meta-item"><strong>Clinical Diagnosis:</strong> ${r.diagnosis}</div>
            <div class="meta-item"><strong>Assessment:</strong> ${r.isaaScore}</div>
          </div>

          <div class="stat-grid">
            <div class="stat-box"><div class="stat-num">${r.avgAccuracy}%</div><div class="stat-lbl">Avg Accuracy</div></div>
            <div class="stat-box"><div class="stat-num">${r.attendancePct}%</div><div class="stat-lbl">Attendance</div></div>
            <div class="stat-box"><div class="stat-num">${r.routineAdherence}%</div><div class="stat-lbl">Adherence</div></div>
            <div class="stat-box"><div class="stat-num">${r.baselineHR}</div><div class="stat-lbl">Baseline HR</div></div>
          </div>

          <div class="box">
            <div class="box-title">Active Therapy Goals & Mastery Progress</div>
            ${plans.map(p => `
              <div class="plan-row">
                <span><strong>${p.name}</strong> (${p.category})</span>
                <span>Mastery: <strong>${p.mastery}%</strong> | Status: ${p.status}</span>
              </div>
            `).join('')}
          </div>

          <div class="box">
            <div class="box-title">AI Telemetry Clinical Insights</div>
            ${insights.map(i => `
              <div style="font-size:13px; margin-bottom: 8px;">
                <strong>${i.badge}:</strong> ${i.text} <em>(Confidence: ${i.confidence}%)</em>
              </div>
            `).join('')}
          </div>

          <div class="box">
            <div class="box-title">Clinician Evaluation & Recommendations</div>
            <p style="font-size:14px; color:#334155;">${r.summary}</p>
            <div class="sig">${r.therapist}<br/><span style="font-size:12px; font-weight:normal; color:#6f7488;">RCI Registered License Verified</span></div>
          </div>
          <script>window.print();</script>
        </body>
        </html>
      `);
      reportWin.document.close();
    }

    // Download Child CSV Button
    const csvChildBtn = document.getElementById('btnDownloadChildCsv');
    if (csvChildBtn) {
      csvChildBtn.addEventListener('click', () => {
        const cId = csvChildBtn.getAttribute('data-child');
        const cSessions = sessionsOf(cId);
        const childObj = getChild(cId);

        let csv = `data:text/csv;charset=utf-8,Session ID,Child Name,Diagnosis,Date,Context,Accuracy %,Status,Notes\n`;
        cSessions.forEach(s => {
          csv += `${s.id},"${childObj.name}","${childObj.diagnosis}",${s.formattedDate},"${s.context}",${s.Accuracy_pct},"${s.status}","${s.notes}"\n`;
        });

        const uri = encodeURI(csv);
        const link = document.createElement("a");
        link.setAttribute("href", uri);
        link.setAttribute("download", `AutiCure_Telemetry_${childObj.firstName}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }

    const csvBtn = document.getElementById('tpExportCsv');
    if (csvBtn) {
      csvBtn.addEventListener('click', () => {
        let csv = "data:text/csv;charset=utf-8,Session ID,Child,Date,Context,Accuracy %,Status\n";
        SESSIONS.forEach(s => {
          const c = getChild(s.childId);
          csv += `${s.id},"${c.name}",${s.formattedDate},"${s.context}",${s.Accuracy_pct},"${s.status}"\n`;
        });
        const uri = encodeURI(csv);
        const link = document.createElement("a");
        link.setAttribute("href", uri);
        link.setAttribute("download", "AutiCure_Telemetry_All_Children.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  }

  // -----------------------------------------------------
  // 4. SCHOOL SUPPORT VIEW
  // -----------------------------------------------------
  function renderSchoolDashboard() {
    const sContainer = document.getElementById('school-dashboard');
    if (!sContainer) return;

    const child = getChild(schoolChild);
    const latest = latestOf(schoolChild);
    const metrics = SCHOOL_DATA.studentMetrics[schoolChild] || SCHOOL_DATA.studentMetrics["DEMO-A"];
    const notes = SCHOOL_DATA.therapistNotes[schoolChild] || SCHOOL_DATA.therapistNotes["DEMO-A"];
    const adaptationsList = SCHOOL_DATA.adaptations[schoolChild] || SCHOOL_DATA.adaptations["DEMO-A"];
    const activitiesList = SCHOOL_DATA.activities[schoolChild] || SCHOOL_DATA.activities["DEMO-A"];
    const guidanceList = SCHOOL_DATA.guidance[schoolChild] || SCHOOL_DATA.guidance["DEMO-A"];
    const shareInfo = SCHOOL_DATA.sharing[schoolChild] || SCHOOL_DATA.sharing["DEMO-A"];

    sContainer.innerHTML = `
      <!-- SINGLE FLOATING WHITE DEVICE CARD (SCHOOL) -->
      <div class="device-card">
        <!-- Header -->
        <div class="device-header">
          <div class="header-left">
            <div class="header-icon icon-blue">📚</div>
            <div class="header-titles">
              <h2 class="header-title">Greenfield Academy</h2>
              <span class="header-sub">Class 3B — Ms. Ananya Sen</span>
            </div>
          </div>
          <div class="header-right">
            <span class="badge-pill">👥 6 students</span>
            <span class="status-pill synced">• Synced</span>
          </div>
        </div>

        <!-- Sub-Nav Tabs -->
        <div class="sub-nav-tabs">
          <button class="tab-btn ${schoolTab === 'insights' ? 'active' : ''}" data-s-tab="insights">Student Insights</button>
          <button class="tab-btn ${schoolTab === 'adaptations' ? 'active' : ''}" data-s-tab="adaptations">Adaptations</button>
          <button class="tab-btn ${schoolTab === 'activities' ? 'active' : ''}" data-s-tab="activities">Activities</button>
          <button class="tab-btn ${schoolTab === 'guidance' ? 'active' : ''}" data-s-tab="guidance">Guidance</button>
          <button class="tab-btn ${schoolTab === 'sharing' ? 'active' : ''}" data-s-tab="sharing">Progress Sharing</button>
        </div>

        <!-- Tab Body Container with Dedicated Scroll -->
        <div class="device-body-scroll">
          <!-- Multi-Child Selector Pills -->
          <div class="child-pills-row" style="margin-bottom: 8px;">
            ${CHILDREN.map(c => `
              <button class="child-pill-btn ${c.id === schoolChild ? 'active' : ''}" data-s-child="${c.id}">${c.firstName}</button>
            `).join('')}
          </div>

          <!-- Active Child Classroom Summary Bar -->
          <div style="background: #f8fafc; border: 1px solid #edf0f7; padding: 6px 12px; border-radius: 10px; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; font-size: 0.75rem;">
            <div>
              <strong style="color: #1a1d2e;">${child.name}</strong> <span style="color: #6f7488;">(${child.diagnosis}, Age ${child.age})</span>
            </div>
            <span class="resp-badge ${child.status === 'Strong' ? 'fast' : (child.status === 'Developing' ? 'great' : 'avg')}" style="font-size: 0.68rem;">${child.status}</span>
          </div>

          ${schoolTab === 'insights' ? `
            <!-- Widget 1: STUDENT TELEMETRY INSIGHTS -->
            <div class="sub-card">
              <div class="sub-card-header">STUDENT TELEMETRY INSIGHTS — ${child.firstName.toUpperCase()}</div>
              <div class="metric-bars-list">
                <div class="mbar-row">
                  <div class="mbar-meta">
                    <span>⏱️ <span class="mbar-val">${metrics.attentionSpan}</span></span>
                    <span class="mbar-lbl">ATTENTION SPAN</span>
                  </div>
                  <div class="mbar-track"><div class="mbar-fill" style="width: ${Math.min(100, parseInt(metrics.attentionSpan) * 3)}%;"></div></div>
                </div>
                <div class="mbar-row">
                  <div class="mbar-meta">
                    <span>💬 <span class="mbar-val">${metrics.communicationLevel}</span></span>
                    <span class="mbar-lbl">COMMUNICATION</span>
                  </div>
                  <div class="mbar-track"><div class="mbar-fill" style="width: ${parseInt(metrics.communicationLevel.replace('Level ', '')) * 25}%;"></div></div>
                </div>
                <div class="mbar-row">
                  <div class="mbar-meta">
                    <span>☑️ <span class="mbar-val">${metrics.engagement}%</span></span>
                    <span class="mbar-lbl">ENGAGEMENT</span>
                  </div>
                  <div class="mbar-track"><div class="mbar-fill" style="width: ${metrics.engagement}%;"></div></div>
                </div>
                <div class="mbar-row">
                  <div class="mbar-meta">
                    <span>🎯 <span class="mbar-val">${metrics.accuracy}%</span></span>
                    <span class="mbar-lbl">ACCURACY</span>
                  </div>
                  <div class="mbar-track"><div class="mbar-fill" style="width: ${metrics.accuracy}%;"></div></div>
                </div>
              </div>
            </div>

            <!-- Widget 2: THERAPIST NOTES FOR TEACHER -->
            <div class="sub-card">
              <div class="sub-card-header">THERAPIST NOTES FOR TEACHER</div>
              <div class="bullet-notes">
                ${notes.map(n => `
                  <div class="bullet-row">
                    <span class="dot-${n.dot}">●</span>
                    <span>${n.text}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : schoolTab === 'adaptations' ? `
            <!-- CLASSROOM ADAPTATIONS LIST -->
            <div class="sub-card">
              <div class="sub-card-header">INCLUSIVE CLASSROOM ADAPTATIONS — ${child.firstName.toUpperCase()}</div>
              <div class="adapt-list">
                ${adaptationsList.map(a => `
                  <div class="adapt-item">
                    <span class="adapt-icon">${a.icon}</span>
                    <div style="flex:1;">
                      <div class="adapt-title">${a.name} <span class="resp-badge ${a.priority === 'Urgent' ? 'avg' : (a.priority === 'High' ? 'fast' : 'great')}">${a.priority} Priority</span></div>
                      <div class="adapt-desc">${a.desc}</div>
                      <span class="adapt-status">${a.status}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : schoolTab === 'activities' ? `
            <!-- CLASSROOM SENSORY & SKILL ACTIVITIES -->
            <div class="sub-card">
              <div class="sub-card-header">CLASSROOM ACTIVITIES & PROGRESS — ${child.firstName.toUpperCase()}</div>
              <div class="act-list">
                ${activitiesList.map(act => `
                  <div class="act-item">
                    <span class="act-emoji">${act.emoji}</span>
                    <div style="flex:1;">
                      <div class="act-title">${act.name} <span class="act-dur">(${act.duration})</span></div>
                      <div class="act-cat">${act.category} • ${act.type}</div>
                      <div class="mbar-track" style="margin-top: 6px;"><div class="mbar-fill" style="width: ${act.progress}%;"></div></div>
                    </div>
                    <span class="resp-badge ${act.status === 'Completed' ? 'fast' : (act.status === 'Needs Support' ? 'avg' : 'great')}">${act.progress}%</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : schoolTab === 'guidance' ? `
            <!-- CLINICAL THERAPIST GUIDANCE FOR TEACHERS -->
            <div class="sub-card">
              <div class="sub-card-header">CLINICAL TEACHER GUIDANCE — ${child.firstName.toUpperCase()}</div>
              <div class="guidance-list">
                ${guidanceList.map(g => `
                  <div class="guidance-box">
                    <div class="g-header"><span class="g-cat">${g.category} Guidance</span></div>
                    <div class="g-title">${g.title}</div>
                    <p class="g-txt">${g.text}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : `
            <!-- PROGRESS SHARING WITH PARENTS & CLINIC -->
            <div class="sub-card">
              <div class="sub-card-header">MULTI-STAKEHOLDER PROGRESS SHARING — ${child.firstName.toUpperCase()}</div>
              <div class="sharing-box">
                <div class="sharing-row"><span>Home App Sync:</span> <strong style="color:#4e9f6e;">✓ ${shareInfo.homeSyncStatus}</strong></div>
                <div class="sharing-row"><span>Clinical Verification:</span> <strong style="color:#7c6be0;">✓ ${shareInfo.clinicSyncStatus}</strong></div>
                <div class="sharing-row"><span>Last Telemetry Sync:</span> <span>${shareInfo.lastSync}</span></div>
              </div>
              <div class="sub-card-header" style="margin-top:10px;">DAILY CLASSROOM TELEMETRY LOGS</div>
              <div class="bullet-notes">
                ${shareInfo.dailyReports.map(dr => `
                  <div class="bullet-row">
                    <span class="dot-green">●</span>
                    <div><strong>${dr.date}:</strong> ${dr.summary} <em>(${dr.teacher})</em></div>
                  </div>
                `).join('')}
              </div>
              <button class="view-logs-btn" style="margin-top:10px; width:100%; text-align:center;" onclick="alert('Classroom report PDF downloaded for ${child.name}')">📄 Export Classroom IEP Report</button>
            </div>
          `}
        </div>
      </div>
    `;

    attachSchoolEvents();
  }

  function attachSchoolEvents() {
    const tabs = document.querySelectorAll('#school-dashboard .tab-btn[data-s-tab]');
    tabs.forEach(t => {
      t.addEventListener('click', () => {
        schoolTab = t.getAttribute('data-s-tab');
        renderSchoolDashboard();
      });
    });

    const pills = document.querySelectorAll('#school-dashboard .child-pill-btn[data-s-child]');
    pills.forEach(p => {
      p.addEventListener('click', () => {
        schoolChild = p.getAttribute('data-s-child');
        renderSchoolDashboard();
      });
    });
  }

  // -----------------------------------------------------
  // 5. CAREGIVER SUPPORT VIEW
  // -----------------------------------------------------
  function renderCaregiverDashboard() {
    const cContainer = document.getElementById('caregiver-dashboard');
    if (!cContainer) return;

    const tasks = CAREGIVER_DATA.routineTasks[caregiverChild] || CAREGIVER_DATA.routineTasks["DEMO-A"];
    const selectedChild = getChild(caregiverChild);

    cContainer.innerHTML = `
      <!-- SINGLE FLOATING WHITE DEVICE CARD (CAREGIVER) -->
      <div class="device-card">
        <!-- Header -->
        <div class="device-header">
          <div class="header-left">
            <div class="header-icon icon-pink">🤝</div>
            <div class="header-titles">
              <h2 class="header-title">AutiCure Caregivers</h2>
              <span class="header-sub">Employment & Support Hub</span>
            </div>
          </div>
          <div class="header-right">
            <span class="badge-pill verified">🛡 Verified</span>
            <span class="status-pill online-coral">• 24 online</span>
          </div>
        </div>

        <!-- Sub-Nav Tabs -->
        <div class="sub-nav-tabs">
          <button class="tab-btn ${caregiverTab === 'marketplace' ? 'active' : ''}" data-c-tab="marketplace">Marketplace</button>
          <button class="tab-btn ${caregiverTab === 'training' ? 'active' : ''}" data-c-tab="training">Training</button>
          <button class="tab-btn ${caregiverTab === 'employment' ? 'active' : ''}" data-c-tab="employment">Employment</button>
          <button class="tab-btn ${caregiverTab === 'safety' ? 'active' : ''}" data-c-tab="safety">Safety</button>
          <button class="tab-btn ${caregiverTab === 'dashboard' ? 'active' : ''}" data-c-tab="dashboard">My Dashboard</button>
        </div>

        <!-- Tab Body Container with Dedicated Scroll -->
        <div class="device-body-scroll">
          ${caregiverTab === 'marketplace' ? `
            <!-- CAREGIVER MARKETPLACE LISTINGS -->
            <div class="sub-card">
              <div class="sub-card-header">VERIFIED CAREGIVER MARKETPLACE</div>
              <div class="cg-market-list">
                ${CAREGIVER_DATA.marketplace.map(cg => `
                  <div class="cg-item">
                    <span class="avatar-circle ${cg.color}">${cg.avatar}</span>
                    <div style="flex:1;">
                      <div class="cg-name">${cg.name} <span class="resp-badge fast">${cg.badge}</span></div>
                      <div class="cg-spec">${cg.spec}</div>
                      <div class="cg-meta"><span>${cg.rating}</span> • <strong style="color:#1a1d2e;">${cg.rate}</strong></div>
                    </div>
                    <button class="view-logs-btn" onclick="alert('Placement request sent to ${cg.name}')">Book Caregiver</button>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : caregiverTab === 'training' ? `
            <!-- ACCREDITED CAREGIVER TRAINING MODULES -->
            <div class="sub-card">
              <div class="sub-card-header">ACCREDITED AUTISM TRAINING & CERTIFICATION</div>
              <div class="cg-train-list">
                ${CAREGIVER_DATA.training.map(tr => `
                  <div class="train-item">
                    <div class="train-top">
                      <span class="train-title">🎓 ${tr.title}</span>
                      <span class="resp-badge ${tr.progress === 100 ? 'fast' : 'great'}">${tr.status}</span>
                    </div>
                    <div class="train-sub">${tr.certificate}</div>
                    <div class="mbar-track" style="margin-top:6px;"><div class="mbar-fill" style="width: ${tr.progress}%;"></div></div>
                    <button class="download-card-report-btn" style="margin-top:8px;" onclick="alert('Opening module: ${tr.title}')">${tr.progress === 100 ? 'View Certificate' : 'Continue Module →'}</button>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : caregiverTab === 'employment' ? `
            <!-- EMPLOYMENT & SHIFT TRACKER -->
            <div class="sub-card">
              <div class="sub-card-header">EMPLOYMENT & SHIFT TRACKER</div>
              <div class="emp-stats-grid">
                <div class="stat-box"><div class="stat-num" style="font-size:16px;">${CAREGIVER_DATA.employment.weeklyHours}</div><div class="stat-lbl">Hours Logged</div></div>
                <div class="stat-box"><div class="stat-num" style="font-size:16px; color:#4e9f6e;">${CAREGIVER_DATA.employment.weeklyEarnings}</div><div class="stat-lbl">Weekly Earnings</div></div>
                <div class="stat-box"><div class="stat-num" style="font-size:16px; color:#7c6be0;">${CAREGIVER_DATA.employment.ratingAvg}</div><div class="stat-lbl">Caregiver Rating</div></div>
              </div>

              <div class="sub-card-header" style="margin-top:12px;">ACTIVE FAMILY PLACEMENTS</div>
              <div class="assign-list">
                ${CAREGIVER_DATA.employment.activePlacements.map(p => `
                  <div class="assign-row">
                    <span class="t-icon">🏡</span>
                    <div style="flex:1;">
                      <div style="font-size:0.85rem; font-weight:700; color:#1a1d2e;">${p.family}</div>
                      <div style="font-size:0.75rem; color:#8F94A6;">${p.schedule}</div>
                    </div>
                    <span class="resp-badge fast">${p.rate}</span>
                  </div>
                `).join('')}
              </div>
              <button class="view-logs-btn" style="margin-top:10px; width:100%; text-align:center;" onclick="alert('Shift hours logged successfully!')">⏱️ Clock-in / Log Shift Hours</button>
            </div>
          ` : caregiverTab === 'safety' ? `
            <!-- SAFETY & BACKGROUND VERIFICATION -->
            <div class="sub-card">
              <div class="sub-card-header">SAFETY & TRUST CREDENTIALS</div>
              <div class="safety-list">
                <div class="safety-row"><span>Aadhaar Identity:</span> <strong style="color:#4e9f6e;">${CAREGIVER_DATA.safety.aadhaarStatus}</strong></div>
                <div class="safety-row"><span>Police Background:</span> <strong style="color:#4e9f6e;">${CAREGIVER_DATA.safety.policeCheck}</strong></div>
                <div class="safety-row"><span>Clinical Reference:</span> <strong style="color:#7c6be0;">${CAREGIVER_DATA.safety.clinicalRef}</strong></div>
                <div class="safety-row"><span>Medical Fitness:</span> <strong style="color:#4e9f6e;">${CAREGIVER_DATA.safety.medicalClearance}</strong></div>
              </div>

              <div class="sos-card" style="background:#fff5f5; border:1.5px solid #feb2b2; padding:12px; border-radius:14px; margin-top:10px; text-align:center;">
                <div style="font-size:0.85rem; font-weight:700; color:#c53030;">🚨 Emergency Telemetry SOS Trigger</div>
                <div style="font-size:0.75rem; color:#742a2a; margin:4px 0;">Instant location telemetry check-in & priority clinician notify.</div>
                <button class="view-logs-btn" style="background:#e53e3e;" onclick="alert('Emergency SOS triggered! Clinical team and family notified.')">Trigger Live SOS Alert</button>
              </div>
            </div>
          ` : `
            <!-- Greeting Header -->
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <h3 class="greeting-title">Good Morning, Rekha!</h3>
              <span class="greeting-date">${CAREGIVER_DATA.todayDateFormatted}</span>
            </div>

            <!-- Today's Assignments Sub-Card -->
            <div class="sub-card">
              <div class="sub-card-header">TODAY'S ASSIGNMENTS</div>
              <div class="assign-list">
                ${CAREGIVER_DATA.shifts.map(s => `
                  <div class="assign-row">
                    <span class="avatar-circle ${s.color}">${s.avatar}</span>
                    <div style="flex:1;">
                      <div style="font-size:0.85rem; font-weight:700; color:#1a1d2e;">${s.childName}</div>
                      <div style="font-size:0.75rem; color:#8F94A6;">${s.time}</div>
                    </div>
                    <span class="resp-badge ${s.status === 'active' ? 'fast' : 'avg'}">${s.statusLabel}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Child Selector Pills -->
            <div class="child-pills-row">
              ${CHILDREN.map(c => `
                <button class="child-pill-btn ${c.id === caregiverChild ? 'active' : ''}" data-c-child="${c.id}">${c.firstName}</button>
              `).join('')}
            </div>

            <!-- Routine Tasks Checklist Sub-Card -->
            <div class="sub-card">
              <div class="sub-card-header">ROUTINE TASKS CHECKLIST — ${selectedChild.firstName.toUpperCase()}</div>
              <div class="task-list">
                ${tasks.map(t => `
                  <div class="task-row ${t.completed ? 'done' : ''}" data-c-task="${t.id}">
                    <span class="chk-box">${t.completed ? '✓' : ''}</span>
                    <span class="task-txt" style="flex:1;">${t.text}</span>
                    ${t.current && !t.completed ? '<span class="resp-badge great">Current</span>' : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          `}
        </div>
      </div>
    `;

    attachCaregiverEvents();
  }

  function attachCaregiverEvents() {
    const tabs = document.querySelectorAll('#caregiver-dashboard .tab-btn[data-c-tab]');
    tabs.forEach(t => {
      t.addEventListener('click', () => {
        caregiverTab = t.getAttribute('data-c-tab');
        renderCaregiverDashboard();
      });
    });

    const pills = document.querySelectorAll('#caregiver-dashboard .child-pill-btn[data-c-child]');
    pills.forEach(p => {
      p.addEventListener('click', () => {
        caregiverChild = p.getAttribute('data-c-child');
        renderCaregiverDashboard();
      });
    });

    const tRows = document.querySelectorAll('#caregiver-dashboard .task-row[data-c-task]');
    tRows.forEach(row => {
      row.addEventListener('click', () => {
        const taskId = row.getAttribute('data-c-task');
        const list = CAREGIVER_DATA.routineTasks[caregiverChild] || CAREGIVER_DATA.routineTasks["DEMO-A"];
        const task = list.find(t => t.id === taskId);
        if (task) {
          task.completed = !task.completed;
          renderCaregiverDashboard();
        }
      });
    });
  }

  // Initial render of all portal dashboards inside the landing page slides
  renderAllDashboards();
});
