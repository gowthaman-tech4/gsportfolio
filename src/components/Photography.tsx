import Image from "next/image";

const photos = [
    { id: 1, title: "Mountain Vista", category: "Nature" },
    { id: 2, title: "City Lights", category: "Urban" },
    { id: 3, title: "Ocean Sunset", category: "Nature" },
    { id: 4, title: "Street Portrait", category: "Portrait" },
    { id: 5, title: "Architecture", category: "Urban" },
    { id: 6, title: "Forest Path", category: "Nature" },
];

export default function Photography() {
    return (
        <section id="photography" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-sm text-teal-500 dark:text-teal-400 tracking-[0.3em] uppercase font-medium">
                        Gallery
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-4">
                        Photography
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                        Capturing moments through the lens — a visual journey of places, people, and perspectives.
                    </p>
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                    {photos.map((photo, index) => (
                        <div
                            key={photo.id}
                            className={`group relative overflow-hidden rounded-xl cursor-pointer ${index === 0 || index === 5 ? "row-span-2" : ""
                                }`}
                        >
                            {/* Photo Placeholder */}
                            <div
                                className={`w-full bg-gradient-to-br from-muted to-accent/50 ${index === 0 || index === 5 ? "h-full min-h-[400px]" : "aspect-square"
                                    }`}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-4xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                                        📷
                                    </span>
                                </div>
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h3 className="font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {photo.title}
                                    </h3>
                                    <p className="text-sm text-white/70 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {photo.category}
                                    </p>
                                </div>
                            </div>

                            {/* Hover scale effect */}
                            <div className="absolute inset-0 bg-teal-400/0 group-hover:bg-teal-400/10 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:bg-muted/50 transition-colors"
                    >
                        View Full Gallery
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
