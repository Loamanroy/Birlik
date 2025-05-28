import {Outlet} from 'react-router-dom'
import BankHeader from "@/components/layout/bank/BankHeader.tsx";
import Footer from "@/components/layout/main/Footer.tsx";

const BankLayout = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <BankHeader/>
            <main className="flex-grow w-full px-4 py-6">
                <Outlet/>
            </main>
            <Footer />
        </div>
    );
}

export default BankLayout;
