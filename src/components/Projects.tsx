import Image from "next/image";

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
    highlight?: boolean;
}

const projects: Project[] = [
    {
        title: "BHARATH LOGISTICS AI",
        description: "Smart India Hackathon 2025 – Grand Finale. AI-driven logistics optimization system for port-to-plant raw material movement with demand forecasting, intelligent port selection, rail rake allocation, and ETA & cost optimization.",
        tags: ["Python", "AI Agents", "n8n", "Data Analytics", "Optimization Algorithms"],
        image: "/bharath-logistics.png",
        githubUrl: "#",
        highlight: true,
    },
    {
        title: "TAXAI – Tax Optimization & Advisory Platform",
        description: "Generative AI-powered tax assistant using Retrieval-Augmented Generation (RAG). Integrated LLMs with structured tax-law knowledge bases to deliver accurate, explainable, and source-grounded responses.",
        tags: ["Python", "LLMs", "RAG", "Vector Databases"],
        image: "/taxai.png",
        githubUrl: "#",
        highlight: true,
    },
    {
        title: "PII Detection & Privacy Protection System",
        description: "Intel Hackathon | Smart India Hackathon. AI system to detect and anonymize sensitive personal information in images, videos, and live camera feeds. Implemented YOLOv8 for visual PII detection and OCR + BERT for text-based entity extraction.",
        tags: ["YOLOv8", "OCR", "BERT", "Computer Vision", "NLP"],
        image: "/pii-detection.png",
        githubUrl: "#",
        highlight: true,
    },
    {
        title: "HYDRA GUARD – Smart Reminder System",
        description: "VIT Hackathon. ML-powered system to predict urination patterns and provide automated reminders for elderly care. Trained Random Forest model using health-related behavioral data with real-time guardian alerts.",
        tags: ["Python", "Random Forest", "React", "Material UI", "Firebase", "Gemini API"],
        image: "/hydra-guard.png",
        githubUrl: "#",
    },
    {
        title: "GREEN GREEKS – E-Waste Awareness Platform",
        description: "SRM Hackathon. Platform to identify toxic electronic components and promote responsible e-waste disposal with AI-driven awareness features and interactive visual insights.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Firebase", "Gemini 1.5 Flash"],
        image: "/green-greeks.png",
        githubUrl: "#",
    },
    {
        title: "HAB USS – Habit Tracker Application",
        description: "Alpha Hackathon. Built a user-friendly habit tracker for students, professionals, and seniors, with insights and ML-driven suggestions to build positive routines.",
        tags: ["React.js", "HTML", "CSS", "Material UI", "Firebase", "ML Model"],
        image: "/hab-uss.png",
        githubUrl: "#",
    },
    {
        title: "TEAM PULSE – Standup Bot",
        description: "Developed a simple Slack bot that collects daily standup responses and posts summaries to improve team collaboration and communication.",
        tags: ["Node.js", "Slack API"],
        image: "/team-pulse.png",
        githubUrl: "#",
    },
];

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className={`project-card group relative bg-card border border-border rounded-xl overflow-hidden ${project.highlight ? "ring-2 ring-teal-400/50" : ""}`}>
            {/* Highlight Badge */}
            {project.highlight && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full">
                    Featured
                </div>
            )}

            {/* Project Image */}
            <div className="relative h-56 bg-gradient-to-br from-muted to-accent/30 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            className="p-3 bg-white/90 rounded-full hover:scale-110 transition-transform"
                            aria-label="View on GitHub"
                        >
                            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-muted/50 rounded-full text-muted-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-muted/20">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-sm text-teal-500 dark:text-teal-400 tracking-[0.3em] uppercase font-medium">
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                        Real-world AI systems including PII detection, RAG-based platforms, and logistics optimization.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                    {projects.slice(0, 6).map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>

                {/* Seventh project - full width */}
                <div className="mt-8">
                    <ProjectCard project={projects[6]} />
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/gowthaman-tech4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:bg-muted/50 transition-colors"
                    >
                        View All on GitHub
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
