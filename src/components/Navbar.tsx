import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToContact = () => {
        setIsMobileMenuOpen(false);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
                isScrolled
                    ? 'bg-vampire-black/90 border-blood-red/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                    : 'bg-transparent border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#" className="text-2xl font-black tracking-wider text-white hover:text-gray-200 transition-colors font-oswald uppercase">
                        FOUR <span className="text-blood-red drop-shadow-[0_0_8px_rgba(138,3,3,0.8)]">STUDIOS</span>
                    </a>

                    <div className="hidden md:flex items-baseline space-x-8">
                        <a href="#work" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Work</a>
                        <a href="#engagements" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Engagements</a>
                        <button
                            onClick={scrollToContact}
                            className="text-white/60 hover:text-blood-red transition-all duration-500 border-b border-white/10 hover:border-blood-red/50 pb-1 text-sm"
                        >
                            [ inquire ]
                        </button>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-300 hover:text-white p-2 text-2xl leading-none"
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? '×' : '☰'}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-vampire-black border-b border-blood-red/20">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-blood-red block px-3 py-2 text-base transition-colors">Work</a>
                        <a href="#engagements" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-blood-red block px-3 py-2 text-base transition-colors">Engagements</a>
                        <button
                            onClick={scrollToContact}
                            className="text-white/60 hover:text-blood-red transition-all duration-500 border-b border-white/10 hover:border-blood-red/50 pb-1 text-sm mt-4 mx-3"
                        >
                            [ inquire ]
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
