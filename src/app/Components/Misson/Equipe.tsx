'use client';
import React from 'react';
import teamImg1 from "../../../../public/assets/images/slider1.jpg";
import Image from "next/image";
import {Modal, ModalBody, ModalHeader} from 'flowbite-react';
import {useState} from 'react';
import {LuCircleArrowRight} from "react-icons/lu";

function Equipe() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <section id="equipe-section" className="bg-[#F4F4F4] mt-14">
                <div className="container py-16">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Notre équipe
                        </h1>
                        <p className="mt-3 text-gray-500 text-[16px]">
                            Des pédagogues, designers et penseurs engagés pour une éducation de qualité
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
                        <div data-aos="zoom-in" data-aos-duration="1000" onClick={() => setOpenModal(true)}
                             className="hover:-translate-y-2 duration-1000 col cursor-pointer image-box bg-white rounded-xl">
                            <Image src={teamImg1} className="w-full h-52 rounded-xl rounded-b-none" alt="teamImg"/>
                            <div className="content px-4 py-4">
                                <h3 className="font-semibold text-primary text-[16px]">
                                    John Doe
                                </h3>
                                <p className="mt-1 text-[14px] text-gray-600">
                                    Chief Marketing Officer
                                </p>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" onClick={() => setOpenModal(true)}
                             className="hover:-translate-y-2 duration-1000 col cursor-pointer image-box bg-white rounded-xl">
                            <Image src={teamImg1} className="w-full h-52 rounded-xl rounded-b-none" alt="teamImg"/>
                            <div className="content px-4 py-4">
                                <h3 className="font-semibold text-primary text-[16px]">
                                    John Doe
                                </h3>
                                <p className="mt-1 text-[14px] text-gray-600">
                                    Chief Marketing Officer
                                </p>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" onClick={() => setOpenModal(true)}
                             className="hover:-translate-y-2 duration-1000 col cursor-pointer image-box bg-white rounded-xl">
                            <Image src={teamImg1} className="w-full h-52 rounded-xl rounded-b-none" alt="teamImg"/>
                            <div className="content px-4 py-4">
                                <h3 className="font-semibold text-primary text-[16px]">
                                    John Doe
                                </h3>
                                <p className="mt-1 text-[14px] text-gray-600">
                                    Chief Marketing Officer
                                </p>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" onClick={() => setOpenModal(true)}
                             className="hover:-translate-y-2 duration-1000 col cursor-pointer image-box bg-white rounded-xl">
                            <Image src={teamImg1} className="w-full h-52 rounded-xl rounded-b-none" alt="teamImg"/>
                            <div className="content px-4 py-4">
                                <h3 className="font-semibold text-primary text-[16px]">
                                    John Doe
                                </h3>
                                <p className="mt-1 text-[14px] text-gray-600">
                                    Chief Marketing Officer
                                </p>
                            </div>
                        </div>
                    </div>

                    <button type='button'
                            className="mt-10 flex items-center gap-1 cursor-pointer text-[14px] text-primary hover:underline">
                           <span className="icon">
                                <LuCircleArrowRight size={15}/>
                           </span>
                        Découvrir nos auteurs
                    </button>
                </div>
            </section>

            {/* Modal Content */}
            <div id="modal_content_wrap">
                <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                    <ModalHeader className="bg-white text-black border-transparent">
                        <div className="flex items-center gap-4">
                            <Image src={teamImg1} className="w-14 h-14 rounded-full" alt="teamImg"/>
                            <div className="box">
                                <h3 className="text-black text-[16px]">John Doe</h3>
                                <p className="font-normal text-graycolor text-[14px]">Chief Marketing
                                    Officer</p>
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody
                        className="bg-white border-t border-bordercolor text-graycolor text-[14px] rounded-b-xl overflow-hidden">
                        <div className="box space-y-6">
                            <p>
                                Jane Doe a captivating wordsmith, renowned for her extraordinary torytelling
                                prowess that transcends
                                the boundaries of imagination. With a career spanning decades, Jane has left
                                an
                                indelible mark on the
                                literary world, enchanting readers from all walks of life.
                            </p>

                            <p>
                                Born in a quaint, picturesque town in the heart of the Midwest, Jane{`'`}s
                                early
                                years were filled with the
                                magic of nature, which would later become a recurring theme in her works.
                                She
                                developed an insatiable
                                curiosity for the world around her and a deep appreciation for the written
                                word
                                at a young age
                            </p>

                            <p>
                                Jane{`'`}s literary journey began with her first poem, penned at the tender
                                age
                                of
                                seven, which soon turned
                                into a lifelong passion. She studied literature at the prestigious Ivy
                                League
                                institution, Ivy University,
                                where she honed her writing skills under the guidance of renowned professors
                                and
                                literary giants.
                            </p>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </>
    );
}

export default Equipe;