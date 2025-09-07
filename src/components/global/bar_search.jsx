import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { toast } from 'react-toastify';
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
        if (isError) {
            toast.error("error", error.TypeError);
            console.log( error)
        }

    }, [isSuccess, isError]);

    return (
        <div className="relative max-w-4xl mx-auto mb-[120px] ">
            <div className={`absolute  w-full  h-auto z-[100] p-4  ${showresponse && "bg-white  rounded-2xl "} `}>


                <div className="max-w-3xl mx-auto mb-16">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-full p-2 flex flex-col md:flex-row  shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                        <div className="flex items-center flex-1 px-4 py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="e.g. UX Designer"
                                className="w-full outline-none text-gray-700"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="bg-[#003A1E] text-white font-medium rounded-full px-8 py-3 transition-colors">

                            {isPending ?
                                "Envoi en cours..."
                                :
                                "Search"
                            }
                        </button>
                    </form>
                </div>
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