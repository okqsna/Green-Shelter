import './HomePage.css';
import Header from './Header/Header';
import SwiperHomePage from './SwiperHomePage/SwiperHomePage';
const HomePage=()=>{
    return(
        <div className='HomePage'>
            <Header/>
            <SwiperHomePage/>
        </div>
    )
}
export default HomePage;