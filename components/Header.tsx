'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Banner animation variants
    const bannerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    // Logo animation variants
    const logoVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.2
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    // Navigation links animation variants
    const navItemVariants = {
        initial: { opacity: 0, y: -20 },
        animate: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + (i * 0.1),
                duration: 0.5
            }
        }),
        hover: {
            scale: 1.1,
            color: "#00E7F9",
            transition: { duration: 0.2 }
        }
    };

    return (
        <header className="w-full">
            {/* Sale Banner with Animation */}
            <motion.div
                className="w-full bg-gradient-to-r from-[#FC004E] to-[#10CBE0] py-3 px-4 text-center"
                variants={bannerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p
                    className="text-white text-base font-[800] md:text-[22px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <motion.span
                        className='inline-flex items-center text-[#00E7F9]'
                        animate={{
                            scale: [1, 1.05, 1],
                            transition: {
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 1.5
                            }
                        }}
                    >
                        🚀 FRESH BEGINNINGS SALE:
                    </motion.span>
                    <span className="inline-flex items-center">&nbsp;Extra 25% OFF, </span>
                    <span className="inline-flex items-center">Limited Spots - start your journey today!</span>
                </motion.p>
            </motion.div>

            {/* Navigation */}
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between relative">
                <div className="logo w-full md:w-auto flex justify-center md:justify-start">
                    <Link href="/">
                        <motion.div
                            className="relative h-12 w-32 md:h-18"
                            variants={logoVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                        >
                            <Image
                                src="/images/logo.svg"
                                alt="Fametonic"
                                fill
                                style={{ objectFit: "contain" }}
                                className="filter brightness-200"
                            />
                        </motion.div>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10">
                    <motion.div
                        variants={navItemVariants}
                        custom={0}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                    >
                        <Link href="/about" className="text-[#A9A9A9] hover:text-cyan-400 text-lg font-semibold">
                            About us
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={navItemVariants}
                        custom={1}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                    >
                        <Link href="/contact" className="text-[#A9A9A9] hover:text-cyan-400 text-lg font-semibold">
                            Contact
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <motion.div
                    className="md:hidden absolute top-[25px] right-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.button
                        className="text-white text-2xl focus:outline-none"
                        onClick={toggleMobileMenu}
                        whileTap={{ scale: 0.9 }}
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </motion.button>
                </motion.div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden w-full mt-4 py-2 bg-gray-900 rounded-lg shadow-lg absolute top-[130px] z-10"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col items-center space-y-4 py-2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link
                                    href="/about"
                                    className="text-white hover:text-cyan-400 w-full text-center py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About us
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link
                                    href="/contact"
                                    className="text-white hover:text-cyan-400 w-full text-center py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </div>
        </header>
    );
}