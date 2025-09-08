import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from "react-router-dom";
import { X, UploadIcon, PlusIcon } from 'lucide-react';

import {Add_partner} from '../../api/post/add_partner';
const API_URL = import.meta.env.VITE_API_URL;

export const Form_Add_Edit_Partenaire = ({ setShowComponent }) => {
    const location = useLocation();
    let collectionName = "Cadre";
    if (location.pathname.includes("BTP")) {
        collectionName = "BTP";
    }
    if (location.pathname.includes("Informatique")) {
        collectionName = "Informatique";
    }


    const [formData, setFormData] = useState({
        name: ""
    });

    const [previewImage, setPreviewImage] = useState(null);


    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, files, value } = e.target;
        if (files) {
            const file = files[0];
            setFormData({ ...formData, [name]: file });
            setPreviewImage(URL.createObjectURL(file));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };



    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[1000]">
            <div className="bg-gradient-to-b from-[#FAFDE0] to-red-100 rounded-lg max-w-3xl w-full flex overflow-hidden relative max-h-[90vh]">
                <button onClick={() => setShowComponent(0)} className="absolute bg-white rounded-full p-2 top-4 right-4 z-10 text-gray-600 border border-gray-200  shadow-md">
                    <X size={24} />
                </button>
                <form
                    className="w-full p-4 md:p-12 overflow-auto no-scrollbar">
                    <h1 className="text-3xl font-bold mb-4">Ajouter un partenaire</h1>
                    <div className="w-full border-b md:border-b-0 md:border-r border-gray-200">
                        <div className="h-full flex flex-col">
                            <h2 className="text-lg font-medium mb-4">Ajouter une image</h2>
                            <div className="relative flex-grow flex h-[200px] flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer"
                                onClick={openFileDialog}
                            >
                                {previewImage ? (
                                    <img
                                        src={previewImage}
                                        alt="Prévisualisation"
                                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                    />
                                ) : (
                                    <>
                                        <UploadIcon className="w-8 h-8 text-gray-400 mb-2" />
                                        <p className="text-sm text-gray-500 text-center mb-4">
                                            Parcourez et choisissez le fichier que vous souhaitez
                                            télécharger depuis votre ordinateur.
                                        </p>
                                    </>
                                )}
                                <div className="bg-[#003A1E] text-white rounded-md p-2 flex items-center justify-center">
                                    <PlusIcon className="w-4 h-4 mr-1" />
                                    <p className="block text-sm text-white font-medium text-gray-700 mb-1">
                                        Ajouter une image
                                    </p>
                                </div>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    name="image_file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handleChange}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="w-full  mt-4">
                        <div className="space-y-4">
                            <div className="flex  gap-4">

                                <div className="w-full ">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Nom du partenaire
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  bg-transparent"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 space-y-4">
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#003A1E] text-white rounded-md font-medium transition-colors">
                            Soumettre
                        </button>
                    </div>
                </form>
                <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[#FAFDE0] to-red-100 relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-[15%] left-[10%] w-56 h-56 bg-gradient-to-tr from-[#003A1E] to-green-500 rounded-full blur-xl opacity-80"></div>
                        <div className="absolute top-[30%] right-[10%] w-72 h-40 bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
                            <div className="text-xl font-semibold text-gray-800">
                                Votre Partenaire Fiable
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                                Ensemble, construisons vos projets avec innovation.
                            </p>
                        </div>
                        <div className="absolute bottom-[20%] left-[20%] w-24 h-24 bg-orange-400 rounded-lg rotate-12 shadow-md"></div>
                        <div className="absolute bottom-[10%] right-[15%] w-32 h-32 bg-gradient-to-tr from-yellow-300 to-orange-500 rounded-full shadow-lg opacity-90"></div>
                    </div>
                </div>
            </div>
        </div >
    )
}
