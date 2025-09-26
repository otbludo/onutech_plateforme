import { Menu } from 'lucide-react';

export const Show_Menu_Phone = ({ setSidebarOpen }) => {
    return (
        <div className="md:hidden flex items-center justify-between px-4 py-3">
            <button onClick={() => setSidebarOpen(true)}>
                <Menu size={28} />
            </button>
            <span className="font-bold text-lg">Onutech</span>
        </div>
    )
}