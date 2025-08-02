import React from 'react';
import Image from "next/image";
import profileImg from '../../../../public/assets/images/profile.png'

function Hero() {
    return (
        <>
            <section id="banner-section" className="bg-[#F4F4F4] pt-[4rem] pb-[1.7rem]">
                <div className="container">
                    <div className="flex items-center gap-6">
                        <div>
                            <Image
                                src={profileImg}
                                alt="profileImg"
                                className="rounded-full w-[240px] lg:w-[120px]"
                            />
                        </div>
                        <div className="content">
                            <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-prgcolor font-bold md:font-medium mb-4 md:mb-3">
                                Jane Doe
                            </h1>
                            <h4 className="text-[16px] text-graycolor">
                                Professeure à la French American International School.
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;