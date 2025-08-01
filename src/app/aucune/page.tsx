"use client";
import React, {useState} from 'react';
import {MdOutlineExploreOff} from "react-icons/md";
import {Checkbox, Label} from "flowbite-react";
import {LuArrowDownWideNarrow, LuTrash2} from "react-icons/lu";

function Page() {
    // Select Left side
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);
    const toggleOption = (id: string) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Select Right side
    const [openTrier, setOpenTrier] = useState(false);
    const [selectedTrier, setSelectedTrier] = useState<string[]>([]);
    const toggleOptionTrier = (id: string) => {
        setSelectedTrier((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };
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

            <section id="books-section">
                <div className="container pt-16">
                    {/* Flex One*/}
                    <div className="block lg:flex space-y-4 lg:space-y-0 items-center justify-between">
                        <div className="left_side">
                            <div className="relative w-[170px]">
                                {/* Button */}
                                <button
                                    onClick={() => {
                                        setOpen(!open);
                                        setOpenTrier(false);
                                    }}
                                    className={`w-full text-[14px] bg-gray-100 border border-gray-300 py-1 px-4 rounded flex justify-start items-center
                                        ${selected.length > 0 ? 'font-bold text-primary' : ''}
                                        ${open ? 'font-bold text-prgcolor' : ''}
                                      `}
                                >
                                    Niveau
                                    <span className="flex items-center justify-end gap-1 w-full">
                                        {selected.length > 0 && (
                                            <span
                                                className="h-[20px] text-prgcolor font-normal text-[14px] w-[20px] rounded-full bg-white flex items-center justify-center">
                                                {selected.length}
                                            </span>
                                        )}
                                        <svg
                                            className={`w-4 h-4 ml-2 transition-transform ${open ? "rotate-180" : ""}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                        <path
                                            d="M19 9l-7 7-7-7"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                  </span>
                                </button>

                                {/* Dropdown */}
                                {open && (
                                    <div id="checkbox"
                                         className="absolute mt-1 w-full bg-white border border-gray-300 rounded shadow z-10">
                                        <Label htmlFor="cat1"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer">
                                            <Checkbox
                                                id="cat1"
                                                checked={selected.includes("Maternelle")}
                                                onChange={() => toggleOption("Maternelle")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Maternelle
                                        </Label>

                                        <Label htmlFor="cat2"
                                               className="flex items-center text-prgcolor font-normal px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            <Checkbox
                                                id="cat2"
                                                checked={selected.includes("Primaire")}
                                                onChange={() => toggleOption("Primaire")}
                                                className="mr-2 focus:outline-none focus:ring-0 focus:border-0 focus:ring-offset-0"
                                            />
                                            Primaire
                                        </Label>

                                        <Label htmlFor="cat3"
                                               className="flex items-center text-prgcolor font-normal px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            <Checkbox
                                                id="cat3"
                                                checked={selected.includes("Secondaire")}
                                                onChange={() => toggleOption("Secondaire")}
                                                className="mr-2 focus:outline-none focus:ring-0 focus:border-0 focus:ring-offset-0"
                                            />
                                            Secondaire
                                        </Label>

                                        <Label htmlFor="cat4"
                                               className="flex items-center text-prgcolor font-normal px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            <Checkbox
                                                id="cat4"
                                                checked={selected.includes("Supérieur")}
                                                onChange={() => toggleOption("Supérieur")}
                                                className="mr-2 focus:outline-none focus:ring-0 focus:border-0 focus:ring-offset-0"
                                            />
                                            Supérieur
                                        </Label>

                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="right_side">
                            <div className="relative w-[275px]">
                                {/* Button */}
                                <button
                                    onClick={() => {
                                        setOpenTrier(!openTrier);
                                        setOpen(false);
                                    }}
                                    className={`w-full text-[14px] bg-white border border-gray-300 py-1 px-4 rounded flex justify-between items-center`}
                                >
                                    {/* Left Icon */}
                                    <LuArrowDownWideNarrow size={15} className="text-primary"/>

                                    {/* Text */}
                                    <span
                                        className={`flex-1 text-center transition-all duration-150 ${
                                            selectedTrier.length > 0 || openTrier ? 'font-bold' : ''
                                        } ${selectedTrier.length > 0 ? 'text-primary' : ''}`}
                                    >
                                      Trier par ordre alphabétique
                                    </span>

                                    {/* Right Arrow */}
                                    <span className="ml-4 flex items-center justify-end">
                                        <svg
                                            className={`w-4 h-4 transition-transform ${openTrier ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                          <path
                                              d="M19 9l-7 7-7-7"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                          />
                                        </svg>
                                      </span>
                                </button>

                                {/* Dropdown */}
                                {openTrier && (
                                    <div id="checkbox"
                                         className="w-full absolute mt-1 bg-white border border-gray-300 rounded shadow z-10">
                                        <Label htmlFor="catff1"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer">
                                            <Checkbox
                                                id="catff1"
                                                checked={selectedTrier.includes("A")}
                                                onChange={() => toggleOptionTrier("A")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            A
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4>
                                        </Label>
                                        <Label htmlFor="catff2"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer">
                                            <Checkbox
                                                id="catff2"
                                                checked={selectedTrier.includes("B")}
                                                onChange={() => toggleOptionTrier("B")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            B
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4>
                                        </Label>
                                        <Label htmlFor="catff3"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer">
                                            <Checkbox
                                                id="catff3"
                                                checked={selectedTrier.includes("C")}
                                                onChange={() => toggleOptionTrier("C")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            C
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4>
                                        </Label>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*Flex Two*/}
                    <div className="block lg:flex space-y-4 lg:space-y-0 items-center justify-end mt-2">
                        <div className="right_side">
                            <div className="flex justify-start">
                                {selectedTrier.length > 0 &&
                                    <button
                                        onClick={() => setSelectedTrier([])}
                                        type='button'
                                        className="mt-2 font-normal py-2 px-4 cursor-pointer flex text-[14px] items-center justify-start gap-2 border rounded text-primary bg-primary hover:bg-[#3A5F8A] text-white hover:text-white hover:border-primary">
                                        <div className="icon">
                                            <LuTrash2 size={15}/>
                                        </div>
                                        Effacer tous les filtres
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="aucune-section">
                <div className="container">
                    <div className="mt-24 box flex flex-col items-center justify-center">
                        <MdOutlineExploreOff size={100} className="text-center text-gray-400"/>
                        <h4 className="text-[20px] mt-4 text-center text-prgcolor">
                            Aucune collection n’est actuellement disponible.
                        </h4>
                        <p className="mt-2">
                            N’hésitez pas à revenir ultérieurement.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;