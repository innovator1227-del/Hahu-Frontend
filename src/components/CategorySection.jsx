import { Link } from "react-router-dom"

const CategorySection = ({ title, products }) => {

  if (products.length === 0) return null

  return (
    <section className="mb-10">

      <div className="flex justify-between items-center mb-5">

  <h2 className="text-2xl font-bold">
    {title}
  </h2>

  <Link
    to={`/browse?category=${title}`}
    className="text-blue-600"
  >
    View All →
  </Link>

</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {products.slice(0,4).map((product)=>(

          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">

              <h3 className="font-semibold">
                {product.title}
              </h3>

              <p className="text-blue-600 font-bold">
                {product.price} ETB
              </p>

              <p className="text-gray-500 text-sm">
                {product.description}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  )
}

export default CategorySection