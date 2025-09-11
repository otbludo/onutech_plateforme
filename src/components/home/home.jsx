import React from "react";
import { PlusIcon, Pencil, Trash } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { Bar_search } from '../global/bar_search';

import { PartnerscrolltSkeleton } from "../global/loader/loader_partner_carousel_home";

import { Get_Employe } from '../../api/get/get_employe';
const API_URL = import.meta.env.VITE_API_URL;

export const Homecomponent = ({ setShowComponent }) => {
    let collectionName = "Cadre";
    if (location.pathname.includes("BTP")) {
        collectionName = "BTP";
    }
    if (location.pathname.includes("Informatique")) {
        collectionName = "Informatique";
    }

    const { isPending, isSuccess, error, data } = Get_Employe(collectionName);
    const employees = (Array.isArray(data) ? data : []).flatMap(group =>
        group.employees.map(emp => ({
            ...emp,
            _id: group._id, // on rattache le document parent
        }))
    ) || [];

    return (
        <div className="w-full ">
            <div className="relative w-full gap-4 max-w-6xl mx-auto px-4 pt-16 pb-8">
                <video
                className="absolute -top-[90px] left-0 right-0 object-cover w-full h-full md:min-h-screen opacity-10"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="./assets/img/background.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
            </video>
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-full py-2 px-4 flex items-center shadow-sm">
                        <div className="w-5 h-5 bg-blue-600 rounded-full mr-2 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="text-sm font-medium">
                            Your #1 Platform for Skill Sharing
                        </span>
                    </div>
                </div>

                {/* Headline */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 arsenal-sc-regular">
                        Showcase Your Mastery.
                        <br />
                        Get Connected
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Create your profile, showcase your skills, and let employers find you.
                    </p>
                </div>

                {/* Search Form */}
                <Bar_search />
                {/* Profile Gallery Auto-Scroll */}
                <div className="overflow-hidden relative w-full">
                    <div className="flex justify-end items-end max-w-5xl mx-auto mb-4">
                        <button
                            onClick={() => setShowComponent({ id: 3 })}
                            className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:bg-gray-50 shadow-md">
                            <PlusIcon size={20} className="text-gray-500" />
                        </button>
                    </div>
                    {isPending ? (<PartnerscrolltSkeleton />) : (
                        <div className="flex space-x-4 animate-scroll mt-14">
                            {employees?.map((emp) => (
                                <div
                                    key={emp._id}
                                    className={`relative flex-shrink-0 w-48 h-56 rounded-lg overflow-hidden bg-purple-50`}
                                >
                                    <img
                                        src={`${API_URL}/api/v1/images/${emp.image}`}
                                        alt="image employe"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute flex gap-4 right-2 bottom-2 z-[1000]">
                                        <button
                                            onClick={() => setShowComponent({ id: 3, employee: emp, document_id: emp._id })}
                                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:bg-gray-50 shadow-md">
                                            <Pencil size={15} className="text-gray-500" />
                                        </button>
                                        <button
                                            onClick={() => setShowComponent({ id: 2, element: emp, document_id: emp._id, emplyoye_delete: true })}
                                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-red-200 hover:bg-gray-50 shadow-md">
                                            <Trash size={15} className="text-red-500" />
                                        </button>
                                        <div className="w-6 h-6 mt-2 rounded-full bg-gradient-to-r from-blue-50 to-[#FAFDE0] overflow-hidden">
                                            <img src="./assets/img/logo.png" alt="Assignee" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
