import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Folder, Layout } from 'lucide-react';

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-24 bg-white border-r border-gray-200 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center py-5 border-b border-gray-200 w-full">
        <button className="w-[77px] h-12 rounded-full flex items-center justify-center mb-1 ">
          <img src="./assets/img/logo.png" className="rounded-full w-full" alt="" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center py-5 border-b border-gray-200 w-full">
        <button
          onClick={() => navigate('/')}
          className="w-12 h-12 bg-[#B3B828] bg-opacity-50 rounded-full flex items-center justify-center mb-1 hover:bg-violet-200">
          <Home size={24} className="text-[#E7BC20]" />
        </button>
        <span className="text-xs text-gray-600">Accueil</span>
      </div>
      <div className="flex flex-col items-center justify-center py-5 border-b border-gray-200 w-full">
        <button
          onClick={() => navigate('/Informatique')}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-1 hover:bg-gray-100">
          <Layout size={24} className="text-gray-600" />
        </button>
        <span className="text-xs text-gray-600">Modèles</span>
      </div>
      <div className="flex flex-col items-center justify-center py-5 border-b border-gray-200 w-full">
        <button
          onClick={() => navigate('/BTP')}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-1 hover:bg-gray-100">
          <Folder size={24} className="text-gray-600" />
        </button>
        <span className="text-xs text-gray-600">Projets</span>
      </div>

    </div>
  )
}
