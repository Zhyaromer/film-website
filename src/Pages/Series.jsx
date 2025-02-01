import React, { useState } from 'react';
import Navigation from '../components/@Layout/Navigation.jsx'
import MultiSelect from '../components/@UI/Filtersinput.jsx'
import FilmsCard from '../components/@Layout/FilmsCard.jsx'
import Footer from '../components/@Layout/Footer.jsx'
import FiltersOption from '../helpers/FiltersOption.jsx'

const Series = () => {
    const { genre, year, sorting } = FiltersOption();

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
                <h2 className='text-xl md:text-3xl text-right font-bold text-white px-6 pt-5 pb-0'>زنجیرەکان (٢٤٠)</h2>
            </div>

            <FilmsCard />

            <Footer />
        </div>
    )
}

export default Series