import React from 'react';
import { PlusIcon, Pencil, Trash } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { Get_partner } from '../../api/get/get_partner';
const API_URL = import.meta.env.VITE_API_URL;

export const Sponsor = ({ setShowComponent }) => {
    const location = useLocation();
    const { isPending, isSuccess, error, data } = Get_partner();

    const partner = (Array.isArray(data) ? data : []).flatMap(group =>
        (location.pathname.includes("Informatique") ? group.title === "partner_informatique" : group.title === "partner_BTP")
            ? group.partners.map(part => ({
                ...part,
                _id: group._id,
            }))
            : []
    ) || [];

    // Fonction pour générer un style aléatoire
    const getRandomStyle = () => {
        const colors = ['text-gray-300'];
        const sizes = ['text-lg', 'text-xl', 'text-2xl', 'text-base'];
        const fonts = ['font-serif', 'font-sans', 'font-mono'];
        const extras = ['', 'italic', 'uppercase', 'font-bold', 'tracking-wider'];

        const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
        return `${randomItem(colors)} ${randomItem(sizes)} ${randomItem(fonts)} ${randomItem(extras)}`;
    }

    return (
        <div>
            <div className="text-center ">
                <h1 className="text-5xl font-bold text-gray-800 mb-4 arsenal-sc-regular">Découvrez les</h1>
                <h1 className="text-5xl font-bold text-gray-800 mb-6 arsenal-sc-regular">
                    Partenaires en {location.pathname.includes("Informatique") ? "Informatique" : "BTP"}
                </h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Find the best master for your company and boosts your business 10x!
                </p>
            </div>
            <div className="flex justify-end items-end max-w-5xl mx-auto mb-4">
                <button
                    onClick={() => setShowComponent({ id: 4 })}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:bg-gray-50 shadow-md">
                    <PlusIcon size={20} className="text-gray-500" />
                </button>
            </div>
            <div className="flex justify-center items-center gap-8 my-[80px] flex-wrap">
                {partner.length > 0 ? (
                    partner.map((part) => (
                        <div key={part._id} className="flex flex-col items-center justify-center">
                            <div className="relative">
                                <img src={`${API_URL}/api/v1/images/${part.image}`} alt="" className="w-[100px] h-[100px] object-cover rounded-md" />
                                <div className="absolute flex gap-1 -right-6 -bottom-4 z-[20]">
                                    <button
                                        onClick={() => setShowComponent({ id: 4, partner: part, document_id: part._id })}
                                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:bg-gray-50 shadow-md">
                                        <Pencil size={15} className="text-gray-500" />
                                    </button>
                                    <button
                                        onClick={() => setShowComponent({ id: 2, element: part, document_id: part._id, partner_delete: true })}
                                        className="w-8 h-8 -mt-6 rounded-full bg-white flex items-center justify-center border border-red-200 hover:bg-gray-50 shadow-md">
                                        <Trash size={15} className="text-red-500" />
                                    </button>
                                </div>
                            </div>
                            <div className={getRandomStyle()}>{part.name}</div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Aucun partenaire trouvé</p>
                )}
            </div>
        </div>
    )
}
