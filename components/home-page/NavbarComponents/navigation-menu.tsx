"use client"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const NavigationMenu = () => {
    return ( 
        <Button variant="ghost" >
            <Menu className="text-black dark:text-white"/>
        </Button>
     );
}
 
export default NavigationMenu;