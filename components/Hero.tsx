// components/Hero.tsx
'use client'

import Button from './Button';
import Image from 'next/image';
import Footer from './Footer';
import { motion } from 'framer-motion';

export default function Hero() {
    // Animation variants for the heading
    const headingVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: 0.3
            }
        }
    };

    // Animation variants for the highlighted heading
    const highlightedHeadingVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: 0.6
            }
        }
    };

    // Animation variants for list items
    const listItemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.8 + (i * 0.15),
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        })
    };

    // Animation variants for the phone mockup
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100
            }
        }
    };

    // List of features with their icons
    const featuresList = [
        'Start growing your influence right away—no waiting required!',
        'Create viral TikToks and Reels step by step with easy-to-follow lessons',
        'Use a Personal AI Worker to boost your content',
        'Learn from expert-led courses designed for aspiring influencers'
    ];

    return (
        <section className="container mx-auto px-4 py-12 relative">
            <div className="flex flex-col-reverse md:flex-row">
                {/* Left Column - Text Content */}
                <div className="w-full md:w-1/2 mt-12 md:mt-0 relative z-10">
                    <motion.h1
                        className="text-[35px] md:text-[35px] font-[800] md:font-bold space-y-[27px] text-center md:text-left"
                        variants={headingVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Want to Turn Social Media Into a Profitable Career?
                    </motion.h1>

                    <motion.h2
                        className="font-bold text-[35px] md:text-3xl text-center md:text-left"
                        style={{
                            color: 'rgb(0, 231, 249)',
                            textShadow: `
                                0 0 7px rgba(252, 0, 78, 0.9),
                                0 0 14px rgba(252, 0, 78, 0.7),
                                0 0 21px rgba(252, 0, 78, 0.5),
                                0 0 28px rgba(252, 0, 78, 0.3)
                            `,
                            letterSpacing: '0.5px',
                        }}
                        variants={highlightedHeadingVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Discover your way to success with Fametonic:
                    </motion.h2>

                    <ul className="space-y-5 my-5">
                        {featuresList.map((item, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start"
                                variants={listItemVariants}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                                whileHover={{
                                    x: 10,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.span
                                    className="text-yellow-400 mr-2 my-auto"
                                    animate={{
                                        rotate: [0, 10, -10, 10, 0],
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 3
                                    }}
                                >
                                    ✨
                                </motion.span>
                                <span className='font-[600] text-[16px] leading-[22px]'>{item}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="flex flex-col">
                        {/* Footer with order changed based on screen size */}
                        <div className="order-1 md:order-3">
                            <Footer />
                        </div>

                        {/* Button */}
                        <div className="order-2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5, duration: 0.6 }}
                            >
                                <Button href="/get-started">
                                    <span className='mr-2 font-bold text-[20px]'>
                                        GET STARTED
                                    </span>

                                    <Image
                                        src="/images/rightArrow.png"
                                        alt="rightArrow"
                                        style={{ objectFit: "contain" }}
                                        width={11}
                                        height={4}
                                    />
                                </Button>

                                <motion.p
                                    className="text-[12px] font-[400] mt-3 text-center w-full md:w-3/5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.7, duration: 0.5 }}
                                >
                                    1-minute quiz for personalized insights
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Image - Will appear first on mobile */}
                <motion.div
                    className="w-full md:w-3/5 md:absolute md:right-0 md:top-0 md:h-full flex justify-center items-center"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="relative w-full h-120 md:h-full"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                    >
                        <Image
                            src="/images/phone-mockup.png"
                            alt="Fametonic App Dashboard"
                            fill
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}