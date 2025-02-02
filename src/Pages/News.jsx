import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'
import NewsTemplateComponent from '../components/@Layout/NewsTemplate.jsx'

const News = () => {
    return (
        <div className='bg-[#282e30]'>
            <Navigation />

            <div className="mb-2 mt-4 px-8 md:mb-4 text-right">
                <h4 className="text-xl md:text-3xl font-bold text-right text-white">نوێترین هەواڵەکان</h4>
            </div>

           <NewsTemplateComponent />

            <Footer />
        </div>
    )
}

export default News