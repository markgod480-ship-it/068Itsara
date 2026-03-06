import Image from "next/image"

interface ProductItem {
  id: string;   // เปลี่ยนจาก number เป็น string
  rate: number;
  price: number;
  img: string;
  name: string;
  dsc: string;
  country: string;
}

interface ProductProps {
  product :ProductItem
}


const ProductCard = ({product} : ProductProps) => { //กำหนดค่าที่รับมาจาก page
  return (
    <>
        <div className="border-2 border-gray-300 p-3 mt-4">
          <Image className="mx-auto" src={product.img} alt="Product" width={200} height={200}/>  {/* mx-auto ทำให้รูปภาพอยู่ตรงกลาง */}
          <h2 className="text-center font-bold">{product.name}</h2>
            <div className="flex items-center justify-center gap-10 mt-3">
                <h2>{product.price}</h2>
                <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700">Add to Card</button>
            </div>
        </div>
    </>
  )
}
export default ProductCard