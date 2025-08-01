"use client";
import React, {useState} from 'react';
import {Checkbox, Label} from "flowbite-react";
import {LuArrowDownWideNarrow, LuArrowLeftToLine, LuArrowRightToLine, LuTrash2} from "react-icons/lu";
import Image from "next/image";
import colorBookImg from "../../../../public/assets/images/color-book.png";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

function Blog() {
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
    return (
        <>
            <section id="blog-section">
                <div className="container pt-16">
                    {/* Flex One*/}
                    <div className="block lg:flex space-y-4 lg:space-y-0 items-center justify-between">
                        <div className="left_side">
                            <h4 className="text-[18px] text-prgcolor font-medium">
                                <span className="text-primary font-semibold">12 </span>
                                auteurs
                            </h4>
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

                    {/*Blog*/}
                    <div className="blog_wrap mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            <div data-aos="zoom-in" data-aos-duration="1000"
                                 className="hover:-translate-y-2 duration-1000 border border-bordercolor col cursor-pointer image-box bg-white rounded aos-init aos-animate">
                                <Image src={colorBookImg} className="rounded-t w-full" alt="colorBookImg"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-primary text-[16px]">John Doe</h3>
                                </div>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="1000"
                                 className="hover:-translate-y-2 duration-1000 border border-bordercolor col cursor-pointer image-box bg-white rounded aos-init aos-animate">
                                <Image src={colorBookImg} className="rounded-t w-full" alt="colorBookImg"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-primary text-[16px]">John Doe</h3>
                                </div>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="1000"
                                 className="hover:-translate-y-2 duration-1000 border border-bordercolor col cursor-pointer image-box bg-white rounded aos-init aos-animate">
                                <Image src={colorBookImg} className="rounded-t w-full" alt="colorBookImg"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-primary text-[16px]">John Doe</h3>
                                </div>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="1000"
                                 className="hover:-translate-y-2 duration-1000 border border-bordercolor col cursor-pointer image-box bg-white rounded aos-init aos-animate">
                                <Image src={colorBookImg} className="rounded-t w-full" alt="colorBookImg"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-primary text-[16px]">John Doe</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Pagination*/}
                    <div className="mt-10 flex justify-center items-center">
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

export default Blog;