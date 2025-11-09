"use client";
import React, {useEffect, useRef, useState} from 'react';
import bookImg from "../../../../public/assets/images/color-book.png";
import Image from "next/image";
import Link from "next/link";
import {LuX} from "react-icons/lu";

const Le = () => {
    // Popup Tab One
    const [isOpenOne, setIsOpenOne] = useState(false);
    useEffect(() => {
        if (isOpenOne) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpenOne]);
    const [activeTab, setActiveTab] = useState<'a' | 'b' | 'c'>('a');
    const tabCScrollRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (activeTab === 'c' && tabCScrollRef.current) {
            // Use timeout to wait for tab content to render
            setTimeout(() => {
                tabCScrollRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }, 50);
        }
    }, [activeTab]);


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
                                    <span className="text-graycolor">Construire des bases solides en phonétique</span>
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
                                    <button onClick={() => setIsOpenOne(true)} type='button'
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
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                            <div className="col md:col-span-9 mt-2 md:mt-0 flex flex-col justify-center rounded-xl">
                                <h2 className="text-[24px] font-semibold text-black">
                                    Le cahier d’activités
                                </h2>

                                <h4 className="text-[16px] text-prgcolor mt-1">
                                    <span className="text-graycolor">La pratique mène au progrès</span>
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
                                    <button onClick={() => setIsOpenOne(true)} type='button'
                                            className="text-[14px] text-primary cursor-pointer hover:underline">
                                        Voir tous les ISBNs
                                    </button>
                                </div>
                            </div>

                            <div data-aos="zoom-in" className="col md:col-span-3">
                                <Image src={bookImg} className="w-full h-full"
                                       alt="bookImg"/>
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
                                    <span className="text-graycolor">Votre compagnon d’enseignement complet</span>
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
                                    <button onClick={() => setIsOpenOne(true)} type='button'
                                            className="text-[14px] text-primary cursor-pointer hover:underline">
                                        Voir tous les ISBNs
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal One */}
            <div className="modal_one">
                {isOpenOne && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                        style={{backgroundColor: 'rgba(0,0,0,0.8)'}}
                    >
                        <div className="flex justify-center relative">
                            {isOpenOne && (
                                <div
                                    className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-auto"
                                    style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
                                >
                                    <div ref={tabCScrollRef} className="flex justify-center">
                                        <div className="relative w-full md:max-w-4xl mt-20 mb-10 mx-6 md:mx-0">
                                            {/* Close Button outside top-right corner of popup */}
                                            <button
                                                onClick={() => setIsOpenOne(false)}
                                                className="absolute -top-[50px] md:-top-[40px] right-0 md:-right-[55px] cursor-pointer text-prgcolor hover:text-primary bg-white text-black p-1 rounded-full shadow-md hover:bg-gray-100 z-10"
                                            >
                                                <LuX size={32}/>
                                            </button>

                                            {/* White Popup Box */}
                                            <div
                                                className="bg-white rounded-[1rem] p-4 shadow-lg max-h-[80vh] overflow-y-auto relative"
                                                style={{
                                                    scrollbarWidth: "thin",
                                                    scrollbarColor: "#ccc transparent",
                                                }}
                                            >
                                                <div className="mt-8 mx-8">
                                                    {/* Table */}
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-left border-collapse">
                                                            <thead>
                                                            <tr className="bg-[#F4F4F4]">
                                                                <th className="p-3 border border-bordercolor text-[15px] font-medium">Title</th>
                                                                <th className="p-3 border border-bordercolor text-[15px] font-medium">Type</th>
                                                                <th className="p-3 border border-bordercolor text-[15px] font-medium">Usager</th>
                                                                <th className="p-3 border border-bordercolor text-[15px] font-medium">ISBN</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {[...Array(22)].map((_, i) => (
                                                                <tr key={i} className="hover:bg-gray-50 text-[14px]">
                                                                    <td className="p-3 border border-bordercolor text-primary hover:underline">
                                                                        <Link href="#">Voyage méthode syllabique
                                                                            1</Link>
                                                                    </td>
                                                                    <td className="p-3 border border-bordercolor">Imprimé</td>
                                                                    <td className="p-3 border border-bordercolor">Élève</td>
                                                                    <td className="p-3 border border-bordercolor">978-3-16-148410-0</td>
                                                                </tr>
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Le;