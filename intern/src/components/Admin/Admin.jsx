import React from 'react';

const Admin = () => {
  return (
    <div>
            <div className="min-h-screen bg-black">
                <div className="flex items-center justify-center p-4">
                    <form  className="w-full max-w-md bg-neutral-950 rounded-xl shadow-md border-2 border-orange-600 overflow-hidden p-8 mt-30">
                        <h2 className="text-2xl font-bold text-center text-white mb-6"><span className='text-orange-600'>Add </span>Project</h2>

                        <div className="mb-6">
                            <label htmlFor="title" className="block text-sm font-medium text-white mb-1">
                                Title
                            </label>
                            <input
                                required
                                type="text"
                                id="title"
                                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="githublink" className="block text-sm font-medium text-white mb-1">
                                Drop Project Link
                            </label>
                            <input
                                type="text"
                                id="githublink"
                                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="description" className="block text-sm font-medium text-white mb-1">
                                Description
                            </label>
                            <textarea   
                                type="text"
                                id="description"
                                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg border border-orange-600 shadow-md shadow-orange-600 transition duration-200 hover:shadow-none"
                        >
                            Add to Portfolio
                        </button>
                    </form>
                </div>
            </div>
        </div>
  );
};

export default Admin;