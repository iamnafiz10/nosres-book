import React from 'react';
import {MdOutlineSearchOff} from "react-icons/md";

function Page() {
    return (
        <>
            <section id="aucune-section">
                <div className="container">
                    <div className="mt-24 box flex flex-col items-center justify-center">
                        <MdOutlineSearchOff size={100} className="text-center text-gray-400"/>
                        <h4 className="text-[20px] mt-4 text-center">
                            Nous sommes désolés, aucun résultat n’a
                            été trouvé
                        </h4>
                        <p className="mt-2">
                            Veuillez essayer de nouveaux critères de recherche.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;