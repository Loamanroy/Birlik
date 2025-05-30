import {Outlet} from 'react-router-dom'
import Header from "@/components/layout/main/Header.tsx";
import Footer from "@/components/layout/main/Footer.tsx";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
            <Header/>
            <main className="flex-grow max-w-7xl mx-auto w-full px-4">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

export default MainLayout;
