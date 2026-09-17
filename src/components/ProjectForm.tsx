import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { sendProjectInquiry } from '../lib/emailService';
import CustomSelect from './CustomSelect';

interface ProjectFormProps {
    onClose: () => void;
    initialPackage?: string;
}

const projectTypes = [
    'Presence',
    'Launch',
    'Growth',
    'Scale',
    'Aftercare',
    'Something else',
];

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const inputClass = 'w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blood-red focus:ring-1 focus:ring-blood-red/50 transition-colors text-sm';
const labelClass = 'block text-xs text-gray-400 uppercase tracking-wide mb-2';

const ProjectForm = ({ onClose, initialPackage = '' }: ProjectFormProps) => {
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [projectType, setProjectType] = useState(
        projectTypes.find((type) => type.toLowerCase() === initialPackage.toLowerCase()) || ''
    );
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handler);
        document.body.style.overflow = 'hidden';
        document.body.classList.add('inquiry-open');
        return () => {
            document.removeEventListener('keydown', handler);
            document.body.style.overflow = '';
            document.body.classList.remove('inquiry-open');
        };
    }, [onClose]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        const formData = new FormData(e.currentTarget);
        try {
            await sendProjectInquiry({
                from_name: formData.get('from_name') as string,
                from_email: formData.get('from_email') as string,
                business_name: formData.get('business_name') as string,
                project_type: formData.get('project_type') as string,
                message: formData.get('message') as string,
            });
            setStatus('success');
            setTimeout(() => onClose(), 2500);
        } catch (err) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        }
    };

    return createPortal(
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80"
            onClick={(e) => e.target === overlayRef.current && onClose()}
        >
            <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-neutral-950 border border-white/10 shadow-2xl shadow-blood-red/10">
                <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/10 bg-neutral-950/95">
                    <div>
                        <h3 className="text-2xl font-bold font-oswald uppercase tracking-tight text-white">
                            Start a <span className="text-blood-red">conversation</span>
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">Tell us about your vision.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-500 hover:text-white text-2xl leading-none"
                        aria-label="Close form"
                    >
                        ×
                    </button>
                </div>

                {status === 'success' ? (
                    <div className="p-12 text-center">
                        <h4 className="text-xl font-bold text-white font-oswald uppercase tracking-wide mb-2">Message sent</h4>
                        <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-6 space-y-5">
                        <div>
                            <label htmlFor="from_name" className={labelClass}>
                                Your Name <span className="text-blood-red">*</span>
                            </label>
                            <input type="text" id="from_name" name="from_name" required placeholder="John Doe" className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="from_email" className={labelClass}>
                                Email Address <span className="text-blood-red">*</span>
                            </label>
                            <input type="email" id="from_email" name="from_email" required placeholder="john@business.com" className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="business_name" className={labelClass}>
                                Business Name <span className="text-blood-red">*</span>
                            </label>
                            <input type="text" id="business_name" name="business_name" required placeholder="Your Business LLC" className={inputClass} />
                        </div>
                        <CustomSelect
                            label="Project Type"
                            options={projectTypes}
                            value={projectType}
                            onChange={setProjectType}
                            required
                            placeholder="Select..."
                        />
                        <div>
                            <label htmlFor="message" className={labelClass}>
                                Project Description <span className="text-blood-red">*</span>
                            </label>
                            <textarea id="message" name="message" required rows={4} placeholder="Tell us about your project, goals, and timeline..." className={`${inputClass} resize-none`} />
                        </div>
                        {status === 'error' && (
                            <p className="p-4 bg-red-950/50 border border-red-900/50 text-red-400 text-sm">{errorMessage}</p>
                        )}
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="text-white/60 hover:text-blood-red transition-all duration-500 border-b border-white/10 hover:border-blood-red/50 pb-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'Sending' : 'Send'}
                        </button>
                    </form>
                )}
            </div>
        </div>,
        document.body
    );
};

export default ProjectForm;
