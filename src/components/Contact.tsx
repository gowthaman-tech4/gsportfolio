"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Reset form
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
        alert("Message sent! I'll get back to you soon.");
    };

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/gowthaman-tech4",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/GOWTHAMAN-SIVASUBRAMANIAN",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-sm text-teal-500 dark:text-teal-400 tracking-[0.3em] uppercase font-medium">
                        Contact
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-4">
                        Let&apos;s Build the Future
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                        I&apos;m always looking for new challenges and opportunities to collaborate on innovative AI projects.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <div className="order-2 lg:order-1">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-teal-400 dark:focus:border-teal-400 focus:outline-none transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-teal-400 dark:focus:border-teal-400 focus:outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-teal-400 dark:focus:border-teal-400 focus:outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project or opportunity..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Passionate about developing scalable, data-driven, and research-oriented AI solutions.
                                Let&apos;s discuss how I can contribute to your team or project.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                                Email
                            </h4>
                            <a
                                href="mailto:gowthamansiva.tech@gmail.com"
                                className="text-lg hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                            >
                                gowthamansiva.tech@gmail.com
                            </a>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                                Phone
                            </h4>
                            <a
                                href="tel:+918637684573"
                                className="text-lg hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                            >
                                +91 86376 84573
                            </a>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                                Connect With Me
                            </h4>
                            <div className="flex gap-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-muted/50 hover:bg-muted rounded-full transition-colors"
                                        aria-label={link.name}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                                Location
                            </h4>
                            <p className="text-foreground/90">
                                Chennai, Tamil Nadu, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
