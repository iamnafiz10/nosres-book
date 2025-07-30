import React from 'react';
import Link from "next/link";

function Hero() {
    return (
        <>
            <section id="banner-section" className="bg-gray-300 pt-[10rem] pb-[7rem]">
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-[#263F5C] font-bold md:font-medium mb-4">
                        Des livres...<br/>
                        <span className="text-[#3A5F8A]">
                            pour faire avancer
                        </span>
                        <span className="text-primary"> l{`’`}humanité</span>
                    </h1>
                    <p>
                        Nous concevons des ouvrages éducatifs qui éclairent, inspirent et transforment.
                    </p>
                    <div className="mt-8">
                        <Link href='#'
                              className="bg-primary border border-primary px-8 py-3 text-white font-medium rounded-md hover:bg-transparent hover:text-primary transition">
                            Découvrir nos collections
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;