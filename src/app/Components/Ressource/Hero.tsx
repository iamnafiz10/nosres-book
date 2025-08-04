import React from 'react';

function Hero() {
    return (
        <>
            <section id="hero-section" className="pt-10">
                <div className="container pt-16">
                    <div className="wrap text-left">
                        <h4 className="text-[24px] font-semibold">
                            Pour les auteurs, les éducateurs, les institutions et les clients
                        </h4>
                        <p className="text-[16px] mt-2">
                            Nosres Books s’adresse à tous ceux qui font vivre l’éducation au quotidien : auteurs
                            engagés, enseignants<br/>
                            passionnés, institutions éducatives et clients à la recherche de ressources pédagogiques
                            innovantes.
                            <br/>
                            <br/>
                            Nous vous accompagnons à chaque étape, de la création à la transmission, avec des ouvrages
                            conçus<br/>
                            pour éclairer, inspirer et transformer.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;