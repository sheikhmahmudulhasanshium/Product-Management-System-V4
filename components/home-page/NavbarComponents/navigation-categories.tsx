"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavigationCategories = () => {
    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger  className="border-0 hover:border-0">
                <Button variant="ghost" >Categories <RiArrowDropDownLine/></Button>
            </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {/*<DropdownMenuLabel>Categories</DropdownMenuLabel>*/}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Category 1</DropdownMenuItem>
                        <DropdownMenuItem>Category 1</DropdownMenuItem>
                        <DropdownMenuItem>Category 1</DropdownMenuItem>
                        <DropdownMenuItem>Category 1</DropdownMenuItem>
                </DropdownMenuContent>
        
        </DropdownMenu>
     );
}
 
export default NavigationCategories;