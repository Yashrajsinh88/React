import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to EShop</h1>
          <p className="text-gray-600 mb-8">
            Your one-stop destination for all your shopping needs. Browse our
            collection of premium products and enjoy a seamless shopping
            experience.
          </p>
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold text-lg"
          >
            Start Shopping
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Premium Quality</h2>
            <p className="text-gray-600">
              All our products are carefully selected to ensure the highest
              quality and durability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Fast Shipping</h2>
            <p className="text-gray-600">
              We offer quick and reliable shipping to get your products to you
              as soon as possible.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">
              Customer Satisfaction
            </h2>
            <p className="text-gray-600">
              Our top priority is your satisfaction, with easy returns and 24/7
              customer support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
