import { useProducts } from "@/store/productStore";

import HomeSection from "@/pages/home/HomeSection";

const Home = () => {
  const { products } = useProducts();

  const approvedProducts = products.filter(
    (product) => product.status === "APPROVED",
  );

  const phones = approvedProducts.filter(
    (product) => product.category === "Phones",
  );

  const electronics = approvedProducts.filter(
    (product) => product.category === "Electronics",
  );
  const furniture = approvedProducts.filter(
    (product) => product.category === "Furniture",
  );

  const clothes = approvedProducts.filter(
    (product) => product.category === "Clothes",
  );

  return (
    <div className="p-6 w-full ml-6 pr-12">
      <h1 className="teHomeSectiont-3HomeSectionl font-bold mb-8">
        Welcome to Hahu Marketplace
      </h1>

      <HomeSection title="Phones" products={phones} />

      <HomeSection title="Electronics" products={electronics} />

      <HomeSection title="Furniture" products={furniture} />

      <HomeSection title="Clothes" products={clothes} />
    </div>
  );
};

export default Home;
