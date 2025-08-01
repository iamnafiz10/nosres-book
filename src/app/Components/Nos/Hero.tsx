import React from 'react';

function Hero() {
    return (
        <>
            <section id="banner-section" className="bg-[#F4F4F4] pt-[5.7rem] pb-[3rem]">
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-prgcolor font-bold md:font-medium mb-4">
                        Nos auteurs
                    </h1>
                    <p>
                        Derrière chaque ouvrage Nosres Books se trouvent des femmes et des hommes animés par une passion commune pour
                        l’enseignement et la pédagogie innovante : enseignants, chercheurs et professionnels venus de divers horizons. Explorez leur univers
                        et découvrez leurs contributions aux ouvrages de notre catalogue.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Hero;