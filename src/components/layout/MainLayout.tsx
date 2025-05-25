import {Outlet} from 'react-router-dom'
import Header from "@/components/layout/main/Header.tsx";
import Footer from "@/components/layout/main/Footer.tsx";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header/>
            <main className="flex-grow max-w-7xl mx-auto w-full">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

export default MainLayout;