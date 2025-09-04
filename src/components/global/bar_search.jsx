import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion } from "framer-motion";
import { Generative_groq } from '../../api/post/groq_generate';

export const Bar_search = () => {
    const { isPending, isError, isSuccess, error, data, mutate } = Generative_groq();

    const [showresponse, setShowresponse] = useState(false);
    const [formData, setFormData] = useState({
        project: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(formData)
    };

    useEffect(() => {
        if (isSuccess) {
            setShowresponse(true);
        }
    }, [isSuccess]);

    return (
        <div className="relative max-w-4xl mx-auto mb-[120px] ">
            <div className={`absolute  w-full  h-auto z-[100] p-4  ${showresponse && "bg-white  rounded-2xl shadow-lg"} `}>
                <form onSubmit={handleSubmit} className="absolute left-0 right-0 mx-4">
                    <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
                    <textarea
                        name="project"
                        onChange={handleChange}
                        value={formData.project}
                        placeholder="Posez une question en rapport avec Onutech ou l'un de ses secteurs d'activité!"
                        className="w-full  pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500  resize-none "
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-2 bg-gray-100 p-2 rounded-full border border-gray-200">

                        {isPending ?
                            "Envoi en cours..."
                            :
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 18L15 12L9 6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                    </button>
                </form>
                {showresponse &&
                    <motion.div
                        key="response"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <div className="flex flex-col gap-2 mt-[70px] w-full items-end">
                            <button
                                onClick={() => setShowresponse(false)}
                                className=" bg-gray-100 rounded-full p-[6px] w-fit text-gray-600 border border-gray-200 ">
                                <X size={20} />
                            </button>
                            <textarea
                                value={data}
                                className="bg-white shadow-lg w-full h-64  rounded-2xl resize-none outline-none p-4"
                            />
                        </div>
                    </motion.div>
                }
            </div>
        </div>
    )
}