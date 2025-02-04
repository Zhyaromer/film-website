import React from 'react';

const SimilarSeries = ({ series }) => {
    return (
        <div className='px-2 lg:px-12 mt-8'>
            <div className='bg-[hsl(195,9%,14%)] shadow-sm rounded-lg pb-8'>
                {series.map((item, index) => (
                    <div key={index} className="mb-0 pt-12 lg:px-8 px-2">
                        <div className="w-full">
                            <div className='mb-4 pr-2'>
                                <h4 className="text-xl md:text-2xl font-bold text-right text-white">
                                {item.title}
                                </h4>
                            </div>
                            <hr className='border border-gray-600 w-[100%]' />
                            <div className='flex flex-row-reverse gap-2 lg:gap-4 mt-4 p-1 items-start'>
                                <div>
                                    <img
                                        className='w-[150px] lg:h-[195px] h-[185px] rounded-lg'
                                        src={item.imageUrl}
                                        alt={item.title}
                                    />
                                </div>
                                <div dir='rtl' className='w-[90%] flex flex-row flex-wrap justify-start gap-2 lg:gap-4'>
                                    {item.episodes.map((episode, episodeIndex) => (
                                        <div
                                            key={episodeIndex}
                                            className='cursor-pointer lg:w-[100px] lg:h-[88px] border border-gray-600 rounded-md border-white p-4 flex flex-col items-center justify-center gap-1'
                                        >
                                            <div>
                                                <p className='text-white lg:text-2xl'>ئەڵقەی</p>
                                            </div>
                                            <div>
                                                <p className='text-sky-500 text-xl lg:text-2xl font-semibold'>{episode}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarSeries;