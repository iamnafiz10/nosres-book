import React from 'react';

function Hero() {
    return (
        <>
            <section id="banner-section" className="bg-[#F4F4F4] pt-[5.7rem] pb-[3rem]">
                <div className="container text-center">
                    <h4 className="text-[24px] text-prgcolor">
                        Notre mission
                    </h4>
                    <h1 className="text-2xl mt-3 md:text-[38px] leading-6 md:leading-10 text-[#263F5C] font-bold md:font-medium mb-4">
                        Créer des livres qui<br/> <span className="text-[#3A5F8A]"> éclairent, inspirent </span> <span
                        className="text-primary"> et transforment</span></h1>
                </div>
            </section>
        </>
    );
}

export default Hero;