import { useState } from 'react';

const depths = [
    {
        name: 'Presence',
        line: 'Still living on Instagram.',
        features: ['a first page', 'enough identity to look real', 'a link to book or message'],
        site: 'a first page',
        booking: 'a link',
        team: 'you',
        after: '—',
    },
    {
        name: 'Launch',
        line: 'Ready to take your own bookings.',
        features: ['a working site', 'confirmations', 'payments', 'one person running it'],
        site: 'a working site',
        booking: 'confirmations + pay',
        team: 'you',
        after: '—',
    },
    {
        name: 'Growth',
        line: 'More than one of you.',
        features: ['staff', 'intake', 'roster', 'the shop, not a landing page'],
        site: 'the shop',
        booking: 'intake',
        team: 'staff + roster',
        after: 'if you want',
    },
    {
        name: 'Scale',
        line: "Already running, the tools don't fit.",
        features: ['roles', 'custom rules', 'a dashboard', 'room to add more'],
        site: 'the system',
        booking: 'custom rules',
        team: 'roles',
        after: 'room to grow',
    },
];

const compareRows: { label: string; key: keyof typeof depths[0] }[] = [
    { label: 'Site', key: 'site' },
    { label: 'Booking', key: 'booking' },
    { label: 'Team', key: 'team' },
    { label: 'After', key: 'after' },
];

const aftercare = [
    {
        name: 'Light',
        line: 'One thing to fix.',
        features: ['a change', 'you send it', 'we do it'],
    },
    {
        name: 'Held',
        line: "It's live and you're still shaping it.",
        features: ['tweaks as you go', 'we stay in reach'],
    },
    {
        name: 'Open',
        line: "The shop is moving. You don't want to be alone in it.",
        features: ['onboarding', 'new flows', 'we stay in it with you'],
    },
];

interface EngagementsProps {
    onOpenProjectForm: (pkg: string) => void;
}

const Engagements = ({ onOpenProjectForm }: EngagementsProps) => {
    const [showCompare, setShowCompare] = useState(false);

    return (
        <section id="engagements" className="py-24 bg-transparent relative overflow-hidden text-white scroll-mt-24">
            <div className="absolute inset-0 bg-gradient-to-b from-vampire-black/20 via-transparent to-vampire-black/40 z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-sm text-blood-red font-oswald font-black tracking-wider uppercase mb-3">Engagements</h2>
                    <h3 className="text-4xl md:text-6xl font-sans font-medium tracking-tight mb-6">
                        Four depths.
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Creative, design, consulting.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {depths.map((depth) => (
                        <div
                            key={depth.name}
                            className="relative flex flex-col p-5 md:p-8 border border-white/10 hover:border-blood-red/40 transition-colors duration-300 bg-vampire-black/30"
                        >
                            <div className="mb-6 pb-6 border-b border-white/5">
                                <h4 className="text-3xl md:text-5xl font-black font-oswald uppercase tracking-wider leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-b from-blood-red via-red-600 to-red-900 drop-shadow-[0_0_40px_rgba(138,3,3,0.6)]">{depth.name}</h4>
                                <p className="text-sm text-gray-400 text-center md:text-left mt-8 md:mt-0">{depth.line}</p>
                            </div>

                            <ul className="space-y-3 mb-8 flex-grow text-center md:text-left">
                                {depth.features.map((feat) => (
                                    <li key={feat} className="text-gray-400 text-sm">
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => onOpenProjectForm(depth.name)}
                                className="self-start text-white/60 hover:text-blood-red transition-all duration-500 border-b border-white/10 hover:border-blood-red/50 pb-1 text-sm hover:shadow-[0_0_20px_rgba(138,3,3,0.4)]"
                            >
                                Inquire
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-16">
                    <button
                        onClick={() => setShowCompare(!showCompare)}
                        className="text-white/60 hover:text-blood-red transition-all duration-500 border-b border-white/10 hover:border-blood-red/50 pb-1 text-sm hover:shadow-[0_0_20px_rgba(138,3,3,0.4)]"
                    >
                        {showCompare ? 'Hide' : 'Compare'}
                    </button>
                </div>

                {showCompare && (
                    <div className="overflow-hidden mb-32 max-w-7xl mx-auto bg-vampire-black/50">
                        <div className="md:hidden space-y-8">
                            {compareRows.map((row) => (
                                <div key={row.key} className="border border-white/10 overflow-hidden">
                                    <div className="p-4 border-b border-white/10">
                                        <h4 className="text-white text-sm">{row.label}</h4>
                                    </div>
                                    <div className="divide-y divide-white/5">
                                        {depths.map((depth) => (
                                            <div key={depth.name} className="p-4 flex justify-between items-center">
                                                <span className="text-xs text-gray-500">{depth.name}</span>
                                                <span className="text-sm text-gray-300">{depth[row.key]}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:block overflow-x-auto pb-4">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr>
                                        <th className="p-6 text-sm text-gray-500 sticky left-0 bg-vampire-black/80 z-20 border-b border-white/10"> </th>
                                        {depths.map((depth) => (
                                            <th key={depth.name} className="p-6 text-sm font-oswald uppercase tracking-tight text-blood-red border-b border-white/10">
                                                {depth.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-gray-400 text-sm">
                                    {compareRows.map((row) => (
                                        <tr key={row.key} className="hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-white sticky left-0 bg-vampire-black/80 z-20 border-r border-white/5">
                                                {row.label}
                                            </td>
                                            {depths.map((depth) => (
                                                <td key={depth.name} className="p-6 text-center">
                                                    {depth[row.key]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                <div className="grid md:grid-cols-2 gap-16 items-start border-t border-white/5 pt-20">
                    <div>
                        <h3 className="text-3xl font-black font-oswald uppercase tracking-wider leading-none mb-4 text-white">
                            Aftercare
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Time held after the work. Used when you need it.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {aftercare.map((pack) => (
                            <div key={pack.name} className="p-6 border border-white/10 hover:border-blood-red/40 transition-colors">
                                <h4 className="text-white text-lg font-oswald font-black uppercase tracking-wider mb-1">{pack.name}</h4>
                                <p className="text-sm text-gray-400 mb-3 text-center md:text-left">{pack.line}</p>
                                <ul className="space-y-1 text-center md:text-left">
                                    {pack.features.map((feat) => (
                                        <li key={feat} className="text-gray-500 text-sm">{feat}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <button
                            onClick={() => onOpenProjectForm('Aftercare')}
                            className="self-start mt-2 text-white/60 hover:text-blood-red transition-all duration-500 border-b border-white/10 hover:border-blood-red/50 pb-1 text-sm hover:shadow-[0_0_20px_rgba(138,3,3,0.4)] w-fit"
                        >
                            Ask about aftercare
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Engagements;
