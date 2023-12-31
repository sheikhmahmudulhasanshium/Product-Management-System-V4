"use client"
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Searchbar = () => {
    return (

        <Button variant="ghost" className="justify-between lg:w-4/12 rounded-xl bg-slate-500 dark:bg-white">
            <p>Search...</p>
            <Search className=""/>
        </Button>
     );
}
 
export default Searchbar;