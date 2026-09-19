/* =====================================================
   AutiCure Core Dataset & Clinical Telemetry Store
   ===================================================== */

const CHILDREN = [
    {
        id: "DEMO-A",
        key: "liam",
        name: "Liam R.",
        firstName: "Liam",
        age: 7,
        diagnosis: "Autism Spectrum (Level 1)",
        avatar: "L",
        color: "lavender",
        status: "Developing",
        baselineHeartRate: 84
    },
    {
        id: "DEMO-B",
        key: "ava",
        name: "Ava K.",
        firstName: "Ava",
        age: 6,
        diagnosis: "Autism Spectrum (Level 1)",
        avatar: "A",
        color: "skyblue",
        status: "Strong",
        baselineHeartRate: 78
    },
    {
        id: "DEMO-C",
        key: "noah",
        name: "Noah T.",
        firstName: "Noah",
        age: 8,
        diagnosis: "Autism Spectrum (Level 2)",
        avatar: "N",
        color: "mint",
        status: "Needs Support",
        baselineHeartRate: 88
    },
    {
        id: "DEMO-D",
        key: "maya",
        name: "Maya S.",
        firstName: "Maya",
        age: 5,
        diagnosis: "Autism Spectrum (Level 1)",
        avatar: "M",
        color: "peach",
        status: "Strong",
        baselineHeartRate: 82
    }
];

const SESSIONS = [
    // Liam Sessions (DEMO-A)
    {
        id: "SES-101",
        childId: "DEMO-A",
        date: "2026-09-19",
        formattedDate: "Sep 19, 2026",
        context: "Therapy Game",
        Mood_1_to_10: 8.5,
        Focus_1_to_10: 7.0,
        Energy_1_to_10: 9.0,
        Engagement_pct: 88,
        Accuracy_pct: 92,
        Response_Time_sec: 1.2,
        Routine_Adherence_pct: 94,
        PIM_Demonstration_Score: 88,
        status: "Strong",
        notes: "High visual sorting accuracy. Responded quickly to color prompts."
    },
    {
        id: "SES-102",
        childId: "DEMO-A",
        date: "2026-09-17",
        formattedDate: "Sep 17, 2026",
        context: "Home Practice",
        Mood_1_to_10: 7.8,
        Focus_1_to_10: 6.8,
        Energy_1_to_10: 8.2,
        Engagement_pct: 82,
        Accuracy_pct: 86,
        Response_Time_sec: 1.5,
        Routine_Adherence_pct: 90,
        PIM_Demonstration_Score: 84,
        status: "Developing",
        notes: "Completed routine with minimal verbal encouragement."
    },
    {
        id: "SES-103",
        childId: "DEMO-A",
        date: "2026-09-15",
        formattedDate: "Sep 15, 2026",
        context: "School Activity",
        Mood_1_to_10: 6.5,
        Focus_1_to_10: 5.5,
        Energy_1_to_10: 7.0,
        Engagement_pct: 74,
        Accuracy_pct: 78,
        Response_Time_sec: 1.9,
        Routine_Adherence_pct: 82,
        PIM_Demonstration_Score: 76,
        status: "Developing",
        notes: "Mild sensory fatigue around 20 min mark during group lesson."
    },
    {
        id: "SES-104",
        childId: "DEMO-A",
        date: "2026-09-12",
        formattedDate: "Sep 12, 2026",
        context: "Caregiver Routine",
        Mood_1_to_10: 8.0,
        Focus_1_to_10: 7.2,
        Energy_1_to_10: 8.5,
        Engagement_pct: 85,
        Accuracy_pct: 88,
        Response_Time_sec: 1.4,
        Routine_Adherence_pct: 91,
        PIM_Demonstration_Score: 82,
        status: "Strong",
        notes: "Smooth transition during guided color matching play."
    },
    {
        id: "SES-105",
        childId: "DEMO-A",
        date: "2026-09-09",
        formattedDate: "Sep 9, 2026",
        context: "Therapy Game",
        Mood_1_to_10: 7.2,
        Focus_1_to_10: 6.0,
        Energy_1_to_10: 7.5,
        Engagement_pct: 78,
        Accuracy_pct: 80,
        Response_Time_sec: 1.8,
        Routine_Adherence_pct: 85,
        PIM_Demonstration_Score: 78,
        status: "Developing",
        notes: "Emotion recognition score steady. Great visual tracking."
    },

    // Ava Sessions (DEMO-B)
    {
        id: "SES-201",
        childId: "DEMO-B",
        date: "2026-09-18",
        formattedDate: "Sep 18, 2026",
        context: "Therapy Game",
        Mood_1_to_10: 9.2,
        Focus_1_to_10: 8.8,
        Energy_1_to_10: 8.5,
        Engagement_pct: 94,
        Accuracy_pct: 96,
        Response_Time_sec: 1.0,
        Routine_Adherence_pct: 96,
        PIM_Demonstration_Score: 92,
        status: "Strong",
        notes: "Outstanding motor coordination skills."
    },
    {
        id: "SES-202",
        childId: "DEMO-B",
        date: "2026-09-14",
        formattedDate: "Sep 14, 2026",
        context: "School Activity",
        Mood_1_to_10: 8.8,
        Focus_1_to_10: 8.2,
        Energy_1_to_10: 8.0,
        Engagement_pct: 90,
        Accuracy_pct: 91,
        Response_Time_sec: 1.1,
        Routine_Adherence_pct: 92,
        PIM_Demonstration_Score: 89,
        status: "Strong",
        notes: "Active participation in turn-taking activities."
    },

    // Noah Sessions (DEMO-C)
    {
        id: "SES-301",
        childId: "DEMO-C",
        date: "2026-09-19",
        formattedDate: "Sep 19, 2026",
        context: "School Activity",
        Mood_1_to_10: 5.2,
        Focus_1_to_10: 4.5,
        Energy_1_to_10: 6.0,
        Engagement_pct: 58,
        Accuracy_pct: 62,
        Response_Time_sec: 2.8,
        Routine_Adherence_pct: 68,
        PIM_Demonstration_Score: 60,
        status: "Needs Support",
        notes: "Required 2 sensory breaks. High sensitivity to background noise."
    },
    {
        id: "SES-302",
        childId: "DEMO-C",
        date: "2026-09-16",
        formattedDate: "Sep 16, 2026",
        context: "Therapy Game",
        Mood_1_to_10: 6.0,
        Focus_1_to_10: 5.0,
        Energy_1_to_10: 6.5,
        Engagement_pct: 64,
        Accuracy_pct: 68,
        Response_Time_sec: 2.4,
        Routine_Adherence_pct: 72,
        PIM_Demonstration_Score: 65,
        status: "Needs Support",
        notes: "Benefited from noise-cancelling headphones."
    },

    // Maya Sessions (DEMO-D)
    {
        id: "SES-401",
        childId: "DEMO-D",
        date: "2026-09-18",
        formattedDate: "Sep 18, 2026",
        context: "Home Practice",
        Mood_1_to_10: 9.0,
        Focus_1_to_10: 8.5,
        Energy_1_to_10: 9.2,
        Engagement_pct: 92,
        Accuracy_pct: 94,
        Response_Time_sec: 1.1,
        Routine_Adherence_pct: 95,
        PIM_Demonstration_Score: 91,
        status: "Strong",
        notes: "Great turn-taking in color matching play."
    }
];

