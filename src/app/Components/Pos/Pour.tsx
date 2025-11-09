import React from 'react';
import {
    LuChartNoAxesColumnIncreasing, LuSticker,
    LuTableOfContents,
} from "react-icons/lu";

const Pour = () => {
    return (
        <>
            <section id="nosp-section">
                <div className="container pt-10">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Pourquoi choisir Voyage méthode de lecture ?
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                        <div data-aos="zoom-in" className="col">
                            <div className="icon">
                                <LuTableOfContents size={50}
                                                   className="text-primary border border-bordercolor p-3 rounded-full"/>
                            </div>
                            <h4 className="text-[16px] mt-2 text-black font-[600]">
                                Une approche bien structurée
                            </h4>
                            <p className="text-[14px] text-prgcolor mt-2">
                                Offre une méthode claire et organisée
                                pour initier les jeunes apprenants à la
                                méthode syllabique.
                            </p>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="icon">
                                <LuSticker size={50}
                                           className="text-primary border border-bordercolor p-3 rounded-full"/>
                            </div>
                            <h4 className="text-[16px] mt-2 text-black font-[600]">
                                Des contenus engageants
                            </h4>
                            <p className="text-[14px] text-prgcolor mt-2">
                                Comprend des personnages amusants,
                                des comptines et des activités qui
                                motivent et captivent les enfants.
                            </p>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="icon">
                                <LuChartNoAxesColumnIncreasing size={50}
                                                               className="text-primary border border-bordercolor p-3 rounded-full"/>
                            </div>
                            <h4 className="text-[16px] mt-2 text-black font-[600]">
                                Progression étape par étape
                            </h4>
                            <p className="text-[14px] text-prgcolor mt-2">
                                Accompagne les apprenants des sons
                                individuels à la lecture, en renforçant
                                leur confiance à chaque étape.
                            </p>
                        </div>
                    </div>

                    <h4 className="text-[24px] mt-8 text-black font-[600]">
                        Tarification avec remise éducative
                    </h4>
                    <p className="text-[16px] text-prgcolor mt-2">
                        Nous offrons des réductions spéciales aux établissements éducatifs, enseignants, étudiants et
                        personnel afin de<br/>
                        rendre nos produits et services plus abordables. Une vérification de l’éligibilité, telle qu’une
                        pièce d'identité scolaire<br/>
                        valide ou une adresse email institutionnelle, peut être requise.
                        <br/>
                        <br/>
                        Pour plus d’informations ou pour faire une demande, veuillez nous contacter à
                        business@nosres.com.
                    </p>
                    <button type='button'
                            className="mt-4 py-2 px-4 text-primary hover:text-white hover:bg-primary cursor-pointer border border-primary rounded text-[14px]">
                        En savoir plus
                    </button>
                </div>
            </section>
        </>
    );
};

export default Pour;