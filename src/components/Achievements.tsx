export default function Achievements() {
    const achievements = [
        {
            title: "Smart India Hackathon 2025",
            description: "Grand Finale Participant – National-level recognition for BHARATH LOGISTICS AI",
            icon: "🏆",
            highlight: true,
        },
        {
            title: "Intel Hackathon – Top 25",
            description: "Out of 300+ teams for AI-driven privacy solution (PII Detection)",
            icon: "🥇",
        },
        {
            title: "NCICT'25 – 1st Place",
            description: "Paper presentation on PII Detection using Deep Learning (NER)",
            icon: "🥇",
        },
        {
            title: "SRM 36-Hour Hackathon – 4th Place",
            description: "Sustainable computing & privacy-focused solution",
            icon: "🏅",
        },
        {
            title: "Alpha College Hackathon – 2nd Place",
            description: "ML-based innovation with HYDRA GUARD project",
            icon: "🥈",
        },
        {
            title: "SRM VDP 24-Hour Hackathon – Top 20",
            description: "Out of 60+ teams with AI-powered Lesson Plan Generator",
            icon: "🏅",
        },
    ];

    const certifications = [
        { name: "Google Advanced Data Analytics", issuer: "Coursera" },
        { name: "Google Data Analytics", issuer: "Coursera" },
        { name: "Microsoft Security Operations Analyst", issuer: "Microsoft" },
        { name: "Data Science", issuer: "OpenSAP & Skill Vertex" },
    ];

    return (
        <section id="achievements" className="py-24 px-6 bg-muted/20">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-sm text-teal-500 dark:text-teal-400 tracking-[0.3em] uppercase font-medium">
                        Recognition
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-4">
                        Achievements & Certifications
                    </h2>
                </div>

                {/* Achievements Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {achievements.map((achievement) => (
                        <div
                            key={achievement.title}
                            className={`p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow ${achievement.highlight ? "ring-2 ring-teal-400/50 bg-teal-500/5" : ""
                                }`}
                        >
                            <span className="text-3xl mb-4 block">{achievement.icon}</span>
                            <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-6">Certifications</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {certifications.map((cert) => (
                            <div
                                key={cert.name}
                                className="px-6 py-3 bg-card border border-border rounded-full hover:bg-muted/50 transition-colors"
                            >
                                <span className="font-medium">{cert.name}</span>
                                <span className="text-muted-foreground text-sm ml-2">— {cert.issuer}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
