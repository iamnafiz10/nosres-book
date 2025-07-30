import React from 'react';
import Image from "next/image";
import SliderOne from "../../../../public/assets/images/edu1.png";
import SliderTwo from "../../../../public/assets/images/edu2.png";
import SliderThree from "../../../../public/assets/images/edu3.png";
import {LuCircleArrowRight} from "react-icons/lu";

function Education() {
    return (
        <>
            <section id="ce-section"
                     className="bg-[linear-gradient(to_right,_rgba(139,202,232,0.3),_rgba(197,176,151,0.3))]">
                <div className="container py-16">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Éducation et Pédagogie
                        </h1>
                        <p>
                            Des ressources conçues pour accompagner enseignants, élèves et éducateurs dans un
                            apprentissage<br/>
                            clair, structuré et stimulant, de la maternelle au supérieur.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        <div data-aos="zoom-in" className="col">
                            <div className="h-full pb-4 cursor-pointer image-box bg-white rounded-xl">
                                <Image src={SliderOne} className="w-full h-48 rounded-xl rounded-b-none"
                                       alt="SliderOne"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-[16px]">
                                        Manuels scolaires
                                    </h3>
                                    <h4 className="text-[14px] mt-2">
                                        Des ouvrages clairs et progressifs pour
                                        accompagner les élèves du préscolaire au
                                        secondaire, conformes aux programmes
                                        officiels.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="h-full pb-4 cursor-pointer image-box bg-white rounded-xl">
                                <Image src={SliderTwo} className="w-full h-48 rounded-xl rounded-b-none"
                                       alt="SliderTwo"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-[16px]">
                                        Cahiers d’activités
                                    </h3>
                                    <h4 className="text-[14px] mt-2">
                                        Des supports ludiques et pratiques pour
                                        consolider les apprentissages, favoriser l’autonomie et enrichir le quotidien
                                        des élèves.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="h-full pb-4 cursor-pointer image-box bg-white rounded-xl">
                                <Image src={SliderThree} className="w-full h-48 rounded-xl rounded-b-none"
                                       alt="SliderThree"/>
                                <div className="content px-4 py-4">
                                    <h3 className="font-semibold text-[16px]">
                                        Guides pour enseignants
                                    </h3>
                                    <h4 className="text-[14px] mt-2">
                                        Des ressources pédagogiques clés en main
                                        pour préparer, animer et différencier les
                                        séances en classe avec efficacité.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button-area mt-8">
                        <button type='button'
                                className="text-[14px] cursor-pointer flex items-center gap-2 text-primary hover:underline">
                            <span className="icon">
                                <LuCircleArrowRight size={20}/>
                            </span>
                            Découvrir nos collections
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Education;