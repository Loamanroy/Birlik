import {Outlet} from 'react-router-dom'
import BankHeader from "@/components/layout/bank/BankHeader.tsx";
import Footer from "@/components/layout/main/Footer.tsx";

const BankLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <BankHeader/>
            <main className="flex-grow max-w-7xl mx-auto w-full">
                <Outlet/>
            </main>
            <Footer />
        </div>
    );
}

export default BankLayout;