"use client"
import { ModeToggle } from "./NavbarComponents/mode-toggle";
import Cart from "./NavbarComponents/navigation-cart";
import NavigationCategories from "./NavbarComponents/navigation-categories";
import NavigationHelpAndSupport from "./NavbarComponents/navigation-help&support";
import NavigationLogin from "./NavbarComponents/navigation-log-in";
import NavigationMenu from "./NavbarComponents/navigation-menu";
import Searchbar from "./NavbarComponents/navigation-searchbar";
import NavigationSignin from "./NavbarComponents/navigation-sign-in";
import SpecialOffer from "./NavbarComponents/navigation-special-offer";

const HompageNavbar = () => {
    return ( 
    <div className="flex items-center justify-between flex-1 w-full overflow-x-scroll sm:overflow-x-scroll  dark:bg-emerald-300 dark:text-black lg:overflow-x-auto bg-gradient-to-r from-teal-800 to-emerald-200 fixed top-20">        
   { /*<ScrollArea className="w-full gap-4 space-x-4 ">*/}     
        <NavigationMenu/>
        <Searchbar/>
        <NavigationCategories/>
        <Cart/>
        <SpecialOffer/>
        <NavigationHelpAndSupport/>
        <NavigationSignin/>
        <NavigationLogin/>
        <ModeToggle/>
        
        {/*<ScrollBar orientation="horizontal" />*/}

    {/*</ScrollArea>*/}
    </div>

        
     );
}
 
export default HompageNavbar;