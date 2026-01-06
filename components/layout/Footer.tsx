import React from "react";


const Footer: React.FC = () => {
return (
<footer className="bg-gray-50 border-t mt-12">
<div className="max-w-7xl mx-auto px-4 py-8 text-sm text-gray-600">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div>© {new Date().getFullYear()} ALXListings. All rights reserved.</div>
<div className="flex gap-4">
<a href="#">About</a>
<a href="#">Contact</a>
<a href="#">Privacy</a>
</div>
</div>
</div>
</footer>
);
};


export default Footer;