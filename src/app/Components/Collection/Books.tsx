"use client";
import React, {useState} from 'react';
import {Checkbox, Label} from "flowbite-react";

function Books() {
    // Select Left side
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);
    const toggleOption = (id: string) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };
    return (
        <>
            <section id="books-section">
                <div className="container pt-16">
                    <div className="flex items-center justify-between">
                        <div className="left_side">
                            <div className="relative w-[170px]">
                                {/* Button */}
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="w-full text-[14px] bg-gray-100 border border-gray-300 text-gray-700 py-1 px-4 rounded flex justify-start items-center"
                                >
                                    Niveau
                                    <span className="flex items-center justify-end gap-1 w-full">
                                        <span
                                            className="h-[23px] text-[14px] w-[23px] rounded-full bg-white flex items-center justify-center">
                                          {selected.length}
                                        </span>
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
                                               className="flex items-center px-4 py-2 text-prgcolor hover:bg-gray-100 cursor-pointer">
                                            <Checkbox
                                                id="cat1"
                                                checked={selected.includes("Maternelle")}
                                                onChange={() => toggleOption("Maternelle")}
                                                className="mr-2 focus:outline-none focus:ring-0 text-[14px] focus:border-0 focus:ring-offset-0"
                                            />
                                            Maternelle
                                        </Label>

                                        <Label htmlFor="cat2"
                                               className="flex items-center text-prgcolor px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            <Checkbox
                                                id="cat2"
                                                checked={selected.includes("Primaire")}
                                                onChange={() => toggleOption("Primaire")}
                                                className="mr-2 focus:outline-none focus:ring-0 focus:border-0 focus:ring-offset-0"
                                            />
                                            Primaire
                                        </Label>

                                        <Label htmlFor="cat3"
                                               className="flex items-center text-prgcolor px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            <Checkbox
                                                id="cat3"
                                                checked={selected.includes("Secondaire")}
                                                onChange={() => toggleOption("Secondaire")}
                                                className="mr-2 focus:outline-none focus:ring-0 focus:border-0 focus:ring-offset-0"
                                            />
                                            Secondaire
                                        </Label>

                                        <Label htmlFor="cat4"
                                               className="flex items-center text-prgcolor px-4 py-2 hover:bg-gray-100 cursor-pointer">
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
                        <div className="right_side"></div>
                    </div>
                    <div className="grid">
                        <div className="col">

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Books;