const PARENT_ROUTINES = {
    "DEMO-A": [
        { id: 1, title: "Morning Visual Schedule Review", time: "8:00 AM", status: "completed", icon: "☀️" },
        { id: 2, title: "Shape Sorter Pro Session", time: "10:30 AM", status: "active", icon: "🧩" },
        { id: 3, title: "Sensory Break & Snack Time", time: "2:00 PM", status: "upcoming", icon: "🍎" },
        { id: 4, title: "Evening Guided Storytelling", time: "7:00 PM", status: "upcoming", icon: "🌙" }
    ],
    "DEMO-B": [
        { id: 1, title: "Fine Motor Tracing Practice", time: "8:30 AM", status: "completed", icon: "✏️" },
        { id: 2, title: "Vocal Pitch Game with Parent", time: "11:00 AM", status: "active", icon: "🎵" },
        { id: 3, title: "Outdoor Turn-Taking Play", time: "3:30 PM", status: "upcoming", icon: "🚲" },
        { id: 4, title: "Calm Down & Bedtime Routine", time: "8:00 PM", status: "upcoming", icon: "🌙" }
    ],
    "DEMO-C": [
        { id: 1, title: "4-7-8 Biofeedback Breathing", time: "8:15 AM", status: "completed", icon: "🧘" },
        { id: 2, title: "Noise-Cancelling Headphones Session", time: "10:00 AM", status: "active", icon: "🎧" },
        { id: 3, title: "Color Countdown Task Transition", time: "1:45 PM", status: "upcoming", icon: "⏱️" },
        { id: 4, title: "Sensory Room Quiet Time", time: "6:30 PM", status: "upcoming", icon: "🛋️" }
    ],
    "DEMO-D": [
        { id: 1, title: "4-Card Story Sequence Game", time: "9:00 AM", status: "completed", icon: "📖" },
        { id: 2, title: "Multi-Color Pattern Puzzle", time: "11:30 AM", status: "active", icon: "🧩" },
        { id: 3, title: "Peer Sharing Practice Session", time: "4:00 PM", status: "upcoming", icon: "🤝" },
        { id: 4, title: "Nightly Expression Reflection", time: "7:30 PM", status: "upcoming", icon: "🌟" }
    ]
};

