import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-52 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center">
                <h1 className="text-4xl md:text-7xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
                    Need to get your{' '}
                    <span className="relative">
                        <span className="relative bg-yellow-200 z-10">taxes</span>
                        <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-400/30 -rotate-1"></span>
                    </span>
                    {', '}
                    <span className="relative">
                        <span className="relative bg-yellow-200 z-10">savings</span>
                        <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-400/30 -rotate-1"></span>
                    </span>
                    {' '}and{' '}
                    <span className="relative">
                        <span className="relative bg-yellow-200 z-10">investments</span>
                        <span className="absolute bottom-0 left-0 w-full h-3 bg-green-400/30 -rotate-1"></span>
                    </span>
                    {' '} in order?
                </h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">We are here to help you with all your financial planning needs</p>
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                   {/* Add the contact us button here */}
                   <Link href="/contact" className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors font-medium">
                        Contact Us!
                    </Link>
                </div>
                {/* <Image
                    src={heroDetails.centerImageSrc}
                    width={384}
                    height={340}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={true}
                    unoptimized={true}
                    alt="app mockup"
                    className='relative mt-12 md:mt-16 mx-auto z-10'
                /> */}
            </div>
        </section>
    );
};

export default Hero;
