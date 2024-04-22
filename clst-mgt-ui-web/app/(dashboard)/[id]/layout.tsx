import Image from "next/image";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    return  (
    <main role="main" className="w-full h-full flex-grow overflow-hidden p-1 bg-gray-900">
        {children}
    </main>)
};

export default DashboardLayout;
