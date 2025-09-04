import React, { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'react-toastify';
import { useLocation } from "react-router-dom";
import { Delete_project } from '../../api/delete/delete_project';

export function Confirm_Delete_Product({ setShowComponent, projectToDelete }) {
    const location = useLocation();
    let collectionName = "informatique";
    if (location.pathname.includes("BTP")) {
        collectionName = "BTP";
    }

    const { isPending, isError, isSuccess, error, data, mutate } = Delete_project();

    const [formData, setFormData] = useState({
        collection: collectionName,
        document_id: projectToDelete?.document_id,
        project_id: projectToDelete?.project?.project_id,
    })

    const handleSubmit = () => {
        mutate(formData)
    };

    if (isSuccess) {
        if (data?.succes) {
            toast.success(data.succes);
            setShowComponent(0);
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className='relative flex flex-col bg-gradient-to-b from-[#FAFDE0] to-red-100 gap-4 p-[20px] max-w-[400px] w-full h-auto rounded-2xl'>
                <div className="flex items-center">
                    <div className="flex gap-4 w-full items-center">
                        <img src="./assets/img/attention.png" alt="attention" className="w-[40px] h-auto rounded-full" />
                        <h1 className="text-xl font-bold mb-4">
                            Supprimer un produit
                        </h1>
                    </div>
                    <button
                        onClick={() => setShowComponent(0)}
                        className=" absolute bg-white rounded-full p-2  top-4 right-4 z-10 text-gray-600 border border-gray-200  shadow-md">
                        <X size={17} />
                    </button>
                </div>
                <p className="text-[14px] text-gray-600">Êtes-vous sûr de vouloir supprimer <span className="text-red-500 font-semibold">{projectToDelete?.project?.title}</span>?</p>
                <div className="flex gap-2 justify-end">
                    <button
                        onClick={() => setShowComponent(0)}
                        className="w-fit px-2 py-[5px] text-[13px] text-center bg-[#003A1E]   text-white rounded-md font-medium transition-colors">
                        annuler
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isPending}
                        className="w-fit px-2 py-[5px] text-[13px] text-center bg-red-600 text-white rounded-md font-medium transition-colors">
                        {isPending ? "Envoi en cours..." : "Soumettre"}
                    </button>
                </div>
            </div>
        </div>
    )
}
