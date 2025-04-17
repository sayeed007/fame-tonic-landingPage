'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="w-full">
            {/* Sale Banner */}
            <div className="w-full bg-gradient-to-r from-[#FC004E] to-[#10CBE0] py-3 px-4 text-center">
                <p className="text-white text-base font-[800] md:text-[22px]">
                    <span className='inline-flex items-center text-[#00E7F9]'>🚀 FRESH BEGINNINGS SALE: </span>
                    <span className="inline-flex items-center">&nbsp;Extra 25% OFF, </span>
                    <span className="inline-flex items-center">Limited Spots - start your journey today!</span>
                </p>
            </div>

            {/* Navigation */}
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between  relative">
                <div className="logo w-full md:w-auto flex justify-center md:justify-start">
                    <Link href="/">
                        <div className="relative h-12 w-32 md:h-18">
                            <Image
                                src="/images/logo.svg"
                                alt="Fametonic"
                                fill
                                style={{ objectFit: "contain" }}
                                className="filter brightness-200"
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10">
                    <Link href="/about" className="text-[#A9A9A9] hover:text-cyan-400 text-lg font-semibold">About us</Link>
                    <Link href="/contact" className="text-[#A9A9A9] hover:text-cyan-400 text-lg font-semibold">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden absolute top-[25px] right-4">
                    <button
                        className="text-white text-2xl focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden w-full mt-4 py-2 bg-gray-900 rounded-lg shadow-lg absolute top-[130px] z-10">
                        <div className="flex flex-col items-center space-y-4 py-2">
                            <Link
                                href="/about"
                                className="text-white hover:text-cyan-400 w-full text-center py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About us
                            </Link>
                            <Link
                                href="/contact"
                                className="text-white hover:text-cyan-400 w-full text-center py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}