import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const AddProduct = () => {


  const [brandNames, setBrandNames] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');

  // Fetch brand names from the API
  useEffect(() => {
    fetch('http://localhost:5000/brands')
      .then((response) => response.json())
      .then((data) => {
        const brandNameList = data.map((brand) => brand.brandName);
        setBrandNames(brandNameList);
      })
      .catch((error) => {
        console.error('Error fetching brand names: ', error);
      });
  }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageUrl =form.imageUrl.value;
    const name =form.name.value;
    const brand =form.brand.value;
    const type =form.type.value;
    const price =parseFloat(form.price.value);
    const description =form.description.value;
    const rating =parseFloat(form.rating.value);
    const  Product = {imageUrl, name, brand, type, price, description, rating};
    console.log('Product Data:', Product);

  fetch('http://localhost:5000/products', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(Product)
})
.then(res => {
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
})
.then(data => {
    console.log(data);
    if(data.insertedId){
      alert("Product Add successfully");
      form.reset();
    }
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
}
  return (

    <div className="flex">
  {/* Sidebar */}
  <div className="w-2/12 bg-[#e2e2e2] h-screen text-black p-4">
    <h2 className="text-2xl font-semibold mb-4">Menu</h2>
    <ul>
      <li className="mb-2">
        <a href="/" className="block text-black hover:text-black">
          Home
        </a>
      </li>
    </ul>
  </div>
  {/* Main content */}
  <div className="w-/12 bg-white p-4 shadow-md rounded-lg">
    <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-600">
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="block text-sm font-medium text-gray-600">
            Brand Name
          </label>
          <select
            id="brand"
            name="brand"
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="" disabled>Select a brand</option>
            {brandNames.map((brandName, index) => (
              <option key={index} value={brandName}>
                {brandName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-600">
            Type
          </label>
          <select
            id="type"
            name="type"
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="headphone">Headphone</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Short Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-600">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
            min="1"
            max="5"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded hover-bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          Add Product
        </button>
      </form>
    <Link to="/add-brand">
      <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300">
        Add Brand
      </button>
    </Link>
  </div>
</div>
  );
};
export default AddProduct;