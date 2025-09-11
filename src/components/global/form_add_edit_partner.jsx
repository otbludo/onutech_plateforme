import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from "react-router-dom";
import { X, UploadIcon, PlusIcon } from 'lucide-react';

import { Get_partner } from '../../api/get/get_partner';
import { Add_partner } from '../../api/post/add_partner';
import { Edit_partner } from '../../api/put/edit_partner';
const API_URL = import.meta.env.VITE_API_URL;

export const Form_Add_Edit_Partner = ({ setShowComponent, partnerToEdit }) => {
    const location = useLocation();
    let collectionName = "Cadre";
    if (location.pathname.includes("BTP")) {
        collectionName = "BTP";
    }
    if (location.pathname.includes("Informatique")) {
        collectionName = "Informatique";
    }

    const { data: data_Get_partner } = Get_partner();
    const { isPending: isPending_Add_partner, isSuccess: isSuccess_Add_partner, isError: isError_Add_partner, error: error_Add_partner, data: data_Add_partner, mutate: mutate_Add_partner } = Add_partner();
    const { isPending: isPending_Edit_partner, isSuccess: isSuccess_Edit_partner, isError: isError_Edit_partner, error: error_Edit_partner, data: data_Edit_partner, mutate: mutate_Edit_partner } = Edit_partner();

    const [formData, setFormData] = useState({
        document_id: partnerToEdit?.document_id || (data_Get_partner?.find(d =>
            collectionName == "Cadre" ? d.title === "partner_General" :
                collectionName == "BTP" ? d.title === "partner_BTP" :
                    collectionName == "Informatique" ? d.title === "partner_informatique" :
                        false
        )?._id || ""),
        name: partnerToEdit?.partner?.name || ""
    });

    const [previewImage, setPreviewImage] = useState(
        partnerToEdit?.partner?.image ? `${API_URL}/api/v1/images/${partnerToEdit?.partner?.image}` : null
    );
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
    console.log(data_Get_partner)
    const handleSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("document_id", formData.document_id);
        fd.append("name", formData.name);

        if (formData.image_file instanceof File) {
            fd.append("image_file", formData.image_file);
        }

        if (partnerToEdit?.partner?.partner_id) {
            fd.append("partner_id", partnerToEdit?.partner?.partner_id);
        }

        if (partnerToEdit?.partner) {
            mutate_Edit_partner(fd);
            console.log(partnerToEdit?.partner?.partner_id)
            console.log(partnerToEdit?.document_id)
        } else {
            mutate_Add_partner(fd)
        }
    };


    useEffect(() => {
        if (isSuccess_Add_partner) {
            if (data_Add_partner?.succes) {
                toast.success(data_Add_partner.succes);
                setShowComponent(0);
            }
            if (data_Add_partner?.detail) {
                toast.info(data_Add_partner.detail);
            }
        }

        if (isSuccess_Edit_partner) {
            if (data_Edit_partner?.succes) {
                toast.success(data_Edit_partner.succes);
                setShowComponent(0);
            }
            if (data_Edit_partner?.detail) {
                toast.info(data_Edit_partner.detail);
            }
        }
    }, [isSuccess_Add_partner, isSuccess_Edit_partner])

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[1000]">
            <div className="bg-gradient-to-b from-[#FAFDE0] to-red-100 rounded-lg max-w-3xl w-full flex overflow-hidden relative max-h-[90vh]">
                <button onClick={() => setShowComponent(0)} className="absolute bg-white rounded-full p-2 top-4 right-4 z-10 text-gray-600 border border-gray-200  shadow-md">
                    <X size={24} />
                </button>
                <form
                    onSubmit={handleSubmit}
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
                                <div className="w-full ">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Catégories
                                    </label>
                                    <select
                                        name="document_id"
                                        value={formData.document_id}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-transparent"
                                    >
                                        {data_Get_partner
                                            ?.filter((data) => {
                                                if (collectionName == "Cadre") {
                                                    return data.title === "partner_General";
                                                }
                                                if (collectionName == "BTP") {
                                                    return data.title === "partner_BTP";
                                                }
                                                if (collectionName == "Informatique") {
                                                    return data.title === "partner_informatique";
                                                }
                                                return false;
                                            })
                                            .map((data) => (
                                                <option key={data._id} value={data._id}>
                                                    {data.title}
                                                </option>
                                            ))}
                                    </select>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-10 space-y-4">
                        <button
                            type="submit"
                            disabled={isPending_Add_partner || isPending_Edit_partner}
                            className="w-full py-3 bg-[#003A1E] text-white rounded-md font-medium transition-colors">
                            {isPending_Add_partner || isPending_Edit_partner ? "Envoi en cours..." : "Soumettre"}
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
