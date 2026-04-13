import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Platform', path: '/platform' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Customers', path: '/customers' },
        { name: 'About', path: '/about' },
        { name: 'Team', path: '/team' },
        { name: 'Careers', path: '/careers' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5"
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center">
                        <img src="/Healthcare.png" alt="Zerokost Healthcare Logo" className="h-10 md:h-14 w-auto object-contain" />
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`${isActive(link.path) ? 'text-brand-orange' : 'text-gray-300'
                                } hover:text-white transition-colors uppercase tracking-wider text-[11px] font-bold`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenModal}
                        className="bg-brand-orange hover:bg-cyan-700 text-white px-5 py-2 rounded-full font-bold uppercase tracking-wider text-[11px] transition-all shadow-md shadow-cyan-900/20"
                    >
                        Book a Demo
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <span className="text-2xl">✕</span>
                    ) : (
                        <span className="text-2xl">☰</span>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-black border-b border-white/10 px-4 py-6 flex flex-col gap-4 shadow-2xl"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`${isActive(link.path) ? 'text-brand-orange' : 'text-gray-300'
                                } hover:text-white font-medium py-2 border-b border-white/5 uppercase tracking-wider text-[12px] font-bold`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={() => {
                            onOpenModal();
                            setIsMobileMenuOpen(false);
                        }}
                        className="bg-brand-orange text-white py-3 rounded-lg font-bold uppercase tracking-wider text-[12px] mt-2 shadow-lg shadow-cyan-900/20"
                    >
                        Book a Demo
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
