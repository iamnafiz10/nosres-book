import React from 'react';
import Image from "next/image";
import profileImg from '../../../../public/assets/images/profile.png'

function Hero() {
    return (
        <>
            <section id="banner-section" className="bg-[#F4F4F4] pt-[4rem] pb-[1.7rem]">
                <div className="container">
                    <div className="flex items-center gap-6">
                        <div className="profile">
                            <Image src={profileImg} className="w-[120px] h-[120px] rounded-full" alt="profileImg"/>
                        </div>
                        <div className="content">
                            <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-prgcolor font-bold md:font-medium mb-4">
                                Jane Doe
                            </h1>
                            <p>
                                Professeure à la French American International School.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;