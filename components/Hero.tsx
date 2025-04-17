// components/Hero.tsx
import Button from './Button';
import Image from 'next/image';
import Footer from './Footer';

export default function Hero() {
    return (
        <section className="container mx-auto px-4 py-12 relative">
            <div className="flex flex-col-reverse md:flex-row">
                {/* Left Column - Text Content */}
                <div className="w-full md:w-1/2 mt-12 md:mt-0 relative z-10">
                    <h1 className="text-[35px] md:text-[35px] font-[800] md:font-bold space-y-[27px] text-center md:text-left">
                        Want to Turn Social Media Into a Profitable Career?
                    </h1>

                    <h2
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
                            // textShadow: "0 4px 4px 0px rgba(252, 0, 78, 1)"
                        }}
                    >
                        Discover your way to success with Fametonic:
                    </h2>

                    <ul className="space-y-5 my-5">
                        {[
                            'Start growing your influence right away—no waiting required!',
                            'Create viral TikToks and Reels step by step with easy-to-follow lessons',
                            'Use a Personal AI Worker to boost your content',
                            'Learn from expert-led courses designed for aspiring influencers'
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-yellow-400 mr-2 my-auto">✨</span>
                                <span className='font-[600] text-[16px] leading-[22px]'>{item}</span>
                            </li>
                        ))}
                    </ul>


                    <div className="flex flex-col">
                        {/* Footer with order changed based on screen size */}
                        <div className="order-1 md:order-3">
                            <Footer />
                        </div>

                        {/* Button */}
                        <div className="order-2">
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

                            <p className="text-[12px] font-[400] mt-3 text-center w-full md:w-3/5">
                                1-minute quiz for personalized insights
                            </p>
                        </div>
                    </div>

                </div>

                {/* Right Column - Image - Will appear first on mobile */}
                <div className="w-full md:w-3/5 md:absolute md:right-0 md:top-0 md:h-full flex justify-center items-center">
                    <div className="relative w-full h-120 md:h-full">
                        <Image
                            src="/images/phone-mockup.png"
                            alt="Fametonic App Dashboard"
                            fill
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}