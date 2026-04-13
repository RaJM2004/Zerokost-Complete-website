import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

interface RequestAccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RequestAccessModal: React.FC<RequestAccessModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interest: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your interest! We will contact you shortly.');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-black border border-white/10 rounded-2xl shadow-2xl p-8 overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-2xl font-bold text-white mb-8">Request Access</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email ID"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <select
                                    value={formData.interest}
                                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors appearance-none cursor-pointer"
                                    required
                                >
                                    <option value="" disabled className="bg-black text-gray-500">Select Product Interest</option>
                                    <option value="Biologics Discovery Platform" className="bg-black">Biologics Discovery Platform</option>
                                    <option value="Sandbox Access" className="bg-black">Sandbox Access</option>
                                    <option value="LMS Platform" className="bg-black">LMS Platform</option>
                                    <option value="VMS System" className="bg-black">VMS System</option>
                                    <option value="Doc Authoring" className="bg-black">Doc Authoring</option>
                                    <option value="DMS Platform" className="bg-black">DMS Platform</option>
                                    <option value="Gen AI Agents" className="bg-black">Gen AI Agents</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                            </div>

                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors min-h-[120px] resize-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-[160px] bg-[#0891b2] hover:bg-[#0e7490] text-white font-semibold py-3 rounded-full transition-colors shadow-lg shadow-cyan-900/20"
                            >
                                Request Access
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RequestAccessModal;
