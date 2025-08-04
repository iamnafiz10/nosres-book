import React from 'react';
import {
    LuBookOpen,
    LuBookOpenText, LuCircleArrowRight,
    LuLandmark,
    LuPresentation,
    LuScale, LuShoppingBag,
} from "react-icons/lu";

function Details() {
    return (
        <>
            <section id="details-section">
                <div className="container pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-start gap-1">
                                <div className="icon">
                                    <LuBookOpen size={25} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black font-[600]">
                                    Pour les auteurs potentiels
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Proposez votre manuscrit et rejoignez une
                                maison engagée dans l’éducation et
                                innovation pédagogique.
                            </p>

                            <button type='button'
                                    className="mt-4 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:underline">
                           <span className="icon">
                                <LuCircleArrowRight size={15}/>
                           </span>
                                En savoir plus
                            </button>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-start gap-1">
                                <div className="icon">
                                    <LuBookOpenText size={25} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black font-[600]">
                                    Pour les auteurs actuels
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Découvrez tout sur vos droits d’auteur et
                                comment préparer votre manuscrit pour la
                                soumission à votre éditeur.
                            </p>

                            <button type='button'
                                    className="mt-4 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:underline">
                           <span className="icon">
                                <LuCircleArrowRight size={15}/>
                           </span>
                                En savoir plus
                            </button>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-start gap-1">
                                <div className="icon">
                                    <LuPresentation size={25} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black font-[600]">
                                    Pour les éducateurs
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Accédez à des ressources prêtes à l’emploi
                                et à des contenus complémentaires pour
                                enrichir vos pratiques.
                            </p>

                            <button type='button'
                                    className="mt-4 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:underline">
                           <span className="icon">
                                <LuCircleArrowRight size={15}/>
                           </span>
                                En savoir plus
                            </button>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-start gap-1">
                                <div className="icon">
                                    <LuLandmark size={25} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black font-[600]">
                                    Pour les institutions
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Commandes groupées, accompagnement sur
                                mesure, intégration aux programmes… Nous
                                vous proposons des solutions adaptées.
                            </p>

                            <button type='button'
                                    className="mt-4 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:underline">
                           <span className="icon">
                                <LuCircleArrowRight size={15}/>
                           </span>
                                En savoir plus
                            </button>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-start gap-1">
                                <div className="icon">
                                    <LuShoppingBag size={25} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black font-[600]">
                                    Service clientèle
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Vous avez une question sur une commande, un
                                produit ou un service ? Notre équipe est là pour
                                vous accompagner avec réactivité et clarté.
                            </p>

                            <button type='button'
                                    className="mt-4 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:underline">
                           <span className="icon">
                                <LuCircleArrowRight size={15}/>
                           </span>
                                En savoir plus
                            </button>
                        </div>

                        <div data-aos="zoom-in" className="col bg-[#F4F4F4] p-8 rounded-xl">
                            <div className="flex items-center justify-start gap-1">
                                <div className="icon">
                                    <LuScale size={25} className="text-primary"/>
                                </div>
                                <h4 className="text-[16px] text-black font-[600]">
                                    Droits et permissions
                                </h4>
                            </div>
                            <p className="text-[14px] mt-4 text-left text-prgcolor">
                                Vous souhaitez utiliser nos ouvrages dans un
                                cadre pédagogique ou professionnel ?
                                Consultez notre politique de droits d’usage.
                            </p>

                            <button type='button'
                                    className="mt-4 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:underline">
                           <span className="icon">
                                <LuCircleArrowRight size={15}/>
                           </span>
                                En savoir plus
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Details;