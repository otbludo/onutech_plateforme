import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Folder, Layout, X } from 'lucide-react';

export const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay (mobile seulement) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 h-full w-24 bg-white border-r border-gray-200 flex flex-col items-center z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:flex
        `}
      >
        {/* Header mobile avec bouton fermer */}
        <div className="flex justify-between items-center w-full px-2 py-2 border-b border-gray-200 md:hidden">
          <span className="font-bold text-sm">Menu</span>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Ton contenu sidebar existant */}
        <div className="flex flex-col items-center justify-center py-5 border-b border-gray-200 w-full">
          <button className="w-[77px] h-12 rounded-full flex items-center justify-center mb-1 ">
            <img src="./assets/img/logo.png" className="rounded-full w-full" alt="logo" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center py-5 border-b border-gray-200 w-full">
          <button
            onClick={() => { navigate('/'); onClose(); }}
            className="w-12 h-12 bg-[#B3B828] bg-opacity-50 rounded-full flex items-center justify-center mb-1 hover:bg-violet-200"
          >
            <Home size={24} className="text-[#E7BC20]" />
          </button>
          <span className="text-xs text-gray-600">Accueil</span>
        </div>

        <div className="flex flex-col items-center justify-center py-5 border-b border-gray-200 w-full">
          <button
            onClick={() => { navigate('/Informatique'); onClose(); }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-1 hover:bg-gray-100"
          >
            <Layout size={24} className="text-gray-600" />
          </button>
          <span className="text-xs text-gray-600">Modèles</span>
        </div>

        <div className="flex flex-col items-center justify-center py-5 border-b border-gray-200 w-full">
          <button
            onClick={() => { navigate('/BTP'); onClose(); }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-1 hover:bg-gray-100"
          >
            <Folder size={24} className="text-gray-600" />
          </button>
          <span className="text-xs text-gray-600">Projets</span>
        </div>
      </div>
    </>
  );
};
