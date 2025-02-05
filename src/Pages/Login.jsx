import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Navigation from '../components/@Layout/Navigation.jsx'

const Loginpage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt', { email, password });
    };

    return (
        <div className='bg-[#282e30] '>
            <Navigation />
            <div className='h-screen'>
                <div className='mt-14 lg:mt-12 flex items-center justify-center p-4'>
                    <div className="bg-[hsl(195,9%,15%)] p-8 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-2xl font-bold text-center mb-6 text-sky-500">
                            چوونەژوورەوە
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sky-500 text-right mb-2">
                                    ئیمەیڵ
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[hsl(195,9%,28%)] px-3 py-2 border text-white placeholder:text-white border-gray-500 focus:border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                                    placeholder="ئیمەیڵەکەت بنووسە"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sky-500 text-right mb-2">
                                    تێپەڕەوشە
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-[hsl(195,9%,28%)] text-white placeholder:text-white px-3 py-2 border border-gray-500 focus:border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 text-right"
                                        placeholder="تێپەڕەوشەکەت بنووسە"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute text-white inset-y-0 left-0 px-3 flex items-center"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                            <div className="text-right">
                                <a href="#" className="text-sky-400 hover:underline text-sm">
                                    تێپەڕەوشەت لەبیرچووەتەوە؟
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-sky-600 transition duration-300"
                            >
                                چوونەژوورەوە
                            </button>
                            <div className="text-center space-y-2">
                                <p className="text-white text-sm">
                                    هێشتا هەژمارت نییە؟{' '}
                                    <a href="#" className="text-sky-400 hover:underline">
                                        تۆمارکردن
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;