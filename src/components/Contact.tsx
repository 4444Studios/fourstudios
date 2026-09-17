interface ContactProps {
    onOpenProjectForm: () => void;
}

const email = ['mralxgut', '@', 'gmail', '.', 'com'].join('');

const Contact = ({ onOpenProjectForm }: ContactProps) => {
    return (
        <section id="contact" className="py-24 bg-transparent relative overflow-hidden scroll-mt-24">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-vampire-black/40 via-vampire-black/20 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-6 font-oswald uppercase tracking-wider leading-none animate-pulse-slow">
                    Ready <span className="text-blood-red drop-shadow-[0_0_20px_rgba(138,3,3,0.5)]">4</span> More?
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    We build <span className="text-blood-red font-oswald">4</span> people, not platforms.
                </p>

                <button
                    onClick={onOpenProjectForm}
                    className="text-white/60 hover:text-blood-red transition-all duration-500 border-b border-white/10 hover:border-blood-red/50 pb-1 text-sm hover:shadow-[0_0_20px_rgba(138,3,3,0.4)]"
                >
                    Start a conversation
                </button>

                <p className="mt-8 text-sm text-gray-600">
                    <button
                        onClick={() => {
                            window.location.href = `mailto:${email}?subject=${encodeURIComponent('Hello from fourstudios')}`;
                        }}
                        className="hover:text-blood-red transition-colors duration-300 cursor-pointer"
                        aria-label="Send email"
                    >
                        <span>mralxgut</span>
                        <span className="select-none" aria-hidden="true">{'@'}</span>
                        <span>gmail</span>
                        <span>.</span>
                        <span>com</span>
                    </button>
                </p>
            </div>

            <div className="mt-24 border-t border-white/5 pt-12 bg-black/40 relative z-10">
                <p className="text-center text-gray-600 text-sm opacity-60">
                    © {new Date().getFullYear()} Four Studios. <span className="mx-2">|</span> Operated by 4me LLC.
                </p>
            </div>
        </section>
    );
};

export default Contact;
