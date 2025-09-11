import React from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, Pencil, Trash } from 'lucide-react';

import { EmployeesSkeleton } from "./loader/loader_employee";

import { Get_Employe } from '../../api/get/get_employe';
const API_URL = import.meta.env.VITE_API_URL;


export const Employees = ({ setShowComponent }) => {
  const location = useLocation();
  let collectionName = "Cadre";
  if (location.pathname.includes("BTP")) {
    collectionName = "BTP";
  }
  if (location.pathname.includes("Informatique")) {
    collectionName = "Informatique";
  }

  const { isPending, isSuccess, error, data } = Get_Employe(collectionName);
  const employees = data?.flatMap(group =>
    group.employees.map(emp => ({
      ...emp,
      _id: group._id, // on rattache le document parent
    }))
  ) || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 arsenal-sc-regular">Découvrez les</h1>
        <h1 className="text-5xl font-bold text-gray-800 mb-6 arsenal-sc-regular">Employees</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Find the best master for your company and boosts your business 10x!
        </p>
      </div>
      <div className="flex justify-end items-end max-w-5xl mx-auto mb-4">
        <button
          onClick={() => setShowComponent({ id: 3 })}
          className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:bg-gray-50 shadow-md">
          <PlusIcon size={20} className="text-gray-500" />
        </button>
      </div>
      {/* Profiles */}
      {isPending ? (<EmployeesSkeleton />) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {employees?.map((emp) => (
            <div
              key={emp._id}
              className={`bg-white rounded-lg p-6 flex flex-col items-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,50,150,0.2)] transition duration-300 hover:border-2 border-white hover:bg-[rgba(0,50,150,0.2)]`}
            >
              <div className="w-24 h-24 mb-4">
                <img
                  src={`${API_URL}/api/v1/images/${emp.image}`}
                  alt={emp.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 
                  1.371 1.24.588 1.81l-2.8 2.034a1 1 0 
                  00-.364 1.118l1.07 3.292c.3.921-.755 
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 
                  00-1.175 0l-2.8 2.034c-.784.57-1.838-
                  .197-1.539-1.118l1.07-3.292a1 1 0 
                  00-.364-1.118L2.98 8.72c-.783-.57-
                  .38-1.81.588-1.81h3.461a1 1 0 
                  00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-700 ml-1">{emp.notation} / 100</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-1">
                {emp.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{emp.statut}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {emp.utils.map((utils, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                  >
                    {utils}
                  </span>
                ))}
              </div>
              <div className="flex w-full gap-4 items-end justify-end">
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
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <img src="./assets/img/logo.png" alt="Assignee" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