const THERAPIST_DATA = {
    name: "Dr. Priya Mehta",
    title: "Developmental Therapist",
    activeChildren: 12,
    iepRecommendations: [
        {
            id: "IEP-01",
            childId: "DEMO-A",
            childName: "Liam R.",
            domain: "Visual-Spatial & Eye Contact",
            recommendation: "Advance Shape Sorter difficulty to Level 3. Add 5-minute eye-gaze calibration prior to main tasks.",
            priority: "High",
            status: "Active"
        },
        {
            id: "IEP-02",
            childId: "DEMO-C",
            childName: "Noah T.",
            domain: "Sensory Regulation",
            recommendation: "Implement scheduled 15-minute sensory breaks every 30 minutes. Provide noise-cancelling headset during group work.",
            priority: "Urgent",
            status: "Needs Review"
        },
        {
            id: "IEP-03",
            childId: "DEMO-B",
            childName: "Ava K.",
            domain: "Fine Motor & Speech",
            recommendation: "Advance Word Builder to compound words. Introduce vocal pitch modulation games.",
            priority: "Medium",
            status: "Active"
        },
        {
            id: "IEP-04",
            childId: "DEMO-D",
            childName: "Maya S.",
            domain: "Social Interaction",
            recommendation: "Introduce 2-player turn-taking visual puzzles in classroom settings.",
            priority: "Low",
            status: "Active"
        }
    ],
    therapyPlans: {
        "DEMO-A": [
            { id: "TP-101", name: "Shape Sorter Pro (Level 3)", category: "Cognitive • Visual-Spatial", frequency: "3x / week", mastery: 92, difficulty: 3, status: "Active", icon: "🧩", targetGoal: "90% visual sorting precision under 1.5s latency.", intervention: "5-min eye-gaze calibration before main module." },
            { id: "TP-102", name: "Emotion Mirror & Expression", category: "Social • Emotional", frequency: "2x / week", mastery: 85, difficulty: 2, status: "In Progress", icon: "😊", targetGoal: "Identify 6 core emotions with video prompt support.", intervention: "Mirroring exercises using front camera feeds." },
            { id: "TP-103", name: "Phonic Word Builder", category: "Speech • Vocalization", frequency: "2x / week", mastery: 78, difficulty: 1, status: "Assigned", icon: "🗣️", targetGoal: "Clear vocalization of 2-syllable consonant sounds.", intervention: "Pacing board with visual sound cues." }
        ],
        "DEMO-B": [
            { id: "TP-201", name: "Pencil Grip & Fine Trace", category: "Fine Motor Skills", frequency: "4x / week", mastery: 96, difficulty: 4, status: "Active", icon: "✏️", targetGoal: "Maintain dynamic tripod grip for 15-min continuous writing.", intervention: "Weighted pencil grip + digital canvas tracing." },
            { id: "TP-202", name: "Turn-Taking Dialogue Puzzles", category: "Social Communication", frequency: "3x / week", mastery: 91, difficulty: 3, status: "Active", icon: "💬", targetGoal: "Spontaneous 2-way turn taking without therapist prompting.", intervention: "Partner visual storytelling app exercises." },
            { id: "TP-203", name: "Vocal Pitch Modulation", category: "Speech Articulation", frequency: "2x / week", mastery: 88, difficulty: 2, status: "In Progress", icon: "🎵", targetGoal: "Match target vocal pitch contours in audio feedback games.", intervention: "Interactive pitch pitch-visualizer meter." }
        ],
        "DEMO-C": [
            { id: "TP-301", name: "Sensory Co-Regulation Breathing", category: "Sensory Regulation", frequency: "5x / week", mastery: 62, difficulty: 1, status: "Needs Support", icon: "🧘", targetGoal: "Self-initiate 4-7-8 breathing during overstimulation.", intervention: "Hoberman sphere biofeedback visuals." },
            { id: "TP-302", name: "Visual Timer Transition Sequence", category: "Executive Function", frequency: "4x / week", mastery: 68, difficulty: 2, status: "In Progress", icon: "⏱️", targetGoal: "Smooth activity transitions within 2 minutes of timer signal.", intervention: "Color-decay countdown clock." },
            { id: "TP-303", name: "Noise Adaptation Desk Practice", category: "Auditory Processing", frequency: "3x / week", mastery: 58, difficulty: 1, status: "Assigned", icon: "🎧", targetGoal: "Maintain task focus for 15 mins in 65dB sound environment.", intervention: "Graded white-noise background exposure." }
        ],
        "DEMO-D": [
            { id: "TP-401", name: "Storytelling & Emotion Express", category: "Language & Social", frequency: "3x / week", mastery: 94, difficulty: 3, status: "Active", icon: "📖", targetGoal: "Narrate 4-card sequence stories with expressive vocal tone.", intervention: "Picture card sequencing board." },
            { id: "TP-402", name: "Pattern Matcher Pro", category: "Cognitive Logic", frequency: "3x / week", mastery: 92, difficulty: 3, status: "Active", icon: "🧩", targetGoal: "Complete complex 3-step visual pattern completions.", intervention: "Multi-colored geometric block puzzles." },
            { id: "TP-403", name: "Peer Sharing Routine", category: "Social Inclusion", frequency: "2x / week", mastery: 89, difficulty: 2, status: "In Progress", icon: "🤝", targetGoal: "Share therapeutic toys during structured 10-min play.", intervention: "Guided play helper script." }
        ]
    },
    aiInsights: {
        "DEMO-A": [
            { type: "positive", badge: "🟢 Positive Pattern", text: "Liam shows 42% improved eye-contact engagement during emotion recognition tasks. Visual sorting accuracy at peak 92%.", confidence: 92, date: "Sep 19, 2026" },
            { type: "info", badge: "🔵 Telemetry Milestone", text: "Visual response latency reduced to 1.2s average. Attention span holding steady at 24 minutes.", confidence: 88, date: "Sep 17, 2026" },
            { type: "positive", badge: "🟢 Routine Adherence", text: "Caregiver routine adherence hit 94% over the past 14 days, demonstrating optimal home support.", confidence: 95, date: "Sep 15, 2026" }
        ],
        "DEMO-B": [
            { type: "positive", badge: "🟢 Mastery Threshold", text: "Ava reached 96% accuracy in motor coordination games. Recommended for Level 5 advanced exercises.", confidence: 95, date: "Sep 18, 2026" },
            { type: "info", badge: "🔵 Peer Interaction", text: "Active participation in turn-taking activities increased by 35% in classroom environments.", confidence: 90, date: "Sep 14, 2026" },
            { type: "positive", badge: "🟢 Vocal Progression", text: "Speech articulation accuracy improved from 82% to 91% over 4 weeks of pitch modulation games.", confidence: 93, date: "Sep 12, 2026" }
        ],
        "DEMO-C": [
            { type: "warning", badge: "🔴 Sensory & Attention Risk", text: "Focus drops by 38% after 18 minutes. Audio triggers induce elevated heart rate (88 bpm). Segmented 15-min sessions with noise-cancelling headphones recommended.", confidence: 89, date: "Sep 19, 2026" },
            { type: "info", badge: "🔵 Regulation Trend", text: "Visual countdown timers reduced task transition anxiety by 28% during classroom sessions.", confidence: 82, date: "Sep 16, 2026" },
            { type: "warning", badge: "🟡 Heart Rate Telemetry", text: "Spikes in heart rate detected during unannounced loud sound prompts. Sensory decompression breaks essential.", confidence: 87, date: "Sep 13, 2026" }
        ],
        "DEMO-D": [
            { type: "positive", badge: "🟢 High Engagement", text: "Maya demonstrates 94% task completion during storytelling and color matching play routines.", confidence: 94, date: "Sep 18, 2026" },
            { type: "positive", badge: "🟢 Cognitive Speed", text: "Pattern matching response speed improved by 22% with zero error rates in recent sessions.", confidence: 91, date: "Sep 15, 2026" },
            { type: "info", badge: "🔵 Social Expression", text: "Demonstrates high empathy responses during peer sharing play exercises.", confidence: 89, date: "Sep 11, 2026" }
        ]
    },
    reports: {
        "DEMO-A": {
            childId: "DEMO-A",
            childName: "Liam R.",
            age: 7,
            diagnosis: "Autism Spectrum (Level 1)",
            isaaScore: "ISAA Score: 78 (Mild Support Required)",
            period: "August – September 2026",
            avgAccuracy: 88,
            attendancePct: 96,
            routineAdherence: 91,
            baselineHR: "84 bpm",
            summary: "Liam has demonstrated exceptional growth in visual-spatial tasks and color matching routines. Emotional regulation is stable during 20-minute sessions. Recommended to advance to Level 3 Shape Sorter.",
            therapist: "Dr. Priya Mehta, RCI Registered Therapist"
        },
        "DEMO-B": {
            childId: "DEMO-B",
            childName: "Ava K.",
            age: 6,
            diagnosis: "Autism Spectrum (Level 1)",
            isaaScore: "ISAA Score: 64 (Low Support Required)",
            period: "August – September 2026",
            avgAccuracy: 94,
            attendancePct: 98,
            routineAdherence: 95,
            baselineHR: "78 bpm",
            summary: "Ava displays strong fine motor skills and speech articulation progress. Thrives in collaborative, structured turn-taking tasks with excellent peer engagement.",
            therapist: "Dr. Priya Mehta, RCI Registered Therapist"
        },
        "DEMO-C": {
            childId: "DEMO-C",
            childName: "Noah T.",
            age: 8,
            diagnosis: "Autism Spectrum (Level 2)",
            isaaScore: "ISAA Score: 112 (Moderate Support Required)",
            period: "August – September 2026",
            avgAccuracy: 65,
            attendancePct: 88,
            routineAdherence: 70,
            baselineHR: "88 bpm",
            summary: "Noah benefits significantly from noise-cancelling headphones and 15-minute chunked sessions. Sensory breaks are essential every 20 minutes to manage auditory overload.",
            therapist: "Dr. Priya Mehta, RCI Registered Therapist"
        },
        "DEMO-D": {
            childId: "DEMO-D",
            childName: "Maya S.",
            age: 5,
            diagnosis: "Autism Spectrum (Level 1)",
            isaaScore: "ISAA Score: 70 (Mild Support Required)",
            period: "August – September 2026",
            avgAccuracy: 93,
            attendancePct: 95,
            routineAdherence: 94,
            baselineHR: "82 bpm",
            summary: "Maya shows high enthusiasm for interactive story games and color matching routines. Excellent overall steady progress and strong language comprehension.",
            therapist: "Dr. Priya Mehta, RCI Registered Therapist"
        }
    },
    schedule: [
        { time: "9:00 AM", name: "Liam R. — Speech Therapy", status: "completed" },
        { time: "10:30 AM", name: "Ava K. — Motor Skills", status: "completed" },
        { time: "12:00 PM", name: "Noah T. — Cognitive Play", status: "active" },
        { time: "2:30 PM", name: "Maya S. — Social Skills", status: "upcoming" }
    ],
    messages: [
        { from: "Saniya R. (Liam's Mom)", time: "10:32 AM", preview: "Liam was very excited about yesterday's session! He kept asking to play the shape game...", unread: true, avatar: "SR" },
        { from: "Deepak K. (Ava's Dad)", time: "9:15 AM", preview: "Could we discuss adjusting Ava's motor skills difficulty? She seems ready for next level.", unread: true, avatar: "DK" },
        { from: "Meera T. (Noah's Mom)", time: "Yesterday", preview: "Thank you for the weekly report. The progress chart was really helpful to understand.", unread: false, avatar: "MT" }
    ]
};

