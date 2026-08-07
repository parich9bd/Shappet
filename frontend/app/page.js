import Blog from "@/Components/Module/Blog/Blog";
import EpicItems from "@/Components/Module/EpicItems/EpicItems";
import LableView from "@/Components/Module/LableView/LableView";
import PetTools from "@/Components/Module/PetTools/PetTools";
import Products from "@/Components/Module/Products/Products";
import SpecialFood from "@/Components/Module/SpecialFoodForm/SpecialFood";
import SpecialProducts from "@/Components/Module/SpecialProducts/SpecialProducts";
import SearchResult from "@/Components/Module/SearchResult/SearchResult";
import HomeContent from "@/Components/Module/HomeContent/HomeContent";

export default function Page() {
  return (
    <>
      <HomeContent />

      <LableView />
      <SpecialFood />
      <Products />
      <SpecialProducts />
      <EpicItems />
      <PetTools />
      <Blog />
    </>
  );
}