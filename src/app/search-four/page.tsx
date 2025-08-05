"use client";
import React, {useEffect, useRef, useState} from 'react';
import {LuArrowDownWideNarrow, LuTrash2} from "react-icons/lu";
import {Checkbox, Label} from "flowbite-react";
import {MdOutlineSearchOff} from "react-icons/md";

function Page() {
    // Select Left side
    const [open, setOpen] = useState(false);
    // Select Right side
    const [openTrier, setOpenTrier] = useState(false);
    const [selectedTrier, setSelectedTrier] = useState<string[]>([]);
    const toggleOptionTrier = (id: string) => {
        setSelectedTrier((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // For Trier
    // Dropdown close outside
    const dropdownRef = useRef<HTMLDivElement>(null);
    const trierRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;

            if (dropdownRef.current && !dropdownRef.current.contains(target)) {
                setOpen(false);
            }

            if (trierRef.current && !trierRef.current.contains(target)) {
                setOpenTrier(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <section id="banner-section" className="bg-[#F4F4F4] pt-[5.7rem] pb-[3rem]">
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-prgcolor font-bold md:font-medium mb-4">
                        Nos auteurs
                    </h1>
                    <p>
                        Derrière chaque ouvrage Nosres Books se trouvent des femmes et des hommes animés par une passion
                        commune pour
                        l’enseignement et la pédagogie innovante : enseignants, chercheurs et professionnels venus de
                        divers horizons. Explorez leur univers
                        et découvrez leurs contributions aux ouvrages de notre catalogue.
                    </p>
                </div>
            </section>

            <section id="blog-section">
                <div className="container pt-16">
                    {/* Flex One*/}
                    <div className="block lg:flex space-y-4 lg:space-y-0 items-center justify-between">
                        <div className="left_side">
                            <h4 className="text-[18px] text-prgcolor font-medium">
                                <span className="text-primary font-semibold">0 </span>
                                auteurs
                            </h4>
                        </div>
                        <div className="right_side">
                            <div ref={trierRef} className="relative w-[275px]">
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
                    <div className="block lg:flex space-y-4 lg:space-y-0 items-center justify-end mt-4">
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
                    <div className="mt-4 box flex flex-col items-center justify-center">
                        <MdOutlineSearchOff size={100} className="text-center text-gray-400"/>
                        <h4 className="text-[20px] mt-4 text-center text-prgcolor">
                            Nous sommes désolés, aucun résultat n’a été trouvé.
                        </h4>
                        <p className="mt-2">
                            Veuillez essayer de nouveaux critères de recherche.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;