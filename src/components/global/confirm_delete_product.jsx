import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { toast } from 'react-toastify';
import { useLocation } from "react-router-dom";
import { Delete_project } from '../../api/delete/delete_project';
import { Delete_employee } from '../../api/delete/delete_employee';

export function Confirm_Delete_Product({ setShowComponent, elementToDelete }) {
    const location = useLocation();
    let collectionName = "Cadre";
    if (location.pathname.includes("BTP")) {
        collectionName = "BTP";
    }
    if (location.pathname.includes("Informatique")) {
        collectionName = "Informatique";
    }

    const { isPending: isPending_Delete_project, isError: isError_Delete_project, isSuccess: isSuccess_Delete_project, error: error_Delete_project, data: data_Delete_project, mutate: mutate_Delete_project } = Delete_project();
    const { isPending: isPending_Delete_employee, isError: isError_Delete_employee, isSuccess: isSuccess_Delete_employee, error: error_Delete_employee, data: data_Delete_employee, mutate: mutate_Delete_employee } = Delete_employee();

    const [formData, setFormData] = useState({
        collection: collectionName,
        document_id: elementToDelete?.document_id,
        ...(elementToDelete?.element?.project_id && { project_id: elementToDelete.element.project_id }),
        ...(elementToDelete?.element?.employee_id && { employee_id: elementToDelete.element.employee_id }),
    })

    const handleSubmit = () => {
        console.log('elementToDelete:', elementToDelete);
        if (elementToDelete?.emplyoye_delete) {
            mutate_Delete_employee(formData)
            console.log('data_employee_send:', formData)
        } else {
            mutate_Delete_project(formData)
        }
    };

    useEffect(() => {
        if (isSuccess_Delete_project || isSuccess_Delete_employee) {
            if (data_Delete_project?.succes || data_Delete_employee?.succes) {
                toast.success(data_Delete_project?.succes || data_Delete_employee?.succes);
                setShowComponent(0);
            }

            if (data_Delete_project?.detail || data_Delete_employee?.detail) {
                toast.info(data_Delete_project?.detail || data_Delete_employee?.detail);
                // setShowComponent(0);
            }
        }
        
    }, [isSuccess_Delete_project, isSuccess_Delete_employee]);

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
                <p className="text-[14px] text-gray-600">Êtes-vous sûr de vouloir supprimer <span className="text-red-500 font-semibold">{elementToDelete?.element?.title || elementToDelete?.element?.name}</span>?</p>
                <div className="flex gap-2 justify-end">
                    <button
                        onClick={() => setShowComponent(0)}
                        className="w-fit px-2 py-[5px] text-[13px] text-center bg-[#003A1E]   text-white rounded-md font-medium transition-colors">
                        annuler
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isPending_Delete_project || isPending_Delete_employee}
                        className="w-fit px-2 py-[5px] text-[13px] text-center bg-red-600 text-white rounded-md font-medium transition-colors">
                        {isPending_Delete_project || isPending_Delete_employee ? "Envoi en cours..." : "Soumettre"}
                    </button>
                </div>
            </div>
        </div>
    )
}
