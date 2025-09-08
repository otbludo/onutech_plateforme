import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
// import { Footer } from '../components/global/footer';
import { Sidebar } from '../components/global/sidebar';
import { Menu } from 'lucide-react';

import { Button_contact } from "../components/global/button_contact";
import { Resume } from '../components/home/resume';
import { ClientLogos } from '../components/home/client_logo';
import { FAQ } from '../components/home/FAQ'
import { Form_Add_Employee } from '../components/global/form_add_employee';
import { Confirm_Delete_Product } from '../components/global/confirm_delete_product';
import { Homecomponent } from '../components/home/home';
import {Form_Add_Edit_Partenaire} from '../components/global/form_add_edit_partner';

const Home = () => {
    const [showComponent, setShowComponent] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className='flex'>
                {/* Sidebar */}
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

                <div className='flex flex-col w-full bg-gradient-to-r from-blue-50 to-[#FAFDE0]'>
                    
                    {/* Header mobile avec menu hamburger */}
                    <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200">
                        <button onClick={() => setSidebarOpen(true)}>
                            <Menu size={28} />
                        </button>
                        <span className="font-bold text-lg">Onutech</span>
                    </div>

                    <div className="flex h-screen overflow-hidden">
                        <div className="flex flex-col flex-1 px-[10px] md:px-[20px] md:pt-[20px] overflow-hidden">
                            <div className="flex-1 overflow-y-auto no-scrollbar md:shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.2)] rounded-t-2xl md:pt-6">
                                <Homecomponent setShowComponent={setShowComponent} />
                                <Resume />
                                <ClientLogos setShowComponent={setShowComponent}/>
                                <FAQ />
                            </div>
                        </div>

                        {(showComponent?.id == 2) && (
                            <Confirm_Delete_Product setShowComponent={setShowComponent} elementToDelete={showComponent} />
                        )}
                        {(showComponent?.id == 3) && (
                            <Form_Add_Employee setShowComponent={setShowComponent} employeeToEdit={showComponent} />
                        )}

                         {(showComponent?.id == 4) && (<Form_Add_Edit_Partenaire setShowComponent={setShowComponent} />)}
                        <Button_contact />
                        <ToastContainer position="bottom-center" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
