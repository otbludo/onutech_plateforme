import React from 'react'
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarIcon, PlusIcon, Pencil, Trash } from 'lucide-react';

import { ProjetsSkeleton } from './loader/loader_project';

import { get_Projet } from '../../api/get/get_project';
const API_URL = import.meta.env.VITE_API_URL;

export const Projets = ({ setShowComponent }) => {
    const location = useLocation();
    let collectionName = "informatique";
    if (location.pathname.includes("BTP")) {
        collectionName = "BTP";
    }
    const { isPending, error, data } = get_Projet(collectionName);


    return (
        <div className="max-w-5xl mx-auto py-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Designs récents</h2>
                <button
                    disabled={isPending}
                    onClick={() => setShowComponent({ id: 1 })}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:bg-gray-50 shadow-md">
                    <PlusIcon size={20} className="text-gray-500" />
                </button>
            </div>
            {isPending ? (<ProjetsSkeleton />) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <AnimatePresence>
                        {data?.map((data) => (
                            <div key={data._id} className="flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-medium text-gray-700">{data.title}</h2>
                                </div>
                                <div className="flex-grow  rounded-lg ">
                                    {data.project?.map((task) => (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }} // Départ : Caché et petit (zoom)
                                            whileInView={{ opacity: 1, scale: 1 }} // Quand visible : Devient opaque et taille normale
                                            transition={{ duration: 0.5, ease: "easeOut" }} // Transition fluide
                                            viewport={{ once: false, amount: 0.3 }}
                                        >
                                            <div key={task.project_id} className="p-4 bg-white rounded-md mt-2 mb-2 border-b border-gray-200 last:border-b-0 shadow-md  hover:shadow-sm transition-shadow duration-300 ">
                                                <div className="">
                                                    <img src={`${API_URL}/api/v1/images/${task.image}`} alt="" className="objectif-cover" />
                                                </div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-medium text-gray-800">{task.title}</h3>

                                                </div>
                                                <p className="text-sm text-gray-500 mb-3">{task.description}</p>
                                                <a href={task.link} className="text-sm text-blue-500 ">{task.link}</a>

                                                <div className="flex items-center justify-between mt-3">
                                                    {task.dueDate && (
                                                        <div className="w-fit flex items-center text-sm text-gray-500 mt-3">
                                                            <CalendarIcon size={12} className="mr-1" />
                                                            <span className="text-[12px]">{task.dueDate}</span>
                                                        </div>
                                                    )}
                                                    <div className="flex flex-1  gap-4 items-end justify-end">
                                                        <button
                                                            onClick={() => setShowComponent({ id: 1, project: task, document_id: data._id })}
                                                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:bg-gray-50 shadow-md">
                                                            <Pencil size={15} className="text-gray-500" />
                                                        </button>
                                                        <button
                                                            onClick={() => setShowComponent({ id: 2, element: task, document_id: data._id })}
                                                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-red-200 hover:bg-gray-50 shadow-md">
                                                            <Trash size={15} className="text-red-500" />
                                                        </button>


                                                        <div className="w-6 h-6 rounded-full overflow-hidden">
                                                            <img src="./assets/img/logo.png" alt="Assignee" className="w-full h-full object-cover" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                    {data.project.length === 0 && (
                                        <div className="p-4 text-center text-sm text-gray-400">No project yet</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    )
}
