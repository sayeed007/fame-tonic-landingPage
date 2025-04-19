'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

export default function Button({ children, href, className = '' }: ButtonProps) {
    const buttonVariants = {
        initial: {
            scale: 1,
        },
        hover: {
            scale: 1.05,
            boxShadow: "0px 0px 15px 2px rgba(0,231,249,0.7)",
            transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: {
            scale: 0.95,
            transition: {
                duration: 0.1
            }
        }
    };

    return (
        <Link href={href}>
            <motion.div
                className={`flex justify-center w-full md:w-3/5 mt-5 py-2 bg-[#FC004E] text-white text-center rounded-md hover:opacity-90 transition-opacity ${className} shadow-[2px_2px_10px_0px_rgba(0,231,249,1)]`}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                animate={{
                    boxShadow: [
                        "0px 0px 8px 1px rgba(0,231,249,0.6)",
                        "0px 0px 12px 2px rgba(0,231,249,0.8)",
                        "0px 0px 8px 1px rgba(0,231,249,0.6)"
                    ]
                }}
                transition={{
                    boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror"
                    }
                }}
            >
                <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2
                    }}
                    className='flex'
                >
                    {children}
                </motion.div>
            </motion.div>
        </Link>
    );
}