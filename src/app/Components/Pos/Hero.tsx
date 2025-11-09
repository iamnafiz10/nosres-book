import React from 'react';
import profileImg from "../../../../public/assets/images/color-book.png";
import Image from "next/image";

function Hero() {
    return (
        <>
            <section id="banner-section" className="pt-[110px] sm:pt-[50px]">
                <div className="content_wrap bg-[#F4F4F4] lg:relative overflow-hidden">
                    <div className="container py-0">
                        <div className="block lg:flex items-center justify-between">
                            <div className="wrap">
                                <h1 className="text-2xl md:text-[38px] font-bold md:font-medium">
                                    <span className="text-[#263F5C]">Pose la base.</span>
                                    <br/>
                                    <span className="text-[#3A5F8A]">Écoute, lis, écris</span>
                                    <span className="text-primary"> et parle avec aisance.</span>
                                </h1>
                                <p>
                                    Apprendre une langue demande du temps, et pour le français, ce parcours
                                    commence<br/>
                                    par la méthode syllabique.
                                </p>
                            </div>
                            <div className="image_wrap">
                                <Image
                                    src={profileImg}
                                    alt="profileImg"
                                    className="w-full md:w-[250px] h-full md:h-[200px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;