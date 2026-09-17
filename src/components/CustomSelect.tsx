import { useState, useRef, useEffect } from 'react';

interface CustomSelectProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    label: string;
    placeholder?: string;
    required?: boolean;
}

const CustomSelect = ({ options, value, onChange, label, placeholder = 'Select an option', required }: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={containerRef}>
            <label className="block text-xs text-gray-400 uppercase tracking-wide mb-2">
                {label} {required && <span className="text-blood-red">*</span>}
            </label>

            <input type="hidden" name={label.toLowerCase().replace(/\s+/g, '_')} value={value} />

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 py-3 bg-white/5 border text-left text-white cursor-pointer flex items-center justify-between transition-all duration-200 ${
                    isOpen ? 'border-blood-red ring-1 ring-blood-red/50' : 'border-white/10 hover:border-white/20'
                }`}
            >
                <span className={`text-sm ${value ? '' : 'text-gray-500'}`}>
                    {value || placeholder}
                </span>
                <span className={`text-gray-400 text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-neutral-900 border border-white/10 shadow-xl max-h-60 overflow-y-auto">
                    {options.map((option) => (
                        <button
                            type="button"
                            key={option}
                            onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 text-sm cursor-pointer hover:bg-white/5 transition-colors ${
                                value === option ? 'text-blood-red bg-blood-red/5' : 'text-gray-300'
                            }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
