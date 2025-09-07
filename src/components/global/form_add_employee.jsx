import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from "react-router-dom";
import { X, UploadIcon, PlusIcon } from 'lucide-react';

import { Get_Employe } from '../../api/get/get_employe';
import { Add_emplyees } from '../../api/post/add_employee';


const API_URL = import.meta.env.VITE_API_URL;

export const Form_Add_Employee = ({ setShowComponent }) => {
    const location = useLocation();
    let collectionName = "Cadre";
    if (location.pathname.includes("BTP")) {
        collectionName = "BTP";
    }
    if (location.pathname.includes("Informatique")) {
        collectionName = "Informatique";
    }

    const { data: data_Get_Employe } = Get_Employe(collectionName);
    const { isPending: isPending_Add_emplyees, isSuccess: isSuccess_Add_emplyees, isError: isError_Add_emplyees, error: error_Add_emplyees, data: data_Add_emplyees, mutate: mutate_Add_emplyees } = Add_emplyees();


    const [formData, setFormData] = useState({
        collection: collectionName,
        document_id: data_Get_Employe?.[0]?._id || "",
        image_file: null,
        notation: "",
        name: "",
        statut: "",
        utils: ""
    });

    const [previewImage, setPreviewImage] = useState(false)
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("collection", formData.collection);
        fd.append("document_id", formData.document_id);
        fd.append("notation", formData.notation);
        fd.append("name", formData.name);
        fd.append("statut", formData.statut);
        fd.append("utils", formData.utils);

        if (formData.image_file instanceof File) {
            fd.append("image_file", formData.image_file);
        }

        mutate_Add_emplyees(fd);
    };

    useEffect(() => {
        if (isSuccess_Add_emplyees) {
            if (data_Add_emplyees?.succes) {
                toast.success(data_Add_emplyees.succes);
                setShowComponent(0);
            }
            if (data_Add_emplyees?.detail) {
                toast.info(data_Add_emplyees.detail);
            }
        }
    }, [isSuccess_Add_emplyees])



    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-gradient-to-b from-[#FAFDE0] to-red-100 rounded-lg max-w-3xl w-full flex overflow-hidden relative max-h-[90vh]">
                <button onClick={() => setShowComponent(0)} className="absolute bg-white rounded-full p-2 top-4 right-4 z-10 text-gray-600 border border-gray-200  shadow-md">
                    <X size={24} />
                </button>

                <form
                    onSubmit={handleSubmit}
                    className="w-full p-4 md:p-12 overflow-auto no-scrollbar">
                    <h1 className="text-3xl font-bold mb-4">Ajouter un employe</h1>

                    {/* Image Upload */}
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
                    {/* Form Section */}
                    <div className="w-full  mt-4">
                        <div className="space-y-4">
                            <div className="flex  gap-4">
                                <div className="w-full ">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        notation
                                    </label>
                                    <input
                                        type="range"
                                        name="notation"
                                        value={formData.notation}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 "
                                    />
                                </div>
                            </div>
                            <div className="flex  gap-4">
                                <div className="w-full ">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Catégories
                                    </label>
                                    <select
                                        name="document_id"
                                        value={formData.document_id}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  bg-transparent">
                                        {data_Get_Employe?.map((data) => (
                                            <option key={data._id} value={data._id}>{data.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="w-full ">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Nom de l'emplyoe
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
                            <div className="flex  gap-4">
                                <div className="w-full ">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Statut
                                    </label>
                                    <input
                                        type="text"
                                        name="statut"
                                        onChange={handleChange}
                                        value={formData.statut}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  bg-transparent"
                                    />
                                </div>
                                <div className="w-full ">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Aptitudes
                                    </label>
                                    <select
                                        name="utils"
                                        value={formData.utils}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  bg-transparent">
                                        <option value="ok">ok</option>
                                        <option value="ok">ok</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 space-y-4">
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#003A1E] text-white rounded-md font-medium transition-colors">
                            {isPending_Add_emplyees ? "Envoi en cours..." : "Soumettre"}
                        </button>

                    </div>
                </form>
                {/* Right content - visual examples */}
                <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[#FAFDE0] to-red-100 relative">
                    <div className="absolute inset-0 overflow-hidden">

                        <div className="absolute top-[10%] right-[10%] w-64 h-72 bg-[#003A1E] rounded-lg shadow-lg"></div>
                        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-white rounded-lg shadow-lg p-4"></div>
                        <div className="absolute top-[35%] left-[20%] w-56 h-64 bg-black rounded-lg shadow-lg p-6 text-white">
                            <div className="text-lg font-bold mt-4">
                                {/* LE MEILLEUR DU SHOPPING BONNES AFFAIRES */}
                            </div>
                        </div>
                        <div className="absolute bottom-[15%] right-[15%] w-40 h-40 bg-orange-300 rounded-full shadow-lg"></div>
                    </div>
                </div>
            </div>
        </div >
    )
}
