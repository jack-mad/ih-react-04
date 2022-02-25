import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Contact() {
  return (
      <>
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Contact
          </h2>
          <p className="mt-5 text-xl text-gray-400">
          Página de contacto
          </p>
        </div>
        <img className="w-2/3" src="https://images8.alphacoders.com/292/thumb-1920-292117.jpg" />
      </div>
    </div>
    <Outlet />
    </>
  )
}
