import React from 'react';
import {
    LuBrainCog, LuCircleArrowRight,
    LuGraduationCap,
    LuSparkles,
    LuTextSearch
} from "react-icons/lu";

function Approche() {
    return (
        <>
            <section id="nosp-section">
                <div className="container pt-16">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Notre approche
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        <div data-aos="zoom-in" className="col">
                            <div className="icon">
                                <LuBrainCog size={40} className="text-primary"/>
                            </div>
                            <h4 className="text-[16px] mt-2 text-black font-[600]">
                                Ingéniosité
                            </h4>
                            <p className="text-[14px] text-prgcolor">
                                Des formats innovants qui stimulent la<br/>
                                curiosité, la pensée critique et la résolution
                                de problèmes.
                            </p>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="icon">
                                <LuTextSearch size={40} className="text-primary"/>
                            </div>
                            <h4 className="text-[16px] mt-2 text-black font-[600]">
                                Clarté
                            </h4>
                            <p className="text-[14px] text-prgcolor">
                                Des contenus structurés, logiques et accessibles<br/>
                                pour accompagner un apprentissage progressif
                                et réfléchi.
                            </p>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="icon">
                                <LuSparkles size={40} className="text-primary"/>
                            </div>
                            <h4 className="text-[16px] mt-2 text-black font-[600]">
                                Esthétique
                            </h4>
                            <p className="text-[14px] text-prgcolor">
                                Des ouvrages soignés et agréables à<br/>
                                parcourir, pensés pour donner du plaisir à<br/>
                                apprendre.
                            </p>
                        </div>
                    </div>

                    <div
                        className="mt-10 content z-20 inset-0 bg-gradient-to-r from-[#546d8a52] to-[#bcdbff] text-white p-12 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div data-aos="zoom-in" className="col">
                                <div
                                    className="h-full md:h-[190px] bg-[#fafafa38] py-4 px-8 rounded-xl">
                                    <div className="text mt-2">
                                        <h4 className="text-[18px] text-prgcolor font-semibold">
                                            Une initiative de Nosres Education
                                        </h4>
                                        <p className="text-[14px] mt-3">
                                            Nosres Books s’inscrit dans une vision globale : celle de
                                            Nosres Education, qui regroupe des projets et services
                                            éducatifs innovants. À travers nos livres, nous cherchons à
                                            prolonger l’expérience d’apprentissage au-delà des murs de
                                            l’école, dans les foyers, les bibliothèques et les
                                            communautés.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="col">
                                <div
                                    className="h-full bg-[#fafafa38] py-4 px-8 rounded-xl flex flex-col justify-center items-center text-center">
                                    <div className="text_wrap flex flex-col w-full justify-center items-center mt-2">
                                        <div className="icon">
                                            <LuGraduationCap size={60} className="text-white"/>
                                        </div>
                                        <h4 className="text-[18px] text-white font-semibold">
                                            NOSRES EDUCATION
                                        </h4>
                                        <h4 className="text-[14px] mt-3 text-white">
                                            Empowering education, one step at a time
                                        </h4>

                                        <button type='button'
                                                className="mt-2 flex items-center gap-1 cursor-pointer text-[14px] text-white hover:text-white hover:underline">
                                           <span className="icon">
                                                <LuCircleArrowRight size={15}/>
                                            </span>
                                            En savoir plus
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Approche;