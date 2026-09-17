const projects = [
    {
        category: "Shop",
        logo: "/work/logo-xclusivelounge.png",
        logoClass: "w-[72%] max-w-[280px]",
        result: "Bookings",
        url: "https://xclusivelounge.co",
        host: "xclusivelounge.co",
    },
    {
        category: "Training",
        logo: "/work/logo-hxtrainingclub.png",
        logoClass: "w-[68%] max-w-[260px]",
        result: "Custom app",
        url: "https://hxtrainingclub.com",
        host: "hxtrainingclub.com",
    },
    {
        category: "Kitchen",
        logo: "/work/logo-losmealpreps.png",
        logoClass: "w-[78%] max-w-[300px]",
        result: "Order flow",
        url: "https://losmealpreps.com",
        host: "losmealpreps.com",
    },
];

const Portfolio = () => {
    return (
        <section id="work" className="py-24 bg-transparent relative border-y border-white/5 scroll-mt-24">
            <div className="absolute inset-0 bg-gradient-to-b from-vampire-black/20 via-transparent to-vampire-black/40 z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight">
                        Our work.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <a
                            key={project.host}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-[4/5] block"
                        >
                            <div className="absolute inset-0 work-scanlines opacity-30" />
                            <div className="absolute inset-0 shadow-[inset_0_-40px_40px_-20px_#030000] pointer-events-none" />

                            <div className="absolute inset-0 flex items-center justify-center px-6 pb-24">
                                <img
                                    src={project.logo}
                                    alt={project.host}
                                    className={`object-contain transition-transform duration-500 group-hover:scale-105 ${project.logoClass}`}
                                />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8">
                                <span className="text-blood-red text-xs mb-2 block">{project.category}</span>
                                <p className="text-sm text-white mb-4">{project.host}</p>
                                <span className="text-xs text-gray-400 group-hover:text-blood-red transition-colors">
                                    <span className="group-hover:hidden">{project.result}</span>
                                    <span className="hidden group-hover:inline">[ open ]</span>
                                </span>
                            </div>

                            <div className="absolute inset-0 border border-white/10 group-hover:border-blood-red/60 transition-colors duration-300 pointer-events-none" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
