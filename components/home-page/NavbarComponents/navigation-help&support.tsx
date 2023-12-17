"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavigationHelpAndSupport = () => {
    return ( 
        <DropdownMenu  >
                <DropdownMenuTrigger  className="border-0 hover:border-0">
                    <Button variant="ghost" >Help & Support <RiArrowDropDownLine/></Button> 
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {/*<DropdownMenuLabel>Help & Support</DropdownMenuLabel>*/}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Help Center</DropdownMenuItem>
                        <DropdownMenuItem>Chat with Us</DropdownMenuItem>
                        <DropdownMenuItem>Call with Us at 0000000000</DropdownMenuItem>
                        <DropdownMenuItem>Shipping & Delivery</DropdownMenuItem>
                        <DropdownMenuItem>Order</DropdownMenuItem>
                        <DropdownMenuItem>Payment</DropdownMenuItem>
                        <DropdownMenuItem>Return & Refund</DropdownMenuItem>
                        <DropdownMenuItem>Complaint Management System</DropdownMenuItem>
                </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default NavigationHelpAndSupport;