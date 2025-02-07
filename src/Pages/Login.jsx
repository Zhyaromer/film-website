import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Navigation from '../components/@Layout/Navigation.jsx'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../Firebase/frontendfb.js';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSpinner } from 'react-icons/fa';

const Loginpage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigate();
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        setHasSubmitted(true)
        e.preventDefault();
        try {
            const credentials = await signInWithEmailAndPassword(auth, email, password);
            const id = await credentials.user.getIdToken();
            const response = await axios.post('http://localhost:5000/api/auth/login', { email }, {
                headers: {
                    Authorization: `Bearer ${id}`
                },
                withCredentials: true
            });
            if (response.status === 200) {
                navigation('/')
            }
            else if (response.status === 400) {
                toast.error(response.data.message, { transition: Slide, autoClose: 3000 });
            } else if (response.status === 404) {
                toast.error(response.data.message, { transition: Slide, autoClose: 3000 });
            } else if (response.status === 401) {
                toast.error(response.data.message, { transition: Slide, autoClose: 3000 });
            } else if (response.status === 400) {
                toast.error(response.data.message, { transition: Slide, autoClose: 3000 });
            } else {
                toast.error(response.data.message, { transition: Slide, autoClose: 3000 });
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
            toast.error(errorMessage, { transition: Slide, autoClose: 3000 });
        } finally {
            setHasSubmitted(false);
        }
    };

    return (
        <div className='bg-[#282e30]'>
            <Navigation />
            <div className='h-screen'>
                <div className='mt-14 lg:mt-12 flex items-center justify-center p-4'>
                    <div className="bg-[hsl(195,9%,15%)] p-8 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-2xl font-bold text-center mb-6 text-sky-500">
                            چوونەژوورەوە
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-lg text-sky-500 text-right mb-2">
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
                                <label htmlFor="password" className="block text-lg text-sky-500 text-right mb-2">
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
                                        className="other-class absolute text-white inset-y-0 left-0 px-3 flex items-center"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                            <div className="text-right">
                                <a href="/forgotpassword" className="text-sky-400 hover:underline text-md">
                                    وشەی نهێنیت لەبیرچووەتەوە؟
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-sky-600 transition duration-300"
                            >
                                {hasSubmitted ? (
                                    <>
                                        <div className="flex items-center justify-center gap-2">
                                            <div>
                                                <FaSpinner className="text-center animate-spin" size={20} />
                                            </div>
                                            <div>
                                                چوونەژوورەوە
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    "چوونەژوورەوە"
                                )}
                            </button>
                            <div className="text-center space-y-2">
                                <p className="text-white text-md">
                                    هێشتا هەژمارت نییە؟{' '}
                                    <a href="signup" className="text-sky-400 hover:underline">
                                        تۆمارکردن
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Loginpage;