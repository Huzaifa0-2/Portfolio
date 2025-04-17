import React from 'react'

const Login = () => {
  return (
    <div> <div className="min-h-screen bg-gray-100">
    <div className="flex items-center justify-center p-4">
      <form className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden p-8 mt-30">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
        
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter admin username"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Sign In
        </button>
      </form>
    </div>
  </div></div>
  )
}

export default Login