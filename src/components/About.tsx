import Image from "next/image";

export default function About() {
    const skills = [
        { category: "AI & GenAI", items: ["LLMs", "Prompt Engineering", "RAG", "NLP", "Computer Vision", "AI Agents (n8n)"] },
        { category: "Machine Learning", items: ["Supervised & Unsupervised Learning", "Random Forest", "Neural Networks", "Deep Learning"] },
        { category: "Data Science", items: ["Statistics", "Data Preprocessing", "Feature Engineering", "Data Visualization", "SQL"] },
        { category: "Programming", items: ["Python", "Java", "SQL"] },
        { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "React", "Firebase"] },
    ];

    const tools = [
        "Git/GitHub", "Docker", "VS Code", "PyCharm", "Jupyter Notebook",
        "ORANGE (SAP)", "n8n", "Gemini CLI", "Claude CLI", "MATLAB"
    ];

    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-sm text-teal-500 dark:text-teal-400 tracking-[0.3em] uppercase font-medium">
                        About
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-4">
                        Who I Am
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
                            {/* Decorative frame */}
                            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl transform rotate-3"></div>
                            <div className="absolute inset-0 border-2 border-teal-400/20 rounded-2xl transform -rotate-3"></div>

                            {/* Profile Image */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/profile.jpg"
                                    alt="Gowthaman Sivasubramanian"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Education Card */}
                        <div className="mt-8 p-6 bg-card border border-border rounded-xl">
                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                <span>🎓</span> Education
                            </h3>
                            <div>
                                <p className="font-medium">B.Tech – Computer Science and Engineering</p>
                                <p className="text-muted-foreground">Dr. MGR Educational and Research Institute, Chennai</p>
                                <p className="text-sm text-muted-foreground/70">2022 – 2026</p>
                            </div>
                        </div>

                        {/* Experience Card */}
                        <div className="mt-4 p-6 bg-card border border-border rounded-xl">
                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                <span>💼</span> Experience
                            </h3>
                            <div>
                                <p className="font-medium">Web Development Intern</p>
                                <p className="text-muted-foreground">CloudLogic Technologies, Pondicherry</p>
                                <p className="text-sm text-muted-foreground/70">Sept 2024 – Oct 2024</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Final-year <strong>B.Tech Computer Science and Engineering</strong> student with strong expertise in
                            <strong> Artificial Intelligence, Machine Learning, Data Science</strong>, and <strong>Software Development</strong>.
                        </p>

                        <p className="text-base text-muted-foreground leading-relaxed">
                            Proven experience in building real-world AI systems, including PII detection, RAG-based LLM platforms,
                            AI agents, and logistics optimization solutions. <strong>Smart India Hackathon 2025 Grand Finale participant</strong>,
                            multiple hackathon awardee, and active AI community contributor.
                        </p>

                        {/* Skills */}
                        <div className="pt-4 space-y-4">
                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                Technical Skills
                            </h3>
                            {skills.map((skillGroup) => (
                                <div key={skillGroup.category}>
                                    <p className="text-sm font-medium text-foreground mb-2">{skillGroup.category}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-sm bg-muted/50 hover:bg-muted rounded-full transition-colors cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tools */}
                        <div className="pt-4">
                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                Tools & Platforms
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-3 py-1 text-xs bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 rounded-full"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
