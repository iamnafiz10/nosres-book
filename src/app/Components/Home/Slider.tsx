"use client";
import React, {useState} from 'react';
import Image from "next/image";
import bookImgOne from '../../../../public/assets/images/book1.jpg';
import bookImgTwo from '../../../../public/assets/images/book2.jpg';
import bookImgThree from '../../../../public/assets/images/book3.jpg';
import bookImgFour from '../../../../public/assets/images/book4.jpg';
import bookImgFive from '../../../../public/assets/images/book5.jpg';
import {LuCirclePause, LuCirclePlay} from "react-icons/lu";

function Slider() {
    const [activeTab, setActiveTab] = useState<'tab1' | 'tab2' | 'tab3' | 'tab4' | 'tab5'>('tab1');

    // Slider push/play button
    const [isPlaying, setIsPlaying] = useState(true);
    return (
        <>
            <section id="slider-section">
                <div className="container pt-16">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Nouveautés et à découvrir
                        </h1>
                        <p>
                            Explorez nos dernières parutions et les ouvrages à ne pas manquer. Des contenus frais,
                            inspirants et conçus pour répondre aux besoins actuels des éducateurs, parents et élèves.
                        </p>
                    </div>
                    {/* Tabs */}
                    <div
                        className="tab_area mt-6 block space-y-4 md:space-y-0 space-x-4 md:space-x-0 md:flex items-center gap-4 border-b border-bordercolor pb-4">
                        <button
                            type="button"
                            onClick={() => setActiveTab('tab1')}
                            className={`py-1 px-8 text-[14px] rounded cursor-pointer ${
                                activeTab === 'tab1' ? 'bg-primary text-white' : 'bg-[#E6E8EA] text-black'
                            }`}
                        >
                            Tous
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('tab2')}
                            className={`py-1 px-8 text-[14px] rounded cursor-pointer ${
                                activeTab === 'tab2' ? 'bg-primary text-white' : 'bg-[#E6E8EA] text-black'
                            }`}
                        >
                            Maternelle
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('tab3')}
                            className={`py-1 px-8 text-[14px] rounded cursor-pointer ${
                                activeTab === 'tab3' ? 'bg-primary text-white' : 'bg-[#E6E8EA] text-black'
                            }`}
                        >
                            Primaire
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('tab4')}
                            className={`py-1 px-8 text-[14px] rounded cursor-pointer ${
                                activeTab === 'tab4' ? 'bg-primary text-white' : 'bg-[#E6E8EA] text-black'
                            }`}
                        >
                            Secondaire
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('tab5')}
                            className={`py-1 px-8 text-[14px] rounded cursor-pointer ${
                                activeTab === 'tab5' ? 'bg-primary text-white' : 'bg-[#E6E8EA] text-black'
                            }`}
                        >
                            Supérieur
                        </button>
                    </div>
                </div>

                {activeTab === 'tab1' && (
                    <div className="tab_one_content">
                        <div className="overflow-hidden w-full h-[450px]">
                            <div
                                className="flex w-max gap-x-5 animate-scroll-left-delay"
                                style={{animationPlayState: isPlaying ? 'running' : 'paused'}}
                            >

                                {[...Array(2)].flatMap((_, groupIndex) =>
                                    [...Array(5)].map((_, i) => (
                                        <div
                                            key={`${groupIndex}-${i}`}
                                            className="image_box pt-12 group w-[250px] h-[400px] cursor-pointer transition-all duration-300"
                                        >
                                            <div
                                                className="book_image overflow-hidden transition-all duration-500 group-hover:-translate-y-12">
                                                <Image
                                                    src={bookImgOne}
                                                    alt={`bookImgOne-${groupIndex}-${i}`}
                                                    className="w-full h-[350px] transition-transform duration-300"
                                                />
                                            </div>

                                            <div
                                                className="book_details mt-0 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:-mt-[35px] group-hover:max-h-[100px] group-hover:opacity-100">
                                                <h4 className="text-[14px] text-prgcolor font-[600]">
                                                    War And Peace
                                                </h4>
                                                <h4 className="text-[14px] text-graycolor">John Grishan</h4>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div className="slider_button flex items-center justify-center">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="bg-white text-graycolor p-3 hover:text-primary transition-all"
                            >
                                {isPlaying ? <LuCirclePause size={25}/> : <LuCirclePlay size={25}/>}
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'tab2' && (
                    <div className="tab_two_content">
                        <div className="overflow-hidden w-full h-[450px]">
                            <div
                                className="flex w-max gap-x-5 animate-scroll-left-delay"
                                style={{animationPlayState: isPlaying ? 'running' : 'paused'}}
                            >
                                {[...Array(2)].flatMap((_, groupIndex) =>
                                    [...Array(5)].map((_, i) => (
                                        <div
                                            key={`${groupIndex}-${i}`}
                                            className="image_box pt-12 group w-[250px] h-[400px] cursor-pointer transition-all duration-300"
                                        >
                                            <div
                                                className="book_image overflow-hidden transition-all duration-500 group-hover:-translate-y-12">
                                                <Image
                                                    src={bookImgTwo}
                                                    alt={`bookImgTwo-${groupIndex}-${i}`}
                                                    className="w-full h-[350px]  transition-transform duration-300"
                                                />
                                            </div>

                                            <div
                                                className="book_details mt-0 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:-mt-[35px] group-hover:max-h-[100px] group-hover:opacity-100">
                                                <h4 className="text-[14px] text-prgcolor font-[600]">
                                                    Lord Of The Rings
                                                </h4>
                                                <h4 className="text-[14px] text-graycolor">Habib Basari</h4>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div className="slider_button flex items-center justify-center">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="bg-white text-graycolor p-3 hover:text-primary transition-all"
                            >
                                {isPlaying ? <LuCirclePause size={25}/> : <LuCirclePlay size={25}/>}
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'tab3' && (
                    <div className="tab_three_content">
                        <div className="overflow-hidden w-full h-[450px]">
                            <div
                                className="flex w-max gap-x-5 animate-scroll-left-delay"
                                style={{animationPlayState: isPlaying ? 'running' : 'paused'}}
                            >
                                {[...Array(2)].flatMap((_, groupIndex) =>
                                    [...Array(5)].map((_, i) => (
                                        <div
                                            key={`${groupIndex}-${i}`}
                                            className="image_box pt-12 group w-[250px] h-[400px] cursor-pointer transition-all duration-300"
                                        >
                                            <div
                                                className="book_image overflow-hidden transition-all duration-500 group-hover:-translate-y-12">
                                                <Image
                                                    src={bookImgThree}
                                                    alt={`bookImgThree-${groupIndex}-${i}`}
                                                    className="w-full h-[350px]  transition-transform duration-300"
                                                />
                                            </div>

                                            <div
                                                className="book_details mt-0 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:-mt-[35px] group-hover:max-h-[100px] group-hover:opacity-100">
                                                <h4 className="text-[14px] text-prgcolor font-[600]">
                                                    The Catcher
                                                </h4>
                                                <h4 className="text-[14px] text-graycolor">Mark Jeson</h4>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div className="slider_button flex items-center justify-center">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="bg-white text-graycolor p-3 hover:text-primary transition-all"
                            >
                                {isPlaying ? <LuCirclePause size={25}/> : <LuCirclePlay size={25}/>}
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'tab4' && (
                    <div className="tab_four_content">
                        <div className="overflow-hidden w-full h-[450px]">
                            <div
                                className="flex w-max gap-x-5 animate-scroll-left-delay"
                                style={{animationPlayState: isPlaying ? 'running' : 'paused'}}
                            >
                                {[...Array(2)].flatMap((_, groupIndex) =>
                                    [...Array(5)].map((_, i) => (
                                        <div
                                            key={`${groupIndex}-${i}`}
                                            className="image_box pt-12 group w-[250px] h-[400px] cursor-pointer transition-all duration-300"
                                        >
                                            <div
                                                className="book_image overflow-hidden transition-all duration-500 group-hover:-translate-y-12">
                                                <Image
                                                    src={bookImgFour}
                                                    alt={`bookImgFour-${groupIndex}-${i}`}
                                                    className="w-full h-[350px]  transition-transform duration-300"
                                                />
                                            </div>

                                            <div
                                                className="book_details mt-0 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:-mt-[35px] group-hover:max-h-[100px] group-hover:opacity-100">
                                                <h4 className="text-[14px] text-prgcolor font-[600]">
                                                    Origin of Species
                                                </h4>
                                                <h4 className="text-[14px] text-graycolor">Loney Jill</h4>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div className="slider_button flex items-center justify-center">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="bg-white text-graycolor p-3 hover:text-primary transition-all"
                            >
                                {isPlaying ? <LuCirclePause size={25}/> : <LuCirclePlay size={25}/>}
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'tab5' && (
                    <div className="tab_five_content">
                        <div className="overflow-hidden w-full h-[450px]">
                            <div
                                className="flex w-max gap-x-5 animate-scroll-left-delay"
                                style={{animationPlayState: isPlaying ? 'running' : 'paused'}}
                            >
                                {[...Array(2)].flatMap((_, groupIndex) =>
                                    [...Array(5)].map((_, i) => (
                                        <div
                                            key={`${groupIndex}-${i}`}
                                            className="image_box pt-12 group w-[250px] h-[400px] cursor-pointer transition-all duration-300"
                                        >
                                            <div
                                                className="book_image overflow-hidden transition-all duration-500 group-hover:-translate-y-12">
                                                <Image
                                                    src={bookImgFive}
                                                    alt={`bookImgFive-${groupIndex}-${i}`}
                                                    className="w-full h-[350px]  transition-transform duration-300"
                                                />
                                            </div>

                                            <div
                                                className="book_details mt-0 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:-mt-[35px] group-hover:max-h-[100px] group-hover:opacity-100">
                                                <h4 className="text-[14px] text-prgcolor font-[600]">
                                                    Great Gatsby
                                                </h4>
                                                <h4 className="text-[14px] text-graycolor">David Martin</h4>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div className="slider_button flex items-center justify-center">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="bg-white text-graycolor p-3 hover:text-primary transition-all"
                            >
                                {isPlaying ? <LuCirclePause size={25}/> : <LuCirclePlay size={25}/>}
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default Slider;