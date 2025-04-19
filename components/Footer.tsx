'use client'

import { motion } from 'framer-motion';

export default function Footer() {
    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.8,
                duration: 0.5
            }
        }
    };

    return (
        <footer className="container mx-auto">
            <motion.div
                className="text-center md:text-left text-gray-400"
                variants={footerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p
                    className="w-4/5 md:w-full md:pt-4 mx-auto text-[12px] font-[500]"
                    whileHover={{ color: "#999999" }}
                >
                    By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms
                </motion.p>
                <motion.p
                    className="my-4 text-[10px] font-[500]"
                    whileHover={{ color: "#999999" }}
                >
                    Fametonic 2025 ©All Rights Reserved.
                </motion.p>
            </motion.div>
        </footer>
    );
}