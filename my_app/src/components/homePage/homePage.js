import './homePage.css';
import ItemFooter from '../itemFooter/itemFooter';
import Slider from '../slider/slider';
import SliderProducts from '../sliderProducts/sliderProducts';

const HomePage = () => {
    return(
        <>
            <Slider id='slider'/>
            <SliderProducts />
            <ItemFooter />
        </>
    );
}

export default HomePage;