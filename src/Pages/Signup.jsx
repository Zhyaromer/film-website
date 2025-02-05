import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Navigation from '../components/@Layout/Navigation.jsx'
import axios from 'axios';

const Signuppage = () => {
    const [name, setName] = useState('');
    const [username, setusername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { name, username, email, password });
            console.log(response.status);
            if (response.status === 201) {
                console.log('Signup successful');
            } else if (response.status === 400) {
                console.log(response.data.message);
            } else{
                console.log(response.data.message);
            }
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    return (

        <div>
            <Navigation />
            <div className='bg-[#282e30] min-h-screen flex items-center justify-center'>
                <div className="bg-[hsl(195,9%,15%)] lg:mt-6 p-8 rounded-xl shadow-2xl w-[92%] max-w-lg">
                    <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-sky-500">
                        دروستکردنی هەژماری نوێ
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sky-500 text-right mb-2">
                                ناو
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-[hsl(195,9%,28%)] px-4 py-3 border text-white placeholder:text-gray-300 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                                placeholder="ناوی خۆت بنووسە"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="displayName" className="block text-sky-500 text-right mb-2">
                                نازناو
                            </label>
                            <input
                                type="text"
                                id="displayName"
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                                className="w-full bg-[hsl(195,9%,28%)] px-4 py-3 border text-white placeholder:text-gray-300 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                                placeholder="نازناوەکەت بنووسە"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sky-500 text-right mb-2">
                                ئیمەیڵ
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[hsl(195,9%,28%)] px-4 py-3 border text-white placeholder:text-gray-300 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
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
                                    className="w-full bg-[hsl(195,9%,28%)] text-white placeholder:text-gray-300 px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12 text-right"
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
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-sky-700 transition duration-300 text-lg"
                        >
                            دروستکردن
                        </button>
                        <div className="text-center">
                            <p className="text-white text-sm">
                                پێشتر هەژمارت هەیە؟{' '}
                                <a href="#" className="text-sky-400 hover:underline font-semibold">
                                    چوونەژوورەوە
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signuppage;