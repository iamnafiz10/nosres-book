import React from 'react';
import {LuBook, LuCompass, LuNotebookPen} from "react-icons/lu";

const Prode = () => {
    return (
        <>
            <section className="pt-10 bg-white">
                <div className="container block md:flex items-start gap-14">
                    {/* Left Content */}
                    <div className="flex-1">
                        <h2 className="text-[18px] md:text-3xl font-semibold mb-3 text-gray-900">
                            À propos de Voyage méthode de lecture
                        </h2>

                        <p className="text-prgcolor text-[16px]">
                            Voyage méthode de lecture est une série progressive en 5 niveaux, conçue pour guider les
                            jeunes enfants dans leurs premiers pas en français. Basée sur une méthode phonétique et
                            syllabique, elle accompagne les jeunes lecteurs pas à pas à travers un univers ludique,
                            riche
                            en sons, en mots et en découvertes.
                            <br/>
                            <br/>
                            C’est outil flexible qui s’adapte à l’école comme à la maison, en apprentissage principal ou
                            en soutien.
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mt-4">
                            <span
                                className="bg-gray-100  border border-bordercolor text-prgcolor px-4 py-1 rounded-full text-[12px]">
                              Maternelle
                            </span>
                            <span
                                className="bg-gray-100  border border-bordercolor text-prgcolor px-4 py-1 rounded-full text-[12px]">
                              CP
                            </span>
                            <span
                                className="bg-gray-100  border border-bordercolor text-prgcolor px-4 py-1 rounded-full text-[12px]">
                              Papier
                            </span>
                            <span
                                className="bg-gray-100  border border-bordercolor text-prgcolor px-4 py-1 rounded-full text-[12px]">
                              5 niveaux
                            </span>
                            <span
                                className="bg-gray-100  border border-bordercolor text-prgcolor px-4 py-1 rounded-full text-[12px]">
                                Débutant
                            </span>
                        </div>
                    </div>

                    {/* Right Box */}
                    <aside className="bg-[#F4F4F4] rounded-xl py-4 pl-6 pr-12 mt-6 md:mt-0">
                        <h4 className="text-[18px] font-semibold mb-4 text-prgcolor">
                            Contenu du pack
                        </h4>

                        <ul className="space-y-2 text-prgcolor">
                            <li className="flex items-center gap-1">
                                <span className="text-primary">
                                    <LuBook size={14}/>
                                </span>
                                <span className="text-[14px]">Livre de l’élève</span>
                            </li>

                            <li className="flex items-center gap-1">
                                <span className="text-primary">
                                    <LuNotebookPen size={14}/>
                                </span>
                                <span className="text-[14px]">Cahier d’activités</span>
                            </li>

                            <li className="flex items-center gap-1">
                                <span className="text-primary">
                                    <LuCompass size={14}/>
                                </span>
                                <span className="text-[14px]">Livre du professeur</span>
                            </li>
                        </ul>
                    </aside>
                </div>
            </section>
        </>
    );
};

export default Prode;