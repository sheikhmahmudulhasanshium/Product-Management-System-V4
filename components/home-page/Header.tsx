import Image from "next/image";

const HomePageHeader = () => {
    return ( 
        <div className=" flex items-center justify-center w-full space-x-2 text-center from-emerald-950 bg-gradient-to-r to-teal-500 fixed top-0">
        <Image src={"/Sample_Pic.png"} alt={"Company Logo"} width={100} height={100} quality={100} className="h-auto bg-transparent animate-spin w-15"/>
        <p className="italic font-bold bg-transparent lg:text-4xl md:text-2xl sm:lg">Product Management System</p>
    </div>
     );
}
 
export default HomePageHeader;