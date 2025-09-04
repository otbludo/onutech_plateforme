import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from "react-router-dom";
import { X, UploadIcon, PlusIcon } from 'lucide-react';

import { get_Projet } from '../../api/get/get_project';
import { Add_project } from "../../api/post/add_project";
import { Edit_project } from "../../api/put/edit_project";

const API_URL = import.meta.env.VITE_API_URL;

export function Form_Add_Produit({ setShowComponent, projectToEdit }) {
    const location = useLocation();
    let collectionName = "informatique";
    if (location.pathname.includes("BTP")) {
        collectionName = "BTP";
    }

    const { isPending: isPending_get_Projet, isError: isError_get_Projet, error: error_GetProjet, data: data_get_Projet } = get_Projet(collectionName);
    const { isPending: isPending_Add_project, isSuccess: isSuccess_Add_project, isError: isError_Add_project, error: error_Add_project, data: data_Add_project, mutate: mutate_Add_project } = Add_project();
    const { isPending: isPending_Edit_project, isSuccess: isSuccess_Edit_project, isError: isError_Edit_project, error: error_Edit_project, data: data_Edit_project, mutate: mutate_Edit_project } = Edit_project();

    const [previewImage, setPreviewImage] = useState(
        projectToEdit?.project?.image ? `${API_URL}/api/v1/images/${projectToEdit?.project?.image}` : null
    );

    const [formData, setFormData] = useState({
        collection: collectionName,
        document_id: projectToEdit?.document_id || (data_get_Projet?.[0]?._id || ""),
        image_file: null,
        title: projectToEdit?.project?.title || "",
        description: projectToEdit?.project?.description || "",
        link: projectToEdit?.project?.link || "",
        dueDate: projectToEdit?.project?.dueDate || ""
    });

    const fileInputRef = useRef(null); // ref pour déclencher le click

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
        fd.append("title", formData.title);
        fd.append("description", formData.description);
        fd.append("link", formData.link);
        fd.append("dueDate", formData.dueDate);

        if (formData.image_file instanceof File) {
            fd.append("image_file", formData.image_file);
        }

        if (projectToEdit?.project?.project_id) {
            fd.append("project_id", projectToEdit?.project?.project_id);
        }

        if (projectToEdit?.project) {
            mutate_Edit_project(fd);
        } else {
            mutate_Add_project(fd);
        }
    };

    if (isSuccess_Add_project) {
        if (data_Add_project?.detail[0].msg) {
            toast.error(data_Add_project?.detail[0].msg);
        }
        else if (data_Add_project?.detail) {
            toast.info(data_Add_project.detail);
        }
        else if (data_Add_project?.succes) {
            toast.success(data_Add_project.succes);
            setShowComponent(0);
        }

    }

    if (isSuccess_Edit_project) {
        if (data_Add_project?.detail[0].msg) {
            toast.error(data_Add_project?.detail[0].msg);
        }
        else if (data_Edit_project?.succes) {
            toast.success(data_Edit_project.succes);
            setShowComponent(0);
        }
    }

    if (isError_Add_project) {
        console.log('erreur:', error_Add_project)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-gradient-to-b from-[#FAFDE0] to-red-100 rounded-lg max-w-3xl w-full flex overflow-hidden relative max-h-[90vh]">
                <button onClick={() => setShowComponent(0)} className="absolute bg-white rounded-full p-2 top-4 right-4 z-10 text-gray-600 border border-gray-200  shadow-md">
                    <X size={24} />
                </button>

                <form onSubmit={handleSubmit} className="w-full p-4 md:p-12 overflow-auto no-scrollbar">
                    <h1 className="text-3xl font-bold mb-4">Ajouter un produit</h1>

                    {/* Image Upload */}
                    <div className="w-full border-b md:border-b-0 md:border-r border-gray-200">
                        <div className="h-full flex flex-col">
                            <h2 className="text-lg font-medium mb-4">Ajouter une image</h2>
                            <div className="relative flex-grow flex h-[200px] flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer"
                                onClick={openFileDialog} // clic ouvre l'input
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
                                    ref={fileInputRef} // associer le ref
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
                                        Nom du produit
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  bg-transparent"
                                    />
                                </div>
                                <div className="w-full ">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Catégories
                                    </label>
                                    <select
                                        name="document_id"
                                        value={formData.document_id}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  bg-transparent">
                                        {data_get_Projet?.map((data) => (
                                            <option key={data._id} value={data._id}>{data.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex  gap-4">
                                <div className="w-full ">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Lien
                                    </label>
                                    <input
                                        type="text"
                                        name="link"
                                        value={formData.link}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  bg-transparent"
                                    />
                                </div>
                                <div className="w-full ">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="dueDate"
                                        value={formData.dueDate}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  bg-transparent"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  h-24 bg-transparent resize-none"
                                />

                            </div>
                        </div>
                    </div>
                    <div className="mt-10 space-y-4">
                        <button
                            type="submit"
                            disabled={isPending_Add_project || isPending_Edit_project}
                            className="w-full py-3 bg-[#003A1E] text-white rounded-md font-medium transition-colors">
                            {isPending_Add_project || isPending_Edit_project ? "Envoi en cours..." : "Soumettre"}
                        </button>

                    </div>
                </form>
                {/* Right content - visual examples */}
                <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[#FAFDE0] to-red-100 relative">
                    <div className="absolute inset-0 overflow-hidden">

                        {/* <div className="absolute top-[10%] right-[10%] w-64 h-72 bg-purple-600 rounded-lg shadow-lg"></div> */}
                        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-white rounded-lg shadow-lg p-4"></div>
                        <div className="absolute top-[35%] left-[20%] w-56 h-64 bg-black rounded-lg shadow-lg p-6 text-white">
                            <div className="text-lg font-bold mt-4">
                                LE MEILLEUR DU SHOPPING BONNES AFFAIRES
                            </div>
                        </div>
                        <div className="absolute bottom-[15%] right-[15%] w-40 h-40 bg-orange-300 rounded-full shadow-lg"></div>
                        <div className="absolute bottom-[30%] right-[10%] w-40 h-72 bg-white rounded-3xl shadow-lg border-4 border-white p-2">
                            <div className="bg-[#003A1E] h-full w-full rounded-2xl"></div>
                        </div>
                        {/* <div className="absolute top-[15%] right-[30%] w-48 h-24 bg-white rounded-lg shadow-lg p-2">
                            <div className="text-xs text-gray-500">
                                PALETTE DE COULEURS DE MARQUE
                            </div>
                            <div className="flex gap-2 mt-2">
                                <div className="w-8 h-8 bg-black rounded"></div>
                                <div className="w-8 h-8 bg-purple-600 rounded"></div>
                                <div className="w-8 h-8 bg-orange-200 rounded"></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}
