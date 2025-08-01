"use client";
import {IoIosArrowForward} from "react-icons/io";
import Image from "next/image";
import bookImg from '../../../../public/assets/images/book1.jpg';
import {LuBookmark, LuBookOpenText, LuCircleMinus, LuCirclePlus, LuInfo, LuShare} from "react-icons/lu";
import {useState} from "react";

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

                    <div className="grid grid-cols-12 gap-6 mt-6">
                        <div className="col md:col-span-3">
                            <Image src={bookImg} className="w-full" alt="bookImg"/>
                            <button type='button'
                                    className="mt-4 py-2 block w-full text-primary hover:text-white hover:bg-primary cursor-pointer gap-2 border border-primary rounded text-[14px] flex items-center justify-center">
                                <span className="icon">
                                    <LuBookOpenText size={15} className=""/>
                                </span>
                                Regarder à l'intérieur
                            </button>
                        </div>
                        <div className="col md:col-span-7">
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
                                className="flex items-center justify-between border-b border-bordercolor pb-4 gap-4 text-[14px] mt-2">
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

                        </div>
                        <div className="col md:col-span-4">Hi</div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
}

export default Detail;