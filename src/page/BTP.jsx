import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Footer } from '../components/global/footer';
import { Sidebar } from '../components/global/sidebar';
import { Bar_search } from '../components/global/bar_search';
import { Button_contact } from "../components/global/button_contact";
import {Form_Add_Employee} from '../components/global/form_add_employee';
import { Form_Add_Produit } from '../components/global/form_add_product';
import { Home } from '../components/BTP/home';
import { Architecture } from '../components/BTP/architecture';
import { Construction } from '../components/BTP/construction';
import { Sponsor } from '../components/global/sponsor';
import { Employees } from '..//components/global/employees';
import { Projets } from "../components/global/projet_realises";
import { Confirm_Delete_Product } from '../components/global/confirm_delete_product';

const BTP = () => {
    const [showComponent, setShowComponent] = useState(0)
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div className='flex flex-col w-full h-screen  bg-gradient-to-r from-blue-50 to-[#FAFDE0]'>
                    <div className="flex h-screen overflow-hidden">
                        <div className="flex flex-col flex-1 px-[10px] md:px-[20px] md:pt-[20px] overflow-hidden">
                            <div className="flex-1 overflow-y-auto no-scrollbar shadow-0 md:shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.2)] rounded-t-2xl md:pt-6">
                                <Bar_search />
                                <Home />
                                <Construction />
                                <Architecture />
                                <Sponsor />
                                <Employees setShowComponent={setShowComponent} />
                                <Projets setShowComponent={setShowComponent} />
                            </div>
                        </div>
                        {(showComponent?.id == 1) && <Form_Add_Produit setShowComponent={setShowComponent} projectToEdit={showComponent} />}
                        {(showComponent?.id == 2) && <Confirm_Delete_Product setShowComponent={setShowComponent} elementToDelete={showComponent} />}
                        {(showComponent?.id == 3) && <Form_Add_Employee setShowComponent={setShowComponent} employeeToEdit={showComponent}/>}
                        <Button_contact />
                        <ToastContainer position="bottom-center" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BTP;
