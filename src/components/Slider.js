import imag1 from './images/imag-1.jpeg';
import imag2 from './images/imag-2.jpeg';
import imag3 from './images/imag-3.jpeg';
import './slider.css';

function Slider() {

  return(
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imag1}className="d-block w-100 landing" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imag2} className="d-block w-100 landing" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imag3} className="d-block w-100 landing" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Slider;