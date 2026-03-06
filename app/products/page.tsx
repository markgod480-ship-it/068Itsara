import ProductCard from "./ProductCard"

interface ProductItem {
  id: string;   // เปลี่ยนจาก number เป็น string
  rate: number;
  price: number;
  img: string;
  name: string;
  dsc: string;
  country: string;
}
const ProductPage = async () => {

  const res = await fetch("https://free-food-menus-api-two.vercel.app/drinks")
  const products: ProductItem[] = await res.json()
  //console.log(products)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  )
}

export default ProductPage