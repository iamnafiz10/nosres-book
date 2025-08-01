import React from 'react';
import Link from "next/link";

function Hero() {
    return (
        <>
            <section id="banner-section" className="bg-[#F4F4F4] pt-[8rem] pb-[5rem]">
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-prgcolor font-bold md:font-medium mb-4">
                        Maternelle
                    </h1>
                    <p>
                        Les nouveautés et l’ensemble de nos manuels scolaires pour la maternelle.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Hero;