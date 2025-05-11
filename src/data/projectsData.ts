import { ProjectItem } from "@/types/project";

export const projectsData: ProjectItem[] = [
  {
    title: "COSMiQ: AI-Powered Orbital Debris Collector",
    description: "Developed an autonomous satellite system that predicts and clears high-risk orbital debris to reduce collision risks and optimize satellite launch paths.",
    extendedDescription: {
      overview: "Built during the DevLabs Hackathon — and won 🏆",
      achievement: "COSMiQ autonomously predicts and clears high-risk orbital debris ahead of satellite launches to reduce collision risk, fuel overhead, and rerouting complexity.",
      techStack: "Python, Streamlit, Plotly, AstroPy, Poliastro, SGP4, Lambert Transfers, GMAT, REST APIs, SolidWorks",
      features: [
        "AI-based debris prioritization using CelesTrak & DISCOSWeb",
        "Real-time 3D orbit visualization with collision detection",
        "Autonomous transfer simulation via Lambert's algorithm",
        "Browser-based control dashboard for debris interception & planning"
      ],
      impact: "Cut manual planning time by 93%, collision avoidance costs by 90%"
    },
    gradient: "bg-gradient-to-br from-blue-900/40 to-purple-900/40",
    technologies: ["Python", "AI/ML", "Orbital Mechanics", "REST APIs"],
    repoLink: "#",
    imageUrl: "/lovable-uploads/98eca19f-14ee-47c5-b444-00a00a9f6dd6.png",
  },
  {
    title: "NeuroPilot: AI-Driven Smart Browser",
    description: "A chromium-based AI web browser integrating modern UI design, real-time health data simulation, and AI-driven productivity flows.",
    extendedDescription: {
      overview: "Built with a focus on intelligent, adaptive, and user-centered design",
      achievement: "A chromium-based AI web browser integrating modern UI design, real-time health data simulation, and AI-driven productivity flows.",
      techStack: "Electron.js, Node.js, TailwindCSS, JavaScript Modules, IPC Bridges",
      features: [
        "Smart task breakdown and reminders via AI",
        "HealthKit-style stress and health data simulation",
        "Full-stack IPC-secured browser backend",
        "Summarization tool, custom WebView communication",
        "Glassmorphism UI and real-time behavior simulation"
      ],
      impact: "Built with a focus on intelligent, adaptive, and user-centered design for productivity and well-being"
    },
    gradient: "bg-gradient-to-br from-green-800/40 to-green-500/40",
    technologies: ["Electron.js", "Node.js", "TailwindCSS", "JavaScript"],
    repoLink: "#",
    imageUrl: "/lovable-uploads/ee8a13e3-1543-45c6-83c1-a2d9b3a2fc8d.png",
  },
  {
    title: "Maya Playblast Tool",
    description: "Created a tool integrated within Autodesk Maya that streamlines playblast generation with customizable camera settings and rapid previews for animation workflow.",
    extendedDescription: {
      overview: "Built as part of the ASU DSL Maya Extensions toolkit",
      achievement: "Automates the creation of quad‑view playblasts with per‑camera aim constraints and offsets, streamlining multi‑camera output in a single click.",
      techStack: "Python · Autodesk Maya cmds · FFmpeg",
      features: [
        "Modular Architecture with clean separation of core logic",
        "Flexible GUI with custom resolution/quality settings",
        "Aim Constraints & Offsets with auto target asset",
        "Auto‑Select Animated Geometry",
        "Quad‑View Playback & Playblast",
        "FFmpeg Integration for MP4 conversion"
      ],
      impact: "Cut manual setup by 75%, merge time by 90%"
    },
    gradient: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
    technologies: ["Python", "Autodesk Maya", "UI Design", "Animation Workflow"],
    repoLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "My Book List App",
    description: "A SwiftUI-based app following MVVM architecture that allows users to add, delete, search, and edit books with title, author, and genre.",
    extendedDescription: {
      overview: "Built as part of CSE 335 coursework on MVVM-based iOS development",
      achievement: "A SwiftUI app to manage and edit a personal book collection using toolbar items and alert-based UI for CRUD operations.",
      techStack: "Swift · SwiftUI · MVVM · Xcode",
      features: [
        "Add, Edit, Delete, Search with modal prompts",
        "MVVM Architecture with observable bindings",
        "NavigationStack Integration with toolbar items"
      ],
      impact: "Designed for clean data manipulation and UI modularity"
    },
    gradient: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    technologies: ["Swift", "SwiftUI", "MVVM", "Core Data", "iOS"],
    repoLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Personal Finance Tracker",
    description: "An expense tracking app built using Swift and SwiftData. Tracks income, expenses by category, and savings across 7 days.",
    extendedDescription: {
      overview: "Built for a Swift-based financial planning app with daily expense insights",
      achievement: "Tracks income, expenses, and savings using Firebase or SwiftData and visualizes user budget trends.",
      techStack: "Swift · SwiftUI · SwiftData · Firebase · MVVM · Swift Charts",
      features: [
        "Financial Logging with categorized expenses",
        "Insight Engine using 7-day averages",
        "Data Persistence with Firebase integration",
        "Chart Visualization for trends"
      ],
      impact: "Offers personalized budget analysis and real-time insight generation"
    },
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    technologies: ["Swift", "SwiftData", "Charts", "MVVM", "iOS"],
    repoLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Favorite Parks Directory",
    description: "A table view and map-based app to list favorite parks using List, NavigationLink, and Map.",
    extendedDescription: {
      overview: "Built using SwiftUI with real-time map features and search",
      achievement: "A table-driven app that catalogs parks and integrates location-based place search and MapKit views.",
      techStack: "Swift · SwiftUI · MapKit · MVVM · NavigationStack",
      features: [
        "Park Directory with grouped listings",
        "Dynamic Add/Delete with image support",
        "Interactive Map View with nearby search"
      ],
      impact: "Combines SwiftUI navigation with responsive location-aware components"
    },
    gradient: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20",
    technologies: ["Swift", "MapKit", "Core Location", "SwiftUI", "iOS"],
    repoLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "City Info Explorer",
    description: "A SwiftUI app that fetches and displays city data using JSON and the GeoNames API.",
    extendedDescription: {
      overview: "Built as a SwiftUI client for the GeoNames web service",
      achievement: "Fetches and displays international city data and maps them in real time.",
      techStack: "Swift · SwiftUI · JSON · REST API · MapKit",
      features: [
        "City Data via GeoNames API with bounding box",
        "Detail View with Map integration",
        "Efficient JSON Parsing with async calls"
      ],
      impact: "Demonstrates real-world API consumption and geographic visualization in SwiftUI"
    },
    gradient: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
    technologies: ["Swift", "SwiftUI", "REST API", "MapKit", "Async/Await"],
    repoLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
  }
];