const SCHOOL_DATA = {
    schoolName: "Greenfield Academy",
    className: "Class 3B",
    teacher: "Ms. Ananya Sen",
    studentCount: 6,
    studentMetrics: {
        "DEMO-A": { focus: 7.0, accuracy: 92, engagement: 88, attentionSpan: "24 min", communicationLevel: "Level 3" },
        "DEMO-B": { focus: 8.8, accuracy: 96, engagement: 94, attentionSpan: "30 min", communicationLevel: "Level 4" },
        "DEMO-C": { focus: 4.5, accuracy: 62, engagement: 58, attentionSpan: "15 min", communicationLevel: "Level 2" },
        "DEMO-D": { focus: 8.5, accuracy: 94, engagement: 92, attentionSpan: "28 min", communicationLevel: "Level 4" }
    },
    therapistNotes: {
        "DEMO-A": [
            { dot: "green", text: "Responds best to visual instructions — use picture cards during transitions." },
            { dot: "amber", text: "Needs scheduled 5-min sensory break every 20 min of desk work." },
            { dot: "blue", text: "Currently working on turn-taking — reinforce during group activities." }
        ],
        "DEMO-B": [
            { dot: "green", text: "Excels at fine motor drawing exercises. Excellent peer mentor." },
            { dot: "blue", text: "Encourage verbal responses over gestures during supply requests." }
        ],
        "DEMO-C": [
            { dot: "amber", text: "Sensitive to loud classroom sounds. Allow noise-cancelling headphones during music." },
            { dot: "green", text: "Responds well to visual timer countdowns." }
        ],
        "DEMO-D": [
            { dot: "green", text: "Strong visual pattern recognition and storytelling engagement." }
        ]
    },
    adaptations: {
        "DEMO-A": [
            { icon: "🪑", name: "Wobble Cushion Seating", desc: "Front desk placement with wobble cushion to enhance postural focus during visual tasks.", priority: "High", status: "Active in Class" },
            { icon: "⏱️", name: "Visual Transition Timer", desc: "Use 3-minute color countdown timer before ending visual sorting activities.", priority: "High", status: "Active in Class" },
            { icon: "✏️", name: "Weighted Pencil Grip", desc: "Provide textured ergonomic grip during writing tasks.", priority: "Low", status: "Assigned" }
        ],
        "DEMO-B": [
            { icon: "✍️", name: "Fine Motor Tracing Desk", desc: "Adjusted slant-board desk to support dynamic tripod pencil grip.", priority: "High", status: "Active in Class" },
            { icon: "🎙️", name: "Vocal Microphone Monitor", desc: "Use soft mic audio feedback for pitch modulation exercises.", priority: "Med", status: "Active in Class" },
            { icon: "🤝", name: "Peer Mentorship Desk", desc: "Seated next to supportive peer for collaborative turn-taking play.", priority: "High", status: "Active in Class" }
        ],
        "DEMO-C": [
            { icon: "🔇", name: "Active Noise-Cancelling Headphones", desc: "Provide 65dB noise-filtering headphones during independent & music work.", priority: "Urgent", status: "Active in Class" },
            { icon: "🧘", name: "Sensory Room Decompression Break", desc: "Scheduled 15-min quiet sensory corner break every 20 minutes.", priority: "Urgent", status: "Active in Class" },
            { icon: "⏱️", name: "Color-Decay Timer", desc: "Visual countdown clock for task transitions.", priority: "High", status: "Active in Class" }
        ],
        "DEMO-D": [
            { icon: "📖", name: "Story Card Sequencing Desk", desc: "Designated visual storytelling desk equipped with 4-card sequence boards.", priority: "High", status: "Active in Class" },
            { icon: "🧩", name: "Geometric Pattern Station", desc: "Multi-colored 3D block puzzle station for pattern completion.", priority: "Med", status: "Active in Class" }
        ]
    },
    activities: {
        "DEMO-A": [
            { emoji: "🎨", name: "Color Match & Visual Sorting", type: "Sensory", duration: "15 min", category: "Visual-Spatial", progress: 92, status: "Completed" },
            { emoji: "😊", name: "Emotion Recognition Mirror", type: "Social", duration: "12 min", category: "Emotional", progress: 85, status: "In Progress" },
            { emoji: "🗣️", name: "Phonic Sound Flashcards", type: "Speech", duration: "10 min", category: "Vocalization", progress: 78, status: "Scheduled" }
        ],
        "DEMO-B": [
            { emoji: "✏️", name: "Pencil Grip & Fine Line Trace", type: "Motor", duration: "15 min", category: "Fine Motor", progress: 96, status: "Completed" },
            { emoji: "💬", name: "Dialogue Turn-Taking Puzzles", type: "Social", duration: "20 min", category: "Communication", progress: 91, status: "In Progress" },
            { emoji: "🎵", name: "Vocal Pitch Matching Game", type: "Speech", duration: "10 min", category: "Articulation", progress: 88, status: "Active" }
        ],
        "DEMO-C": [
            { emoji: "🧘", name: "Sensory Co-Regulation Breathing", type: "Sensory", duration: "15 min", category: "Self-Regulation", progress: 62, status: "Needs Support" },
            { emoji: "⏱️", name: "Visual Countdown Routine", type: "Executive", duration: "12 min", category: "Transition", progress: 68, status: "In Progress" },
            { emoji: "🎧", name: "Noise Adaptation Desk Practice", type: "Auditory", duration: "10 min", category: "Processing", progress: 58, status: "Assigned" }
        ],
        "DEMO-D": [
            { emoji: "📖", name: "Expressive Storytelling", type: "Language", duration: "15 min", category: "Comprehension", progress: 94, status: "Completed" },
            { emoji: "🧩", name: "Pattern Matcher Pro", type: "Cognitive", duration: "12 min", category: "Logic", progress: 92, status: "Active" },
            { emoji: "🤝", name: "Peer Sharing Structured Play", type: "Social", duration: "15 min", category: "Inclusion", progress: 89, status: "In Progress" }
        ]
    },
    guidance: {
        "DEMO-A": [
            { title: "Visual Transition Prompts", text: "Show Liam the visual schedule picture card 5 minutes before ending current desk activity to prevent transition anxiety.", category: "Behavioral" },
            { title: "Eye-Gaze Calibration", text: "Allow 2 minutes of visual focus calibration before introducing multi-colored sorting blocks.", category: "Cognitive" }
        ],
        "DEMO-B": [
            { title: "Encourage Verbal Articulation", text: "Prompt Ava for full 3-word verbal responses over gestures when requesting classroom art supplies.", category: "Speech" },
            { title: "Peer Mentorship Support", text: "Pair Ava with peers during drawing tasks to reinforce positive social communication.", category: "Social" }
        ],
        "DEMO-C": [
            { title: "Auditory Overload Protocol", text: "If Noah covers his ears or shows heart rate spikes, immediately grant a 5-min quiet sensory corner break.", category: "Sensory" },
            { title: "Chunked Desk Instructions", text: "Provide 1 instruction at a time using the color countdown clock to maintain 15-min focus span.", category: "Executive" }
        ],
        "DEMO-D": [
            { title: "Expressive Narration Praise", text: "Provide immediate verbal praise when Maya narrates 4-card sequence stories with expressive vocal tone.", category: "Language" }
        ]
    },
    sharing: {
        "DEMO-A": {
            lastSync: "Sep 19, 2026 • 10:15 AM",
            homeSyncStatus: "Synced with Saniya R. (Parent App)",
            clinicSyncStatus: "Dr. Priya Mehta Verified",
            dailyReports: [
                { date: "Sep 19, 2026", summary: "Liam achieved 92% accuracy in visual sorting today. Responded well to 3-min transition timer.", teacher: "Ms. Ananya Sen" },
                { date: "Sep 17, 2026", summary: "Smooth transition during guided color matching play. Required 1 visual break.", teacher: "Ms. Ananya Sen" }
            ]
        },
        "DEMO-B": {
            lastSync: "Sep 18, 2026 • 4:30 PM",
            homeSyncStatus: "Synced with Deepak K. (Parent App)",
            clinicSyncStatus: "Dr. Priya Mehta Verified",
            dailyReports: [
                { date: "Sep 18, 2026", summary: "Ava demonstrated 96% fine motor tracing precision. Excellent peer collaboration.", teacher: "Ms. Ananya Sen" }
            ]
        },
        "DEMO-C": {
            lastSync: "Sep 19, 2026 • 11:45 AM",
            homeSyncStatus: "Synced with Meera T. (Parent App)",
            clinicSyncStatus: "Dr. Priya Mehta Verified",
            dailyReports: [
                { date: "Sep 19, 2026", summary: "Noah used noise-cancelling headphones during music hour. Completed 2 sensory breaks.", teacher: "Ms. Ananya Sen" }
            ]
        },
        "DEMO-D": {
            lastSync: "Sep 18, 2026 • 2:15 PM",
            homeSyncStatus: "Synced with Parent App",
            clinicSyncStatus: "Dr. Priya Mehta Verified",
            dailyReports: [
                { date: "Sep 18, 2026", summary: "Maya narrated a 4-card story sequence with 94% accuracy and enthusiastic tone.", teacher: "Ms. Ananya Sen" }
            ]
        }
    }
};

