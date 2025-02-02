import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'

const News = () => {
    return (
        <div className='bg-[#282e30]'>
            <Navigation />

            <div className="mb-2 mt-4 px-8 md:mb-4 text-right">
                <h4 className="text-xl md:text-3xl font-bold text-right text-white">نوێترین هەواڵەکان</h4>
            </div>

            <div className='flex flex-wrap flex-row justify-center'>
                <div className='w-full md:w-[33%] flex justify-center flex-wrap mt-8'>
                    <div className='bg-[hsl(195,9%,20%)] w-[90%] p-2 rounded-xl'>
                        <div >
                            <img className='rounded-lg' src="https://cdn.europosters.eu/image/750/posters/blade-runner-2049-flying-car-i50060.jpg" alt="" />
                        </div>
                        <div dir='rtl' className='p-4'>
                            <h1 className='text-sky-500 mb-4 text-2xl font-bold'>هەواڵی ئەمڕۆمان</h1>
                            <p className='text-white text-lg'>لە کاتی جەنگی جیهانی دووەم، جێگری ژەنەڕاڵ لێسلی گرۆڤس  </p>
                        </div>

                        <div className='flex justify-center'>
                            <hr className='bg-red-500 w-80' />
                        </div>

                        <div className='flex flex-row justify-between p-4'>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div>
                                    <p className='text-white text-lg font-semibold'>2000</p>
                                </div>
                                <div>
                                    <i className="fa-solid fa-user text-white"></i>
                                </div>
                            </div>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div>
                                    <p className='text-white text-md font-semibold'>دوو ڕۆژ لەمەو پێش</p>
                                </div>
                                <div>
                                    <i className="fa-solid text-md fa-user text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[33%] flex justify-center flex-wrap mt-8'>
                    <div className='bg-[hsl(195,9%,20%)] w-[90%] p-2 rounded-xl'>
                        <div >
                            <img className='rounded-lg' src="https://cdn.europosters.eu/image/750/posters/blade-runner-2049-flying-car-i50060.jpg" alt="" />
                        </div>
                        <div dir='rtl' className='p-4'>
                            <h1 className='text-sky-500 mb-4 text-2xl font-bold'>هەواڵی ئەمڕۆمان</h1>
                            <p className='text-white text-lg'>لە کاتی جەنگی جیهانی دووەم، جێگری ژەنەڕاڵ لێسلی گرۆڤس  </p>
                        </div>

                        <div className='flex justify-center'>
                            <hr className='bg-red-500 w-80' />
                        </div>

                        <div className='flex flex-row justify-between p-4'>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div>
                                    <p className='text-white text-lg font-semibold'>2000</p>
                                </div>
                                <div>
                                    <i className="fa-solid fa-user text-white"></i>
                                </div>
                            </div>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div>
                                    <p className='text-white text-md font-semibold'>دوو ڕۆژ لەمەو پێش</p>
                                </div>
                                <div>
                                    <i className="fa-solid text-md fa-user text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[33%] flex justify-center flex-wrap mt-8'>
                    <div className='bg-[hsl(195,9%,20%)] w-[90%] p-2 rounded-xl'>
                        <div >
                            <img className='rounded-lg' src="https://cdn.europosters.eu/image/750/posters/blade-runner-2049-flying-car-i50060.jpg" alt="" />
                        </div>
                        <div dir='rtl' className='p-4'>
                            <h1 className='text-sky-500 mb-4 text-2xl font-bold'>هەواڵی ئەمڕۆمان</h1>
                            <p className='text-white text-lg'>لە کاتی جەنگی جیهانی دووەم، جێگری ژەنەڕاڵ لێسلی گرۆڤس  </p>
                        </div>

                        <div className='flex justify-center'>
                            <hr className='bg-red-500 w-80' />
                        </div>

                        <div className='flex flex-row justify-between p-4'>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div>
                                    <p className='text-white text-lg font-semibold'>2000</p>
                                </div>
                                <div>
                                    <i className="fa-solid fa-user text-white"></i>
                                </div>
                            </div>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div>
                                    <p className='text-white text-md font-semibold'>دوو ڕۆژ لەمەو پێش</p>
                                </div>
                                <div>
                                    <i className="fa-solid text-md fa-user text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default News