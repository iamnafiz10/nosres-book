'use client';
import {RxPlus} from "react-icons/rx";
import {Tooltip} from 'flowbite-react';
import React from "react";
import {
    LuArrowLeftToLine, LuArrowRightToLine,
    LuBrain,
    LuBriefcaseBusiness, LuChartLine, LuFlaskConical,
    LuGraduationCap, LuHandshake, LuLanguages, LuMailbox,
    LuMapPin, LuMessageSquareText, LuMonitor,
    LuPencilLine, LuPresentation,
    LuSquareLibrary,
    LuTarget, LuTrophy
} from "react-icons/lu";
import Image from "next/image";
import bookImgone from "../../../../public/assets/images/book1.jpg";
import bookImgtwo from "../../../../public/assets/images/book2.jpg";
import bookImgthree from "../../../../public/assets/images/book3.jpg";
import bookImgfour from "../../../../public/assets/images/book4.jpg";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

function Biographie() {
    return (
        <>
            <section id="biographie-section">
                <div className="container pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="col">
                            <h4 className="text-prgcolor text-[18px] font-semibold">
                                Biographie
                            </h4>
                            <h4 className="mt-4 text-prgcolor text-[16px]">
                                Jane Doe is an award-winning novelist known for her evocative storytelling and lyrical
                                prose. With over a decade of experience in the literary world, her works have
                                captivated readers around the globe.
                                <br/> <br/>
                                She began her writing career in her hometown of Portland, Oregon, and now travels
                                widely to speak about the art of writing and creative resilience.
                                <br/> <br/>
                                Jane Doe is an award-winning novelist known for her evocative storytelling and lyrical
                                prose. With over a decade of experience in the literary world, her works have
                                captivated readers around the globe.
                                <br/> <br/>
                                She began her writing career in her hometown of Portland, Oregon, and now travels
                                widely to speak about the art of writing and creative resilience.
                                <br/> <br/>
                                She began her writing career in her hometown of Portland, Oregon, and now travels
                                widely to speak about the art of writing and creative resilience.
                            </h4>
                        </div>
                        <div className="col">
                            <div className="box bg-white border border-bordercolor rounded py-2 px-6">
                                <details open className="group mt-4 pb-5 border-b border-bordercolor">
                                    <summary
                                        className="relative font-semibold flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        Parcours général
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                        <div id="checkbox" className="mt-3 space-y-3">
                                            <div className="flex items-center gap-1">
                                                <Tooltip content="Basé à" placement="top" style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuMapPin size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>New York, U.S.A.</p>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <Tooltip content="Diplôme le plus élevé" placement="top"
                                                         style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuGraduationCap size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>PhD in Education</p>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <Tooltip content="Spécialisation" placement="top" style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuBrain size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>Mathematics, French as Foreign
                                                    Language</p>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <Tooltip content="Expérience en enseignement" placement="top"
                                                         style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuBriefcaseBusiness size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>12 years in secondary education</p>
                                            </div>
                                        </div>
                                    </ul>
                                </details>

                                <details className="group mt-4 pb-5 border-b border-bordercolor">
                                    <summary
                                        className="relative font-semibold flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        Crédits de publication
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                        <div id="checkbox" className="mt-3 space-y-3">
                                            <div className="flex items-center gap-1">
                                                <Tooltip content="Nombre de manuels publiés" placement="top"
                                                         style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuSquareLibrary size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>10 manuels scolaires publiés</p>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <Tooltip content="Matières couvertes" placement="top"
                                                         style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuPencilLine size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>Sciences, Technologie, Ingénierie,
                                                    Mathématiques</p>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <Tooltip content="Niveaux ciblés" placement="top" style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuTarget size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>Fin de primaire, lycée</p>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <Tooltip content="Approche pédagogique" placement="top"
                                                         style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuPresentation size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>Pédagogie active & différenciation</p>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <Tooltip content="Langues de publication" placement="top"
                                                         style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuLanguages size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>Français, anglais, espagnol</p>
                                            </div>
                                        </div>
                                    </ul>
                                </details>

                                <details className="group mt-4 pb-5 border-b border-bordercolor">
                                    <summary
                                        className="relative font-semibold flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        Impact et reconnaissance
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                        <div id="checkbox" className="mt-3 space-y-3">
                                            <div className="flex items-center gap-1">
                                                <Tooltip content="Récompenses ou distinctions" placement="top"
                                                         style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuTrophy size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>Lauréat du Prix national de l’innovation
                                                    pédagogique (2022)</p>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <Tooltip content="Manuels utilisés dans" placement="top"
                                                         style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuChartLine size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>Manuels utilisés dans plus de 300
                                                    établissements dans 5 pays</p>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <Tooltip content="Contributions pédagogiques" placement="top"
                                                         style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuMessageSquareText size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>Participation à la réforme du
                                                    programme de sciences en 2021
                                                </p>
                                            </div>

                                            <div className="flex items-start gap-1">
                                                <Tooltip content="Projets pilotes" placement="top"
                                                         style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuFlaskConical size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>Expérimentations menées avec 12
                                                    établissements partenaires et 50
                                                    enseignants</p>
                                            </div>


                                        </div>
                                    </ul>
                                </details>

                                <details className="group mt-4 pb-5">
                                    <summary
                                        className="relative font-semibold flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        Outils et collaboration
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                        <div id="checkbox" className="mt-3 space-y-3">
                                            <div className="flex items-center gap-1">
                                                <Tooltip content="Plateformes utilisées" placement="top"
                                                         style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuMonitor size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>Canva, InDesign, Overleaf</p>
                                            </div>

                                            <div className="flex items-start gap-1">
                                                <Tooltip content="Collaborations" placement="top"
                                                         style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuHandshake size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>Travaille en équipe avec enseignants,
                                                    illustrateurs, maquettistes et relecteurs</p>
                                            </div>

                                            <div className="flex items-start gap-1">
                                                <Tooltip content="Ouverture professionnelle" placement="top"
                                                         style="light"
                                                         className="tooltip_design">
                                                    <div className="icon cursor-pointer">
                                                        <LuMailbox size={16} className="text-primary"/>
                                                    </div>
                                                </Tooltip>
                                                <p>Disponible pour co-écriture, missions
                                                    de formation ou conseil pédagogique
                                                </p>
                                            </div>
                                        </div>
                                    </ul>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/*Books*/}
                    <h4 className="text-prgcolor text-[18px] font-semibold mt-14">
                        Bibliographie
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
                        <div className="col">
                            <div className="relative">
                                <Image src={bookImgone} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                       alt="bookImgone"/>
                                <h4 className="absolute -top-[9px] left-1/2 transform -translate-x-1/2 text-[12px] text-white bg-primary rounded text-center w-[100px]">
                                    À PARAÎTRE
                                </h4>
                            </div>
                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                        <div className="col">
                            <div className="relative">
                                <Image src={bookImgtwo} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                       alt="bookImgtwo"/>
                                <h4 className="absolute -top-[9px] left-1/2 transform -translate-x-1/2 text-[12px] text-white bg-primary rounded text-center w-[100px]">
                                    NOUVEAUTÉ
                                </h4>
                            </div>

                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                        <div className="col">
                            <Image src={bookImgthree} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                   alt="bookImgthree"/>
                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                        <div className="col">
                            <Image src={bookImgfour} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                   alt="colorBookImg"/>
                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                        <div className="col">
                            <Image src={bookImgfour} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                   alt="colorBookImg"/>
                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>
                    </div>

                    {/*Pagination*/}
                    <div className="mt-24 lg:mt-10 flex justify-center items-center">
                        <div
                            className="bg-white w-[350px] flex items-center justify-center border border-bordercolor rounded text-[14px] text-prgcolor">
                            {/* Left Arrows */}
                            <button type='button' className="mx-2 text-graycolor">
                                <LuArrowLeftToLine size={16}/>
                            </button>
                            <button type='button' className="mx-2 text-graycolor">
                                <MdKeyboardArrowLeft size={22}/>
                            </button>

                            {/* Page Numbers */}
                            {[1, 2, 3, 4].map((num) => (
                                <React.Fragment key={num}>
                                    <button
                                        type="button"
                                        className={`px-4 py-2 ${
                                            num === 1
                                                ? 'border-b-3 text-prgcolor border-primary'
                                                : 'text-graycolor cursor-pointer'
                                        }`}
                                    >
                                        {num}
                                    </button>
                                    {num === 4 && <span className="text-graycolor -ml-[10px] font-semibold">...</span>}
                                </React.Fragment>
                            ))}

                            {/* Right Arrows */}
                            <button type='button' className="mx-2 py-1 hover:text-primary text-prgcolor cursor-pointer">
                                <MdKeyboardArrowRight size={22}/>
                            </button>
                            <button type='button' className="mx-2 py-1 hover:text-primary text-prgcolor cursor-pointer">
                                <LuArrowRightToLine size={16}/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Biographie;