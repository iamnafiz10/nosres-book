"use client";
import React, {useState} from 'react';
import {Checkbox, Label} from "flowbite-react";
import {
    LuArrowDownWideNarrow,
    LuArrowLeftToLine,
    LuArrowRightToLine,
    LuTrash2
} from "react-icons/lu";
import {RxCross1} from "react-icons/rx";
import Image from "next/image";
import colorBookImg from "../../../../public/assets/images/color-book.png";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

function Books() {
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

    // Tag remove
    const [tagTitleOne, setTagTitleOne] = useState(true);
    const [tagTitleTwo, setTagTitleTwo] = useState(true);

    return (
        <>
            <section id="books-section">
                <div className="container pt-16">
                    {/* Flex One*/}
                    <div className="block lg:flex space-y-4 lg:space-y-0 items-center justify-between">
                        <div className="left_side">
                            <div className="relative w-[170px]">
                                {/* Button */}
                                <button
                                    onClick={() => setOpen(!open)}
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
                                    onClick={() => setOpenTrier(!openTrier)}
                                    className={`w-full text-[14px] bg-white border border-gray-300 py-1 px-4 rounded flex justify-between items-center`}
                                >
                                    {/* Left Icon */}
                                    <LuArrowDownWideNarrow size={15} className="text-primary"/>

                                    {/* Text */}
                                    <span
                                        className={`flex-1 text-center transition-all duration-150 ${
                                            selectedTrier.length > 0 || openTrier ? 'font-bold text-primary' : ''
                                        }`}
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
                                         className="absolute mt-1 w-full bg-white border border-gray-300 rounded shadow z-10">
                                        <Label htmlFor="cat1"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer">
                                            <Checkbox
                                                id="cat1"
                                                checked={selectedTrier.includes("A")}
                                                onChange={() => toggleOptionTrier("A")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            A
                                        </Label>
                                        <Label htmlFor="cat2"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer">
                                            <Checkbox
                                                id="cat2"
                                                checked={selectedTrier.includes("B")}
                                                onChange={() => toggleOptionTrier("B")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            B
                                        </Label>
                                        <Label htmlFor="cat3"
                                               className="flex items-center px-4 py-2 font-normal text-prgcolor hover:bg-gray-100 cursor-pointer">
                                            <Checkbox
                                                id="cat3"
                                                checked={selectedTrier.includes("C")}
                                                onChange={() => toggleOptionTrier("C")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            C
                                        </Label>
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
                                <button type='button'
                                        className="mt-2 font-normal py-2 px-4 cursor-pointer flex text-[14px] items-center justify-start gap-2 border rounded text-primary bg-primary hover:bg-[#3A5F8A] text-white hover:text-white hover:border-primary">
                                    <div className="icon">
                                        <LuTrash2 size={15}/>
                                    </div>
                                    Effacer tous les filtres
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                        <div className="col">
                            <Image src={colorBookImg} className="rounded-xl w-full h-[180px]" alt="colorBookImg"/>
                        </div>
                    </div>

                    {/*Pagination*/}
                    <div className="mt-10 flex justify-center items-center">
                        <div
                            className="bg-white w-[450px] flex items-center justify-center border border-bordercolor rounded text-[14px] text-prgcolor">
                            {/* Left Arrows */}
                            <button type='button' className="mx-2 text-graycolor">
                                <LuArrowLeftToLine size={16}/>
                            </button>
                            <button type='button' className="mx-2 text-graycolor">
                                <MdKeyboardArrowLeft size={22}/>
                            </button>

                            {/* Page Numbers */}
                            {[1, 2, 3, 4,].map((num) => (
                                <button type='button'
                                        key={num}
                                        className={`px-4 py-2 ${
                                            num === 1
                                                ? 'border-b-3 text-prgcolor border-primary'
                                                : 'text-graycolor cursor-pointer'
                                        }`}
                                >
                                    {num}
                                </button>
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