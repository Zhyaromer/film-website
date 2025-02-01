import MoviesCard from '../components/@Layout/MoviesCard.jsx';
import Footer from '../components/@Layout/Footer.jsx'
import Navigation from '../components/@Layout/Navigation.jsx'

const MovieSeries = () => {
    return (
        <div className="bg-[#282e30]">
            <Navigation />
            <div className="mb-4 mt-12 px-4 flex justify-end items-center">
                <h4 className="text-2xl md:text-2xl font-bold text-center text-white">زنجیرە فیلمەکان</h4>
            </div>
            <MoviesCard />

            <Footer />
        </div>
    )
}
export default MovieSeries