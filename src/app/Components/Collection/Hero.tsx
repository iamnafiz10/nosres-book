import React from 'react';

function Hero() {
    return (
        <>
            <section id="banner-section" className="bg-[#F4F4F4] pt-[5.7rem] pb-[3rem]">
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-prgcolor font-bold md:font-medium mb-4">
                        Découvrez nos collections
                    </h1>
                    <p>
                        Des collections pensées pour accompagner enseignants et élèves tout au long de leur parcours
                        d’apprentissage, de la maternelle à
                        l’enseignement supérieur. Chacune d’elles se distingue par une approche pédagogique rigoureuse,
                        des contenus structurés et des
                        supports innovants.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Hero;