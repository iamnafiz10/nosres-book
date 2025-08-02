"use client";
import {IoIosArrowForward} from "react-icons/io";
import Image from "next/image";
import bookImg from '../../../../public/assets/images/book1.jpg';
import {
    LuArrowRight,
    LuBookmark,
    LuBookOpenText,
    LuCircleMinus,
    LuCirclePlus,
    LuInfo,
    LuShare,
    LuStore,
} from "react-icons/lu";
import React, {useState} from "react";
import bookImgone from "../../../../public/assets/images/book1.jpg";
import bookImgtwo from "../../../../public/assets/images/book2.jpg";
import bookImgthree from "../../../../public/assets/images/book3.jpg";
import bookImgfour from "../../../../public/assets/images/book4.jpg";

function Detail() {
    // Show more description
    const [showMore, setShowMore] = useState(false);
    // Show more eloges
    const [showMoreEloges, setShowMoreEloges] = useState(false);
    return (
        <>
            <section id="detail-section">
                <div className="container pt-16">
                    <div className="wrapper mt-8 flex items-center gap-2">
                        <div className="text_wrap">
                            <h4 className="text-[14px] text-graycolor hover:underline cursor-pointer">Accueil</h4>
                        </div>

                        <div className="icon">
                            <IoIosArrowForward size={15} className="text-primary"/>
                        </div>

                        <div className="text_wrap">
                            <h4 className="text-[14px] text-graycolor hover:underline cursor-pointer">Maternelle</h4>
                        </div>

                        <div className="icon">
                            <IoIosArrowForward size={15} className="text-primary"/>
                        </div>
                        <div className="text_wrap">
                            <h4 className="text-[14px] text-graycolor">
                                A Calculated Restraint
                            </h4>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                        <div className="col lg:col-span-3">
                            <Image src={bookImg} className="w-full" alt="bookImg"/>
                            <button type='button'
                                    className="mt-4 py-2 block w-full text-primary hover:text-white hover:bg-primary cursor-pointer gap-2 border border-primary rounded text-[14px] flex items-center justify-center">
                                <span className="icon">
                                    <LuBookOpenText size={15} className=""/>
                                </span>
                                Regarder à l'intérieur
                            </button>
                        </div>
                        <div className="col lg:col-span-6">
                            <h4 className="text-prgcolor text-[18px] font-semibold">
                                A Calculated Restrain
                            </h4>
                            <p>
                                What Allied Leaders Said about the Holocaust
                            </p>
                            <h4 className="text-[14px] mt-4">
                                Auteur (s): <span className="text-primary">John Doe</span>,<span
                                className="text-primary">Joan Appleseed</span>,<span className="text-primary">Joan Appleseed</span>
                            </h4>

                            <div
                                className="flex items-center justify-between gap-4 text-[14px] mt-2">
                                <h4>
                                    Date de parution: <span className="text-graycolor">May 6, 2025</span>
                                </h4>
                                <h4>
                                    ISBN: <span className="text-graycolor">9780674293649</span>
                                </h4>

                                <div className="flex items-center gap-4">
                                    <button type='button'
                                            className=" cursor-pointer py-1 px-6 text-[12px] rounded-full bg-[#F4F4F4]">
                                        Papier
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-4 border-b border-bordercolor pb-4 mt-4">
                                <span className="icon cursor-pointer">
                                        <LuBookmark size={17} className="text-graycolor hover:text-primary"/>
                                    </span>
                                <span className="icon cursor-pointer">
                                        <LuInfo size={17} className="text-graycolor hover:text-primary"/>
                                    </span>
                                <span className="icon cursor-pointer">
                                        <LuShare size={16} className="text-graycolor hover:text-primary"/>
                                    </span>
                            </div>

                            {/*Book Description*/}
                            <div className="book_description mt-4">
                                <h4 className="text-[16px] text-black font-semibold">
                                    Description
                                </h4>

                                {/*Default description*/}
                                <h4 className="mt-2 text-[14px] text-prgcolor">
                                    <b>
                                        An eminent historian of the Holocaust examines why Churchill, Roosevelt, and
                                        Stalin, though faced with mounting evidence of the Nazi extermination of Jews,
                                        were reluctant to speak out against the atrocities.
                                    </b>
                                    <br/>
                                    <br/>
                                    The Allied leaders rarely spoke directly about the Holocaust in public. When
                                    Churchill and Stalin alluded to Nazi mass murder of civilians in early speeches,
                                    they
                                    said much less than they knew. Not until December 1942 did Allied governments
                                    issue a joint statement about Nazi Germany’s policy of exterminating the Jews of
                                    Europe. Roosevelt deferred his own public statement until March 1944. Why didn’t
                                    these leaders speak up sooner?
                                </h4>

                                {/*See more description*/}
                                {showMore && (
                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at deleniti dolores
                                        eaque id iure mollitia similique. Earum error et illo unde veniam. Amet culpa
                                        esse
                                        nam nesciunt odio quisquam repellendus? Architecto ducimus enim id ipsam iure
                                        libero
                                        nesciunt odio officiis perferendis, quasi rerum sunt vitae voluptas. Cum
                                        eveniet,
                                        facere.
                                    </h4>
                                )}

                                {/* See more / See less icon */}
                                <div
                                    onClick={() => setShowMore(!showMore)}
                                    className="icon_wrap mt-4 flex items-center gap-1 text-primary cursor-pointer"
                                >
                                    {showMore ? <LuCircleMinus size={20}/> : <LuCirclePlus size={20}/>}
                                    <h4 className="text-[14px]">
                                        {showMore ? 'Voir moins' : 'Voir plus'}
                                    </h4>
                                </div>
                            </div>

                            {/*Book Eloges*/}
                            <div className="book_eloges mt-6">
                                <h4 className="text-[16px] text-black font-semibold">
                                    Éloges
                                </h4>

                                {/*Default eloges*/}
                                <div className="bg-blue-50 p-4 rounded mt-4">
                                    <h4 className="mt-2 text-[14px] text-prgcolor">
                                        A solid guide to a crisis in which leaders found themselves constrained by<br/>
                                        many obstacles from doing more.
                                    </h4>
                                    <h4 className="text-[14px] mt-1">
                                        —Richard Overy, Literary Review
                                    </h4>
                                </div>

                                {/*See more description*/}
                                {showMoreEloges && (
                                    <>
                                        <div className="bg-blue-50 p-4 rounded mt-4">
                                            <h4 className="mt-2 text-[14px] text-prgcolor">
                                                A solid guide to a crisis in which leaders found themselves constrained
                                                by<br/>
                                                many obstacles from doing more.
                                            </h4>
                                            <h4 className="text-[14px] mt-1">
                                                —Richard Overy, Literary Review
                                            </h4>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded mt-4">
                                            <h4 className="mt-2 text-[14px] text-prgcolor">
                                                A solid guide to a crisis in which leaders found themselves constrained
                                                by<br/>
                                                many obstacles from doing more.
                                            </h4>
                                            <h4 className="text-[14px] mt-1">
                                                —Richard Overy, Literary Review
                                            </h4>
                                        </div>
                                    </>
                                )}

                                {/* See more / See less icon */}
                                <div
                                    onClick={() => setShowMoreEloges(!showMoreEloges)}
                                    className="icon_wrap mt-4 flex items-center gap-1 text-primary cursor-pointer"
                                >
                                    {showMoreEloges ? <LuCircleMinus size={20}/> : <LuCirclePlus size={20}/>}
                                    <h4 className="text-[14px]">
                                        {showMoreEloges ? 'Voir moins' : 'Voir plus'}
                                    </h4>
                                </div>
                            </div>

                            <h4 className="text-[16px] text-black font-semibold mt-8">
                                Prix
                            </h4>
                            <h4 className="mt-1 text-[14px] text-prgcolor">
                                2024, Winner of the PROSE Award in Business, Finance, and Management
                            </h4>

                            <h4 className="text-[16px] text-black font-semibold mt-8">
                                Auteur (s)
                            </h4>
                            <h4 className="mt-1 text-[14px] text-prgcolor">
                                Richard Breitman is Distinguished Professor Emeritus at American University. His
                                many books include The Berlin Mission: The American Who Resisted Nazi Germany from
                                Within; FDR and the Jews, coauthored with Allan J. Lichtman; Official
                                Secrets: What the Nazis Planned, What the British and Americans Knew; and The
                                Architect of Genocide: Himmler and the Final Solution.
                            </h4>

                            <h4 className="text-[16px] text-black font-semibold mt-8">
                                Détails du livre
                            </h4>
                            <div className="wrap mt-1 space-y-2">
                                <h4 className="text-[14px] text-prgcolor">
                                    Catégorie (s) :
                                    <span className="text-graycolor"> Enfants</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor">
                                    Maison d’édition :
                                    <span className="text-graycolor"> Harvard University Press</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor">
                                    Date de parution :
                                    <span className="text-graycolor"> May 6, 2025</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor">
                                    Collection
                                    <span
                                        className="text-primary cursor-pointer"> The Charles Eliot Norton Lectures</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor">
                                    Langue :
                                    <span className="text-graycolor"> English</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor">
                                    Nombre de pages :
                                    <span className="text-graycolor"> 352 pages</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor">
                                    ISBN :
                                    <span className="text-graycolor"> 978-0674293649</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor">
                                    Poids :
                                    <span className="text-graycolor"> 1.15 pounds</span>
                                </h4>
                                <h4 className="text-[14px] text-prgcolor">
                                    Dimensions :
                                    <span className="text-graycolor"> 5.5 x 0.87 x 8.25 inches</span>
                                </h4>
                            </div>

                        </div>
                        <div className="col lg:col-span-3 ">
                            <div className="box bg-[#E6E8EA] flex flex-col justify-center rounded-xl py-8 px-4">
                                <h4 className="text-[18px] font-semibold text-center">
                                    $35.00
                                </h4>
                                <div className="icon flex justify-center mt-2">
                                    <div className="p-4 bg-white rounded-full">
                                        <LuStore size={35} className="text-primary"/>
                                    </div>
                                </div>
                                <button type='button'
                                        className="mt-3 py-2 px-4 cursor-pointer border border-primary hover:bg-white hover:text-primary flex items-center justify-center gap-2 text-white rounded bg-primary text-[14px]">
                                    <span>
                                        <LuArrowRight size={15}/>
                                    </span>
                                    Acheter ailleurs
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*Books*/}
                    <h4 className="text-prgcolor text-[18px] font-semibold mt-14">
                        De cet (ces) auteur(s)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 mt-6">
                        <div className="col">
                            <div className="relative">
                                <Image src={bookImgone} className=" w-full h-full md:h-[300px] cursor-pointer"
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
                                <Image src={bookImgtwo} className=" w-full h-full md:h-[300px] cursor-pointer"
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
                            <Image src={bookImgthree} className=" w-full h-full md:h-[300px] cursor-pointer"
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
                            <Image src={bookImgfour} className=" w-full h-full md:h-[300px] cursor-pointer"
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

                    {/*Books*/}
                    <h4 className="text-prgcolor text-[18px] font-semibold mt-14">
                        Recommendations
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 mt-6">
                        <div className="col">
                            <div className="relative">
                                <Image src={bookImgone} className=" w-full h-full md:h-[300px] cursor-pointer"
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
                                <Image src={bookImgtwo} className=" w-full h-full md:h-[300px] cursor-pointer"
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
                            <Image src={bookImgthree} className=" w-full h-full md:h-[300px] cursor-pointer"
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
                            <Image src={bookImgfour} className=" w-full h-full md:h-[300px] cursor-pointer"
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
                </div>
            </section>
        </>
    )
        ;
}

export default Detail;