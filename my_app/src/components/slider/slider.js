/** BOOTSTRAP */
import Carousel from 'react-bootstrap/Carousel';
import hombeBanner1 from '../../assets/slider/5740-HomeBanner.jpg';
import hombeBanner2 from '../../assets/slider/327-Hombre-HomeBanner.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Slider() {
  return (
    <Carousel variant="dark" controls={false} interval={2000} slide={true} >
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={hombeBanner1}
              alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={hombeBanner2}
              alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={hombeBanner1}
              alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
  );
}

export default Slider;