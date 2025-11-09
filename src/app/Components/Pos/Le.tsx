import React from 'react';
import bookImg from "../../../../public/assets/images/color-book.png";
import Image from "next/image";
import Link from "next/link";

const Le = () => {
    return (
        <>
            <section id="le-section" className="pt-10">
                <div className="container">
                    <div className="relative future-section overflow-hidden rounded-xl p-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                            <div data-aos="zoom-in" className="col md:col-span-3">
                                <Image src={bookImg} className="w-full h-full"
                                       alt="bookImg"/>
                            </div>

                            <div className="col md:col-span-9 mt-2 md:mt-0 flex flex-col justify-center rounded-xl">
                                <h2 className="text-[24px] font-semibold text-black">
                                    Le livre de l’élève
                                </h2>

                                <h4 className="text-[16px] text-prgcolor mt-1">
                                    Construire des bases solides en phonétique
                                    <br/>
                                    <br/>
                                    Le livre de l’élève initie progressivement les enfants à la phonétique, en
                                    commençant par les
                                    lettres et les sons. Chaque leçon est conçue pour être interactive, avec des
                                    chansons, des
                                    comptines et des illustrations colorées qui facilitent la mémorisation. Les
                                    activités visent à
                                    développer la confiance en lecture et sont adaptées aussi bien à un apprentissage en
                                    classe qu’individuel.
                                </h4>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-3 mt-4">
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 1
                                    </Link>
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 2
                                    </Link>
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 3
                                    </Link>
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 4
                                    </Link>
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 5
                                    </Link>
                                </div>

                                <div className="pop_button mt-3">
                                    <button type='button'
                                            className="text-[14px] text-primary cursor-pointer hover:underline">
                                        Voir tous les ISBNs
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="le-section">
                <div className="container">
                    <div
                        className="content z-20 inset-0 bg-gradient-to-r from-[#E9F0FC] to-[#bcdbff24] text-white p-10 rounded-xl">
                        <div className="grid grid-cols-1">
                            <div className="col mt-2 md:mt-0 flex flex-col justify-center rounded-xl">
                                <h2 className="text-[24px] font-semibold text-black">
                                    Le cahier d’activités
                                </h2>

                                <h4 className="text-[16px] text-prgcolor mt-1">
                                    La pratique mène au progrès
                                    <br/>
                                    <br/>
                                    Le cahier d’activités propose des exercices complémentaires au livre de l’élève,
                                    permettant
                                    aux enfants de s’exercer à tracer les lettres, à fusionner les sons et à renforcer
                                    leur
                                    orthographe. Il favorise également le développement de la motricité fine et la
                                    reconnaissance des sons. C’est un outil idéal pour les devoirs, la révision ou la
                                    consolidation en classe.
                                </h4>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-3 mt-4">
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 1
                                    </Link>
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 2
                                    </Link>
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 3
                                    </Link>
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 4
                                    </Link>
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 5
                                    </Link>
                                </div>

                                <div className="pop_button mt-3">
                                    <button type='button'
                                            className="text-[14px] text-primary cursor-pointer hover:underline">
                                        Voir tous les ISBNs
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="le-section">
                <div className="container">
                    <div className="relative future-section overflow-hidden rounded-xl p-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                            <div data-aos="zoom-in" className="col md:col-span-3">
                                <Image src={bookImg} className="w-full h-full"
                                       alt="bookImg"/>
                            </div>

                            <div className="col md:col-span-9 mt-2 md:mt-0 flex flex-col justify-center rounded-xl">
                                <h2 className="text-[24px] font-semibold text-black">
                                    Le livre du professeur
                                </h2>

                                <h4 className="text-[16px] text-prgcolor mt-1">
                                    Votre compagnon d’enseignement complet
                                    <br/>
                                    <br/>
                                    Le livre du professeur fournit aux enseignants un accompagnement structuré, avec des
                                    plans de leçons clairs, des conseils pratiques et des suggestions d’activités. Il
                                    inclut
                                    également les corrigés des exercices et des astuces pour la gestion de classe. C’est
                                    une
                                    ressource précieuse, que l’on soit enseignant débutant ou expérimenté.
                                </h4>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-3 mt-4">
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 1
                                    </Link>
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 2
                                    </Link>
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 3
                                    </Link>
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 4
                                    </Link>
                                    <Link href='#'
                                          className="bg-white border border-bordercolor hover:bg-primary hover:text-white text-prgcolor px-4 py-1 rounded-full text-[12px] transition">
                                        Niveau 5
                                    </Link>
                                </div>

                                <div className="pop_button mt-3">
                                    <button type='button'
                                            className="text-[14px] text-primary cursor-pointer hover:underline">
                                        Voir tous les ISBNs
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Le;