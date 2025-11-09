import React from 'react';
import Link from "next/link";

const SubHeader = () => {
    return (
        <>
            <section className="pt-[50px]">
                <div className="sub_header bg-white w-full fixed top-[50px] z-30">
                    <div className="container block space-y-2 md:space-y-0 md:flex items-center justify-between">
                        <h4 className="text-[16px] text-prgcolor font-bold">
                            Voyage méthode de lecture
                        </h4>
                        <ul className="flex items-center gap-4 text-[14px]">
                            <li className="text-primary">
                                <Link href='#'>Information</Link>
                            </li>
                            <li className="text-prgcolor hover:text-primary">
                                <Link href='#'>Enseignants</Link>
                            </li>
                            <li className="text-prgcolor hover:text-primary">
                                <Link href='#'>Élèves</Link>
                            </li>
                            <li className="text-prgcolor hover:text-primary">
                                <Link href='#'>Parents</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SubHeader;