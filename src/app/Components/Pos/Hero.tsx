import React from 'react';
import profileImg from "../../../../public/assets/images/color-book.png";
import Image from "next/image";

function Hero() {
    return (
        <>
            <section id="banner-section" className="pt-[50px]">
                <div className="content_wrap bg-[#F4F4F4] py-[30px] lg:relative overflow-hidden">
                    <div className="container py-0">
                        <div className="block lg:flex items-center justify-between">
                            <div className="wrap">
                                <h1 className="text-2xl md:text-[38px] text-prgcolor font-bold md:font-medium">
                                    Pose la base.<br/>
                                    Écoute, lis, écris et parle avec aisance.
                                </h1>
                                <p>
                                    Apprendre une langue demande du temps, et pour le français, ce parcours
                                    commence<br/>
                                    par la méthode syllabique.
                                </p>
                            </div>
                            <div className="image_wrap lg:absolute right-0 mt-4 lg:mt-0">
                                <Image
                                    src={profileImg}
                                    alt="profileImg"
                                    className="w-full h-full"
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