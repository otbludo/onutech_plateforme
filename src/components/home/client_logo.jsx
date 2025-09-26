import React from 'react';
import { PlusIcon, Pencil, Trash } from 'lucide-react';

import { ClientLogosSkeleton } from '../global/loader/loader_client';
import { Get_partner } from "../../api/get/get_partner";
const API_URL = import.meta.env.VITE_API_URL;

export const ClientLogos = ({ setShowComponent }) => {
  const { isPending, isSuccess, error, data } = Get_partner();

  const partner = (Array.isArray(data) ? data : []).flatMap(group =>
    group.title === "partner_General"
      ? group.partners.map(part => ({
        ...part,
        _id: group._id,
      }))
      : []
  ) || [];


  return (
    <section className="w-full py-16 mt-8 px-4 mt-[100px]">
      <div className=" mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4  arsenal-sc-regular">
         Nos clients
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Decouvrez nos client et les produit que nous avons realise en parcourant la plateform !
        </p>

        <div className="flex justify-end items-end max-w-5xl mx-auto mb-4">
          <button
            disabled={isPending}
            onClick={() => setShowComponent({ id: 4 })}
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:bg-gray-50 shadow-md">
            <PlusIcon size={20} className="text-gray-500" />
          </button>
        </div>
        {/* Logos en flex-wrap */}
        <div className="flex w-full justify-center items-center">
          {isPending ? (<ClientLogosSkeleton />) : (
            <div className="flex flex-wrap gap-8 max-w-4xl justify-center items-center">
              {partner.length > 0 ? (
                partner.map((part, index) => (
                  <div
                    key={index}
                    className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 shadow-sm"
                  >
                    <img
                      src={`${API_URL}/api/v1/images/${part.image}`}
                      alt={`Client logo`}
                      className="w-full object-contain rounded-full"
                    />
                    <div className="absolute flex gap-1 -right-6 -bottom-4 z-[1000]">
                      <button
                        onClick={() => setShowComponent({ id: 4, partner: part, document_id: part._id })}
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 hover:bg-gray-50 shadow-md">
                        <Pencil size={15} className="text-gray-500" />
                      </button>
                      <button
                        onClick={() => setShowComponent({ id: 2, element: part, document_id: part._id, partner_delete: true })}
                        className="w-8 h-8 -mt-6 rounded-full bg-white flex items-center justify-center border border-red-200 hover:bg-gray-50 shadow-md">
                        <Trash size={15} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Aucun partenaire trouvé</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
