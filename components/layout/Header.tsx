import React from "react";


const Header: React.FC = () => {
return (
<header className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center py-4">
<div className="flex items-center gap-4">
<div className="text-2xl font-bold">ALXListings</div>
<nav className="hidden md:flex gap-3 text-sm text-gray-600">
<a href="#" className="hover:text-gray-900">Rooms</a>
<a href="#" className="hover:text-gray-900">Villa</a>
<a href="#" className="hover:text-gray-900">Countryside</a>
<a href="#" className="hover:text-gray-900">Mansion</a>
</nav>
</div>


<div className="flex items-center gap-3">
<div className="hidden sm:block">
<input
type="text"
placeholder="Search location, city or property"
className="border rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-300"
aria-label="search"
/>
</div>


<div className="flex items-center gap-2">
<button className="text-sm px-3 py-2">Sign in</button>
<button className="bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm">Sign up</button>
</div>
</div>
</div>
</div>
</header>
);
};


export default Header;