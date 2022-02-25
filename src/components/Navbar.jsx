import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-yellow-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-10 w-auto"
                src="https://img.icons8.com/fluency/48/000000/bmo.png"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
                <Link to="/" className="text-base font-medium text-white hover:text-indigo-50">Home</Link>
                <Link to="/about" className="text-base font-medium text-white hover:text-indigo-50">About</Link>
                <Link to="/contact" className="text-base font-medium text-white hover:text-indigo-50">Contact</Link>
                <Link to="/images" className="text-base font-medium text-white hover:text-indigo-50">Images</Link>
            </div>
          </div>
          {/* <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div> */}
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <Link to="/" className="text-base font-medium text-white hover:text-indigo-50">Home</Link>
                <Link to="/about" className="text-base font-medium text-white hover:text-indigo-50">About</Link>
                <Link to="/contact" className="text-base font-medium text-white hover:text-indigo-50">Contact</Link>
                <Link to="/images" className="text-base font-medium text-white hover:text-indigo-50">Images</Link>
        </div>
      </nav>
    </header>
    </>
  );
};


export default Navbar;