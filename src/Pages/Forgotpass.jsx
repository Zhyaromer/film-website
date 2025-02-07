import React, { useState } from 'react';
import { Mail, KeyRound } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        setHasSubmitted(true)
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/password-reset', { email });
            if (response.status === 200) {
                toast.success(response.data.message, { transition: Slide, autoClose: 3000 })
            } else if (response.status === 400) {
                toast.error(response.data.message, { transition: Slide, autoClose: 3000 });
            } else if (response.status === 404) {
                toast.error(response.data.message, { transition: Slide, autoClose: 3000 });
            } else if (response.status === 409) {
                toast.error(response.data.message, { transition: Slide, autoClose: 3000 });
            } else {
                toast.error(response.data.message, { transition: Slide, autoClose: 3000 });
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
            toast.error(errorMessage || 'هەڵەیەک ڕوویدا تکایە دوبارە هەوڵ بدەوە', { transition: Slide, autoClose: 3000 });
        } finally {
            setHasSubmitted(false)
        }
    };

    return (
        <div dir="rtl" className="min-h-screen bg-[#282e30] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-[hsl(195,9%,22%)] shadow-lg rounded-xl p-8 space-y-6">
                <div className="text-center">
                    <KeyRound className="mx-auto h-12 w-12 text-sky-500 mb-4" />
                    <h2 className="text-3xl font-bold text-white">گۆڕینی وشەی نهێنی</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-white" />
                        </div>
                        <input
                            type="email"
                            placeholder="ئیمەیڵەکەت بنووسە"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full text-white bg-[hsl(195,9%,28%)] border-none pr-10 pl-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        {hasSubmitted ? (
                            <>
                                <div className="flex flex-row-reverse items-center justify-center gap-2">
                                    <div>
                                        <FaSpinner className="text-center animate-spin" size={20} />
                                    </div>
                                    <div>
                                        گۆڕینی وشەی نهێنی
                                    </div>
                                </div>
                            </>
                        ) : (
                            "گۆڕینی وشەی نهێنی"
                        )}
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-white text-md">
                        وشەی نهێنیت بیر کەوتەوە؟ <a href="/login" className="text-sky-500 hover:underline">بگەڕێوە بۆ چوونەژوورەوە</a>
                    </p>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default ForgotPassword;