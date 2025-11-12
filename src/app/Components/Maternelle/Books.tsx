"use client";
import React, {useEffect, useRef, useState} from 'react';
import {Label} from "flowbite-react";
import {
    LuArrowDownWideNarrow,
    LuArrowLeftToLine,
    LuArrowRightToLine,
    LuTrash2
} from "react-icons/lu";
import {RxCross1} from "react-icons/rx";
import Image from "next/image";
import bookImgone from "../../../../public/assets/images/book1.jpg";
import bookImgtwo from "../../../../public/assets/images/book2.jpg";
import bookImgthree from "../../../../public/assets/images/book3.jpg";
import bookImgfour from "../../../../public/assets/images/book4.jpg";
import bookImgfive from "../../../../public/assets/images/book5.jpg";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {Checkbox} from 'antd'

function Books() {
    // Select Left side (One)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [selected, setSelected] = useState<string[]>([]);
    const toggleOption = (id: string) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Select Right side (Last)
    const [selectedTrier, setSelectedTrier] = useState<string[]>([]);
    const toggleOptionTrier = (id: string) => {
        setSelectedTrier((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Tag remove
    const [tagTitleOne, setTagTitleOne] = useState(true);
    const [tagTitleTwo, setTagTitleTwo] = useState(true);

    // Select Two
    const [selectedTwo, setSelectedTwo] = useState<string[]>([]);
    const toggleOptionTwo = (id: string) => {
        setSelectedTwo((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Select Three
    const [selectedThree, setSelectedThree] = useState<string[]>([]);
    const toggleOptionThree = (id: string) => {
        setSelectedThree((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Select Four
    const [selectedFour, setSelectedFour] = useState<string[]>([]);
    const toggleOptionFour = (id: string) => {
        setSelectedFour((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Select Five
    const [selectedFive, setSelectedFive] = useState<string[]>([]);
    const toggleOptionFive = (id: string) => {
        setSelectedFive((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Select Six
    const [selectedSix, setSelectedSix] = useState<string[]>([]);
    const toggleOptionSix = (id: string) => {
        setSelectedSix((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Dropdown close clicked outside (1)
    const selectionRef = useRef<HTMLDivElement>(null);
    const classeRef = useRef<HTMLDivElement>(null);
    const matiereRef = useRef<HTMLDivElement>(null);
    const collectionRef = useRef<HTMLDivElement>(null);
    const typeRef = useRef<HTMLDivElement>(null);
    const formatRef = useRef<HTMLDivElement>(null);
    const trierparRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            const isInsideAnyDropdown =
                (selectionRef.current && selectionRef.current.contains(target)) ||
                (classeRef.current && classeRef.current.contains(target)) ||
                (matiereRef.current && matiereRef.current.contains(target)) ||
                (collectionRef.current && collectionRef.current.contains(target)) ||
                (typeRef.current && typeRef.current.contains(target)) ||
                (formatRef.current && formatRef.current.contains(target)) ||
                (trierparRef.current && trierparRef.current.contains(target));

            if (!isInsideAnyDropdown) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <section id="books-section">
                <div className="container pt-16">
                    {/* Flex One*/}
                    <div className="block lg:flex space-y-4 lg:space-y-0 gap-1 items-center justify-between">
                        <div className="one w-full">
                            <div ref={selectionRef} className="relative w-full m">
                                {/* Button */}
                                <button
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === 'Sélection' ? null : 'Sélection')
                                    }
                                    className={`w-full text-[14px] bg-gray-100 border border-gray-300 py-1 px-4 rounded flex justify-start items-center
                                        ${selected.length > 0 ? 'font-bold text-primary' : ''}
                                        ${openDropdown === 'Sélection' ? 'font-bold text-prgcolor' : ''}
                                      `}
                                >
                                    Sélection
                                    <span className="flex items-center justify-end gap-1 w-full">
                                        {selected.length > 0 && (
                                            <span
                                                className="ml-2 h-[20px] text-prgcolor font-normal text-[14px] w-[20px] rounded-full bg-white flex items-center justify-center">
                                            {selected.length}
                                          </span>
                                        )}
                                        <svg
                                            className={`w-4 h-4 ml-2 transition-transform ${
                                                openDropdown === 'Sélection' ? 'rotate-180' : ''
                                            }`}
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
                                {openDropdown === 'Sélection' && (
                                    <div
                                        id="checkbox"
                                        className="absolute mt-1 w-full lg:w-[302px] bg-white border border-gray-300 rounded shadow z-10">
                                        <Label htmlFor="cat1"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="cat1"
                                                checked={selected.includes("Meilleures ventes")}
                                                onChange={() => toggleOption("Meilleures ventes")}
                                                className="focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Meilleures ventes
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4>
                                        </Label>

                                        <Label htmlFor="cat2"
                                               className="flex items-center text-prgcolor font-normal px-4 py-2 hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="cat2"
                                                checked={selected.includes("À paraître")}
                                                onChange={() => toggleOption("À paraître")}
                                                className="focus:outline-none focus:ring-0 focus:border-0 focus:ring-offset-0"
                                            />
                                            À paraître
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>

                                        <Label htmlFor="cat3"
                                               className="flex items-center text-prgcolor font-normal px-4 py-2 hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="cat3"
                                                checked={selected.includes("Nouveautés")}
                                                onChange={() => toggleOption("Nouveautés")}
                                                className="mr-2 focus:outline-none focus:ring-0 focus:border-0 focus:ring-offset-0"
                                            />
                                            Nouveautés
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>

                                        <Label htmlFor="cat4"
                                               className="flex items-center text-prgcolor font-normal px-4 py-2 hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="cat4"
                                                checked={selected.includes("Ressources téléchargeables")}
                                                onChange={() => toggleOption("Ressources téléchargeables")}
                                                className="mr-2 focus:outline-none focus:ring-0 focus:border-0 focus:ring-offset-0"
                                            />
                                            Ressources téléchargeables
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="two w-full">
                            <div ref={classeRef} className="relative w-full m">
                                {/* Button */}
                                <button
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === 'Classe' ? null : 'Classe')
                                    }
                                    className={`w-full text-[14px] bg-gray-100 border border-gray-300 py-1 px-4 rounded flex justify-start items-center
                                        ${selectedTwo.length > 0 ? 'font-bold text-primary' : ''}
                                       ${openDropdown === 'Classe' ? 'font-bold text-prgcolor' : ''}
                                      `}
                                >
                                    Classe
                                    <span className="flex items-center justify-end gap-1 w-full">
                                        {selectedTwo.length > 0 && (
                                            <span
                                                className="h-[20px] text-prgcolor font-normal text-[14px] w-[20px] rounded-full bg-white flex items-center justify-center">
                                                {selectedTwo.length}
                                            </span>
                                        )}
                                        <svg
                                            className={`w-4 h-4 ml-2 transition-transform ${
                                                openDropdown === 'Classe' ? 'rotate-180' : ''
                                            }`}
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
                                {openDropdown === 'Classe' && (
                                    <div id="checkbox"
                                         className="absolute mt-1 w-full lg:w-[302px] bg-white border border-gray-300 rounded shadow z-10">
                                        <Label htmlFor="catt1"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="catt1"
                                                checked={selectedTwo.includes("Petite section")}
                                                onChange={() => toggleOptionTwo("Petite section")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Petite section
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>
                                        <Label htmlFor="catt2"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="catt2"
                                                checked={selectedTwo.includes("Moyenne section")}
                                                onChange={() => toggleOptionTwo("Moyenne section")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Moyenne section
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>
                                        <Label htmlFor="catt3"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="catt3"
                                                checked={selectedTwo.includes("Grande section")}
                                                onChange={() => toggleOptionTwo("Grande section")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Grande section
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="three w-full">
                            <div ref={matiereRef} className="relative w-full m">
                                {/* Button */}
                                <button
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === 'Matière' ? null : 'Matière')
                                    }
                                    className={`w-full text-[14px] bg-gray-100 border border-gray-300 py-1 px-4 rounded flex justify-start items-center
                                        ${selectedThree.length > 0 ? 'font-bold text-primary' : ''}
                                     ${openDropdown === 'Matière' ? 'font-bold text-prgcolor' : ''}
                                      `}
                                >
                                    Matière
                                    <span className="flex items-center justify-end gap-1 w-full">
                                        {selectedThree.length > 0 && (
                                            <span
                                                className="h-[20px] text-prgcolor font-normal text-[14px] w-[20px] rounded-full bg-white flex items-center justify-center">
                                                {selectedThree.length}
                                            </span>
                                        )}
                                        <svg
                                            className={`w-4 h-4 ml-2 transition-transform ${openDropdown === 'Matière' ? "rotate-180" : ""}`}
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
                                {openDropdown === 'Matière' && (
                                    <div id="checkbox"
                                         className="absolute mt-1 w-full lg:w-[302px] bg-white border border-gray-300 rounded shadow z-10">
                                        <Label htmlFor="cattt1"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="cattt1"
                                                checked={selectedThree.includes("Écriture")}
                                                onChange={() => toggleOptionThree("Écriture")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Écriture
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>
                                        <Label htmlFor="cattt2"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="cattt2"
                                                checked={selectedThree.includes("Lecture")}
                                                onChange={() => toggleOptionThree("Lecture")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Lecture
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>
                                        <Label htmlFor="cattt3"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="cattt3"
                                                checked={selectedThree.includes("Arts")}
                                                onChange={() => toggleOptionThree("Arts")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Arts
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>
                                        <Label htmlFor="cattt4"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="cattt4"
                                                checked={selectedThree.includes("Explorer le monde")}
                                                onChange={() => toggleOptionThree("Explorer le monde")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Explorer le monde
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>
                                        <Label htmlFor="cattt5"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="cattt5"
                                                checked={selectedThree.includes("Logique")}
                                                onChange={() => toggleOptionThree("Logique")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Logique
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>
                                        <Label htmlFor="cattt6"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="cattt6"
                                                checked={selectedThree.includes("Résolution de problèmes")}
                                                onChange={() => toggleOptionThree("Résolution de problèmes")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Résolution de problèmes
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>
                                        <Label htmlFor="cattt7"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="cattt7"
                                                checked={selectedThree.includes("Mathématiques")}
                                                onChange={() => toggleOptionThree("Mathématiques")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Mathématiques
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>
                                        <Label htmlFor="cattt8"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="cattt8"
                                                checked={selectedThree.includes("Vivre ensemble")}
                                                onChange={() => toggleOptionThree("Vivre ensemble")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Vivre ensemble
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>
                                        <Label htmlFor="cattt9"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="cattt9"
                                                checked={selectedThree.includes("Préparation au CP")}
                                                onChange={() => toggleOptionThree("Préparation au CP")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Préparation au CP
                                            <h4 className="text-[14px] text-prgcolor ml-auto">
                                                5
                                            </h4></Label>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="four w-full">
                            <div ref={collectionRef} className="relative w-full m">
                                <button
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === 'Collection' ? null : 'Collection')
                                    }
                                    className={`w-full text-[14px] bg-gray-100 border border-gray-300 py-1 px-4 rounded flex justify-start items-center
                                    ${selectedFour.length > 0 ? 'font-bold text-primary' : ''}
                                      ${openDropdown === 'Collection' ? 'font-bold text-prgcolor' : ''}
                                  `}
                                >
                                    Collection
                                    <span className="flex items-center justify-end gap-1 w-full">
                                    {selectedFour.length > 0 && (
                                        <span
                                            className="h-[20px] ml-3 text-prgcolor font-normal text-[14px] w-[20px] rounded-full bg-white flex items-center justify-center">
                                            {selectedFour.length}
                                        </span>
                                    )}
                                        <svg
                                            className={`w-4 h-4 ml-2 transition-transform ${
                                                openDropdown === 'Collection' ? 'rotate-180' : ''
                                            }`}
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

                                {openDropdown === 'Collection' && (
                                    <div id="checkbox"
                                         className="absolute mt-1 w-full md:w-[302px] bg-white border border-gray-300 rounded shadow z-10">
                                        <Label htmlFor="catf1"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="catf1"
                                                checked={selectedFour.includes("One")}
                                                onChange={() => toggleOptionFour("One")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            One
                                            <h4 className="text-[14px] text-prgcolor ml-auto">5</h4>
                                        </Label>
                                        <Label htmlFor="catf2"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="catf2"
                                                checked={selectedFour.includes("Two")}
                                                onChange={() => toggleOptionFour("Two")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Two
                                            <h4 className="text-[14px] text-prgcolor ml-auto">5</h4>
                                        </Label>
                                        <Label htmlFor="catf3"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1">
                                            <Checkbox
                                                id="catf3"
                                                checked={selectedFour.includes("Three")}
                                                onChange={() => toggleOptionFour("Three")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Three
                                            <h4 className="text-[14px] text-prgcolor ml-auto">5</h4>
                                        </Label>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="five w-full">
                            <div ref={typeRef} className="relative w-full m">
                                <button
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === 'Type' ? null : 'Type')
                                    }
                                    className={`w-full text-[14px] bg-gray-100 border border-gray-300 py-1 px-4 rounded flex justify-start items-center
                                    ${selectedFive.length > 0 ? 'font-bold text-primary' : ''}
                                    ${openDropdown === 'Type' ? 'font-bold text-prgcolor' : ''}
                                  `}
                                >
                                    Type
                                    <span className="flex items-center justify-end gap-1 w-full">
                                        {selectedFive.length > 0 && (
                                            <span
                                                className="h-[20px] text-prgcolor font-normal text-[14px] w-[20px] rounded-full bg-white flex items-center justify-center">
                                                {selectedFive.length}
                                            </span>
                                        )}
                                        <svg
                                            className={`w-4 h-4 ml-2 transition-transform ${
                                                openDropdown === 'Type' ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                                <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round"
                                                      strokeLinejoin="round"/>
                                            </svg>
                                     </span>
                                </button>

                                {openDropdown === 'Type' && (
                                    <div id="checkbox"
                                         className="w-full lg:w-[302px] absolute mt-1 bg-white border border-gray-300 rounded shadow z-10">
                                        {[
                                            "Livre de l’élève",
                                            "Cahier d’activités",
                                            "Livre du professeur",
                                            "Guide pédagogique",
                                            "Carte",
                                            "Spécimen",
                                            "Fiche",
                                        ].map((label, idx) => (
                                            <Label
                                                key={idx}
                                                htmlFor={`catff${idx + 1}`}
                                                className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1"
                                            >
                                                <Checkbox
                                                    id={`catff${idx + 1}`}
                                                    checked={selectedFive.includes(label)}
                                                    onChange={() => toggleOptionFive(label)}
                                                    className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                                />
                                                {label}
                                                <h4 className="text-[14px] text-prgcolor ml-auto">5</h4>
                                            </Label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="six w-full">
                            <div ref={formatRef} className="relative w-full m">
                                <button
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === 'Format' ? null : 'Format')
                                    }
                                    className={`w-full text-[14px] bg-gray-100 border border-gray-300 py-1 px-4 rounded flex justify-start items-center
                                    ${selectedSix.length > 0 ? 'font-bold text-primary' : ''}
                                   ${openDropdown === 'Format' ? 'font-bold text-prgcolor' : ''}
                                  `}
                                >
                                    Format
                                    <span className="flex items-center justify-end gap-1 w-full">
                                        {selectedSix.length > 0 && (
                                            <span
                                                className="h-[20px] text-prgcolor font-normal text-[14px] w-[20px] rounded-full bg-white flex items-center justify-center">
                                                {selectedSix.length}
                                            </span>
                                        )}
                                        <svg
                                            className={`w-4 h-4 ml-2 transition-transform ${
                                                openDropdown === 'Format' ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </button>

                                {openDropdown === 'Format' && (
                                    <div id="checkbox"
                                         className="absolute mt-1 w-full lg:w-[302px] bg-white border border-gray-300 rounded shadow z-10">
                                        {["Papier", "Numérique"].map((format, i) => (
                                            <Label
                                                key={i}
                                                htmlFor={`cats${i + 1}`}
                                                className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1"
                                            >
                                                <Checkbox
                                                    id={`cats${i + 1}`}
                                                    checked={selectedSix.includes(format)}
                                                    onChange={() => toggleOptionSix(format)}
                                                    className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                                />
                                                {format}
                                                <h4 className="text-[14px] text-prgcolor ml-auto">5</h4>
                                            </Label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="right_side w-full">
                            <div ref={trierparRef} className="relative w-full m">
                                <button
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === 'Trierpar' ? null : 'Trierpar')
                                    }
                                    className={`w-full text-[14px] bg-white border border-gray-300 py-1 px-4 rounded flex justify-between items-center
                                      ${openDropdown === 'Trierpar' ? 'font-bold text-prgcolor' : ''}
                                    `}
                                >
                                    <LuArrowDownWideNarrow size={15} className="text-primary"/>
                                    <span
                                        className={`flex-1 text-start lg:text-center transition-all duration-150 ${
                                            selectedTrier.length > 0 ? 'font-bold text-primary' : ''
                                        }`}
                                    >
                                    Trier par
                                </span>
                                    <span className="ml-4 flex items-center justify-end">
                                    <svg
                                        className={`w-4 h-4 ml-2 transition-transform ${
                                            openDropdown === 'Trierpar' ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </svg>
                                </span>
                                </button>

                                {openDropdown === 'Trierpar' && (
                                    <div id="checkbox"
                                         className="absolute mt-1 w-full bg-white border border-gray-300 rounded shadow z-10">
                                        {[
                                            {id: 'cata1', label: 'Date de parution', value: 'A'},
                                            {id: 'cata2', label: 'Titre A-Z', value: 'B'},
                                            {id: 'cata3', label: 'Titre Z-A', value: 'C'},
                                        ].map(({id, label, value}) => (
                                            <Label
                                                key={id}
                                                htmlFor={id}
                                                className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer gap-1"
                                            >
                                                <Checkbox
                                                    id={id}
                                                    checked={selectedTrier.includes(value)}
                                                    onChange={() => toggleOptionTrier(value)}
                                                    className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                                />
                                                {label}
                                            </Label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/*Flex Two*/}
                    <div className="block lg:flex space-y-4 lg:space-y-0 items-center justify-between mt-4">
                        <div className={`left_side flex items-center ${tagTitleOne ? 'gap-4' : 'gap-0'}`}>
                            <div className="tag flex items-center gap-2">
                                {tagTitleOne && (
                                    <>
                                        <div onClick={() => setTagTitleOne(false)}
                                             className="icon flex items-center justify-center bg-gray-600 p-[2px] cursor-pointer rounded-full">
                                            <RxCross1 size={10} className="text-white"/>
                                        </div>
                                        <h4 className="text-[14px] text-prgcolor">Maternelle</h4>
                                    </>
                                )}
                            </div>

                            <div className="tag flex items-center gap-1">
                                {tagTitleTwo && (
                                    <>
                                        <div onClick={() => setTagTitleTwo(false)}
                                             className="icon flex items-center justify-center bg-gray-600 p-[2px] cursor-pointer rounded-full">
                                            <RxCross1 size={10} className="text-white"/>
                                        </div>
                                        <h4 className="text-[14px] text-prgcolor">Primaire</h4>
                                    </>
                                )}
                            </div>
                        </div>
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

                    {/*Books*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-14">
                        <div className="col hover:-translate-y-2 duration-200">
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
                        <div className="col hover:-translate-y-2 duration-200">
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
                        <div className="col hover:-translate-y-2 duration-200">
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
                        <div className="col hover:-translate-y-2 duration-200">
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
                        <div className="col hover:-translate-y-2 duration-200">
                            <Image src={bookImgfive} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                   alt="bookImgfive"/>
                            <h4 className="text-prgcolor text-[14px] hover:underline mt-3 cursor-pointer">
                                FDR and the Jews
                            </h4>
                            <h4 className="text-graycolor text-[12px]">
                                Richard Breitman, Allan J.<br/>
                                Lichtman
                            </h4>
                        </div>

                        <div className="col hover:-translate-y-2 duration-200 mt-0 lg:mt-8">
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
                        <div className="col hover:-translate-y-2 duration-200 mt-0 lg:mt-8">
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
                        <div className="col hover:-translate-y-2 duration-200 mt-0 lg:mt-8">
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
                        <div className="col hover:-translate-y-2 duration-200 mt-0 lg:mt-8">
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
                        <div className="col hover:-translate-y-2 duration-200 mt-0 lg:mt-8">
                            <Image src={bookImgfive} className="w-full h-[600px] md:h-[300px] cursor-pointer"
                                   alt="bookImgfive"/>
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

export default Books;