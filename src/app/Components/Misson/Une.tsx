import React from 'react';
import Image from "next/image";
import bookImg from '../../../../public/assets/images/slider1.jpg'

function Une() {
    return (
        <>
            <section id="une-section">
                <div className="container pt-16">
                    <div className="wrap text-center">
                        <h4 className="text-[24px] font-semibold">
                            Une maison engagée pour le
                            progrès collectif
                        </h4>
                        <p className="text-[16px] mt-2">
                            Nosres Books est une initiative de Nosres Education dédiée à la création de livres qui
                            éclairent, inspirent<br/>
                            et transforment. Nous croyons fermement que le livre est un levier de changement, un outil
                            puissant pour<br/>
                            contribuer à une société plus juste, plus cultivée et plus consciente.
                        </p>
                    </div>
                </div>
            </section>

            <section id="offrir-section" className="bg-[#F4F4F4] mt-8">
                <div className="container py-16">
                    <div className="relative future-section overflow-hidden rounded-xl p-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-10">
                            <div data-aos="zoom-in" className="col md:col-span-5">
                                <Image src={bookImg} className="w-full h-full rounded-xl"
                                       alt="bookImg"/>
                            </div>
                            <div
                                className="col mt-6 md:mt-0 md:col-span-7 bg-[#fafafa38] p-6 flex flex-col justify-center rounded-xl">
                                <h2 className="text-[24px] font-semibold text-black">
                                    Ce que nous faisons
                                </h2>

                                <h4 className="text-[16px] text-prgcolor mt-1">
                                    Nous concevons des ouvrages pédagogiques qui répondent
                                    à des besoins éducatifs réels. Nous travaillons avec des
                                    enseignants, des auteurs, des illustrateurs, des chercheurs
                                    et des penseurs pour offrir des contenus de qualité, enrichis
                                    par la diversité des points de vue.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Une;