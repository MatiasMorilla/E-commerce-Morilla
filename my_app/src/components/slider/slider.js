import Carousel from 'react-bootstrap/Carousel';
import hombeBanner1 from '../../assets/slider/5740-HomeBanner.jpg';
import hombeBanner2 from '../../assets/slider/327-Hombre-HomeBanner.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Slider() {
  return (
    <Carousel variant="dark">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={hombeBanner1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={hombeBanner2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={hombeBanner1}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default Slider;