const CAREGIVER_DATA = {
    userName: "Rekha",
    verified: true,
    todayDateFormatted: new Date().toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }),
    shifts: [
        { childId: "DEMO-A", childName: "Liam R.", time: "9:00 AM – 1:00 PM", status: "active", statusLabel: "Active Now", avatar: "L", color: "peach" },
        { childId: "DEMO-B", childName: "Ava K.", time: "3:00 PM – 6:00 PM", status: "upcoming", statusLabel: "Upcoming", avatar: "A", color: "skyblue" }
    ],
    routineTasks: {
        "DEMO-A": [
            { id: "t1", text: "Morning sensory routine completed", completed: true },
            { id: "t2", text: "Visual schedule reviewed with child", completed: true },
            { id: "t3", text: "Guided play session — Color Match", completed: false, current: true },
            { id: "t4", text: "Log afternoon behavior observation", completed: false }
        ],
        "DEMO-B": [
            { id: "t5", text: "Afternoon motor skill exercises", completed: true },
            { id: "t6", text: "Speech flashcard practice", completed: false, current: true }
        ],
        "DEMO-C": [
            { id: "t7", text: "Sensory room decompression break", completed: true },
            { id: "t8", text: "Quiet reading time with visual cards", completed: false, current: true }
        ],
        "DEMO-D": [
            { id: "t9", text: "Social play turn-taking exercise", completed: true }
        ]
    },
    marketplace: [
        { id: "cg-1", name: "Rekha S.", spec: "Sensory Support & Co-Regulation • 4 yrs exp", rating: "4.9 ★ (32 reviews)", rate: "₹400 / hr", avatar: "RS", color: "peach", badge: "RCI Certified", status: "Available Today" },
        { id: "cg-2", name: "Arun J.", spec: "Motor Skills & Physical Therapy Aid • 6 yrs exp", rating: "4.8 ★ (28 reviews)", rate: "₹450 / hr", avatar: "AJ", color: "skyblue", badge: "CPR & First Aid", status: "Available Tomorrow" },
        { id: "cg-3", name: "Divya P.", spec: "Speech Therapy Facilitator • 3 yrs exp", rating: "4.7 ★ (19 reviews)", rate: "₹350 / hr", avatar: "DP", color: "lavender", badge: "Autism Accredited", status: "Available Today" },
        { id: "cg-4", name: "Priya M.", spec: "Behavioral Intervention Assistant • 5 yrs exp", rating: "4.9 ★ (41 reviews)", rate: "₹420 / hr", avatar: "PM", color: "mint", badge: "De-escalation Lead", status: "Booked" }
    ],
    training: [
        { id: "tr-1", title: "Autism Sensory De-escalation (Level 1)", progress: 100, status: "Completed ✓", certificate: "RCI Verified Cert #8821" },
        { id: "tr-2", title: "Visual Schedule & Routine Facilitation", progress: 85, status: "In Progress (85%)", certificate: "Module 3 of 4" },
        { id: "tr-3", title: "Pediatric CPR & Emergency Seizure Protocol", progress: 100, status: "Completed ✓", certificate: "Red Cross Cert #4092" },
        { id: "tr-4", title: "Positive Behavior Reinforcement Strategies", progress: 40, status: "Enrolled", certificate: "Module 1 of 3" }
    ],
    employment: {
        weeklyHours: "28.5 hrs",
        weeklyEarnings: "₹11,400",
        ratingAvg: "4.9 / 5.0",
        activePlacements: [
            { family: "Sharma Family (Liam R.)", schedule: "Mon, Wed, Fri • 9 AM - 1 PM", rate: "₹400/hr" },
            { family: "Kapoor Family (Ava K.)", schedule: "Tue, Thu • 3 PM - 6 PM", rate: "₹400/hr" }
        ]
    },
    safety: {
        aadhaarStatus: "Verified ✓ (Aadhaar XXXX-8912)",
        policeCheck: "Passed & Cleared ✓ (Valid till 2027)",
        clinicalRef: "Approved by Dr. Priya Mehta (RCI #10928)",
        medicalClearance: "Fit for Duty ✓ (Annual Medical Check)",
        sosStatus: "Emergency Telemetry SOS Active"
    }
};

// Helper Functions
function sessionsOf(childId) {
    if (!childId || childId === "ALL") return SESSIONS;
    return SESSIONS.filter(s => s.childId === childId);
}

function latestOf(childId) {
    const list = sessionsOf(childId);
    if (!list || list.length === 0) {
        return {
            id: "SES-FALLBACK",
            childId: childId || "DEMO-A",
            date: "2026-09-19",
            formattedDate: "Sep 19, 2026",
            context: "Therapy Game",
            Mood_1_to_10: 8.0,
            Focus_1_to_10: 7.0,
            Energy_1_to_10: 8.5,
            Engagement_pct: 85,
            Accuracy_pct: 90,
            Response_Time_sec: 1.4,
            Routine_Adherence_pct: 92,
            PIM_Demonstration_Score: 85,
            status: "Strong",
            notes: "Baseline default session."
        };
    }
    return list[0];
}

function avg(array, key) {
    if (!array || array.length === 0) return 0;
    const sum = array.reduce((acc, item) => acc + (Number(item[key]) || 0), 0);
    return Math.round(sum / array.length);
}

function getChild(childId) {
    return CHILDREN.find(c => c.id === childId || c.key === childId) || CHILDREN[0];
}
