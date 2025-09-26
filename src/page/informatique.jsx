import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Footer } from '../components/global/footer';
import { Sidebar } from '../components/global/sidebar';
import { Technologie } from '../components/informatique/technologie';
import { Bar_search } from '../components/global/bar_search';
import { Projets } from "../components/global/projet_realises";
import { Button_contact } from "../components/global/button_contact";
import { Exemple_code } from '../components/informatique/exemple_code';
import { Form_Add_Employee } from '../components/global/form_add_employee';
import { Form_Add_Produit } from '../components/global/form_add_product';
import { Confirm_Delete_Product } from '../components/global/confirm_delete_product';
import { Employees } from '..//components/global/employees';
import { Sponsor } from '../components/global/sponsor';
import { Form_Add_Edit_Partner } from '../components/global/form_add_edit_partner';
import { Show_Menu_Phone } from '../components/global/menu_phone';

const Informatique = () => {
  const [showComponent, setShowComponent] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className='flex'>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className='flex flex-col w-full  bg-gradient-to-r from-blue-50 to-[#FAFDE0]'>
          <Show_Menu_Phone setSidebarOpen={setSidebarOpen} />
          <div className="flex h-screen overflow-hidden">
            <div className="flex flex-col flex-1 px-[10px] md:px-[20px] md:pt-[20px] overflow-hidden">
              <div className="flex-1 overflow-y-auto no-scrollbar md:shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.2)] rounded-t-2xl md:pt-6">
                <Bar_search />
                <Technologie />
                <Exemple_code />
                <Sponsor setShowComponent={setShowComponent} />
                <Employees setShowComponent={setShowComponent} />
                <Projets setShowComponent={setShowComponent} />
              </div>
            </div>
            {(showComponent?.id == 1) && <Form_Add_Produit setShowComponent={setShowComponent} projectToEdit={showComponent} />}
            {(showComponent?.id == 2) && <Confirm_Delete_Product setShowComponent={setShowComponent} elementToDelete={showComponent} />}
            {(showComponent?.id == 3) && <Form_Add_Employee setShowComponent={setShowComponent} employeeToEdit={showComponent} />}
            {(showComponent?.id == 4) && (<Form_Add_Edit_Partner setShowComponent={setShowComponent} partnerToEdit={showComponent} />)}
            <Button_contact />
            <ToastContainer position="bottom-center" />
          </div>

        </div>

      </div>
    </>
  )
}

export default Informatique;
