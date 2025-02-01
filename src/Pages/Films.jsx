import React, { useState } from 'react';
import Navigation from '../components/Layout/Navigation.jsx'
import MultiSelect from '../components/Layout/Filters.jsx'
import FilmsCard from '../components/Layout/FilmsCard.jsx'
import Footer from '../components/Layout/Footer.jsx'

const Films = () => {
    const genre = [
        { id: 1, label: 'ئاکشن', value: 'ئاکشن' },
        { id: 2, label: 'ڕۆمانس', value: 'ڕۆمانس' },
        { id: 3, label: 'دراما', value: 'دراما' },
        { id: 4, label: 'مێژووی', value: 'مێژووی' },
        { id: 5, label: 'تاوانکاری', value: 'تاوانکاری' },
        { id: 6, label: 'تاوانکاری', value: 'تاوانکاری' }
    ];

    const year = [
        { id: 1, label: '2019', value: '2019' },
        { id: 2, label: '2020', value: '2020' },
        { id: 3, label: '2021', value: '2021' },
        { id: 4, label: '2022', value: '2022' },
        { id: 5, label: '2023', value: '2023' },
        { id: 6, label: '2024', value: '2024' },
        { id: 7, label: '2025', value: '2025' }
    ];

    const sorting = [
        { id: 1, label: 'تازەترین', value: 'newest' },
        { id: 2, label: 'پڕ بینەرترین', value: 'popularity' },
        { id: 3, label: 'ساڵ', value: 'yearofmovie' }
    ];

    return (
        <div className='bg-[#282e30]'>
            <Navigation />
            
            <div className="flex items-center justify-center mt-4 md:mt-10">
                <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-10 p-4">
                    <div>
                        <label className="block text-md text-right font-semibold text-sky-500 mb-2">ژانەر</label>
                        <MultiSelect options={genre} placeholder="ژانەرێک هەڵبژێرە" />
                    </div>
                    <div>
                        <label className="block text-md text-right font-semibold text-sky-500 mb-2">ساڵ</label>
                        <MultiSelect options={year} placeholder="ساڵێک هەڵبژێرە" />
                    </div>
                    <div>
                        <label className="block text-md text-right font-semibold text-sky-500 mb-2">ڕیزبەندی</label>
                        <MultiSelect options={sorting} placeholder="ڕیزبەندیەک هەڵبژێرە" />
                    </div>
                </div>
            </div>

            <div >
                <h2 className='text-xl text-right font-bold text-white px-6 py-2 pt-4'>فیلمەکان (٢٤٠)</h2>
            </div>

            <FilmsCard />

            <Footer />
        </div>
    )
}

export default Films