import { NavLink } from "react-router-dom";

const links = <>
<li><NavLink to="/add-product">Add Product</NavLink></li>
<li><NavLink to="/add-brand">Add Brand</NavLink></li>
</> 
const Sidebar = () => {
    <div className="w-2/12 bg-[#dedddd] h-screen text-black p-4">
    <h2 className="text-2xl font-semibold mb-4">Menu</h2>
    <ul>
      <li className="mb-2">
        <a href="/" className="block text-gray-300 hover:text-white">
          Home
        </a>
      </li>
    </ul>
  </div>

};
export default Sidebar;