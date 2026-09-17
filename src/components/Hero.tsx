const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-vampire-black/25 via-transparent to-vampire-black/40 z-0 pointer-events-none" />

            <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto flex flex-col items-center">
                <h1 className="font-oswald tracking-wider leading-none mb-6 select-none">
                    <span className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blood-red via-red-600 to-red-900 drop-shadow-[0_0_40px_rgba(138,3,3,0.6)] animate-pulse-slow uppercase">
                        FOUR
                    </span>
                    <span className="text-5xl md:text-8xl font-bold text-white tracking-[0.15em] uppercase ml-2 md:ml-4">
                        YOU.
                    </span>
                </h1>

                <p className="text-sm md:text-base text-gray-500 tracking-widest uppercase">
                    We build what you own.
                </p>

                <div className="mt-16">
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-white/60 hover:text-blood-red transition-all duration-500 border-b border-white/10 hover:border-blood-red/50 pb-1 text-sm hover:shadow-[0_0_20px_rgba(138,3,3,0.4)]"
                    >
                        Start a conversation
                    </button>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow opacity-50 z-10 text-white text-2xl">
                ⌄
            </div>
        </div>
    );
};

export default Hero;
