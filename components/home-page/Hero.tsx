import { ProductCard } from "../card/product-card";

const HomePageHero = () => {
    return ( 
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  space-2 overflow-scroll h-max w-screen p-10 m-1 gap-4 justify-center items-center">
            <ProductCard/><ProductCard/><ProductCard/><ProductCard/>
        </div>
     );
}
 
export default HomePageHero;