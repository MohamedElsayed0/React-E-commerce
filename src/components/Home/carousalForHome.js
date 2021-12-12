

import Carousel from 'react-bootstrap/Carousel';

const CarouselComponentForHome =({imgval})=>{
  return (

    <Carousel variant="dark" className="bg-dark" fade={false}>
  <Carousel.Item >
    <img
      className="img-fluid" style={{minHeight:"250px"}}
      src={imgval.imgUrl1}
      alt="First slide"
    />
  </Carousel.Item>
  {imgval.imgUrl2?(<Carousel.Item  >
    <img
      className="img-fluid" style={{minHeight:"250px"}}
      src={imgval.imgUrl2}
      alt="Second slide"
    />
  </Carousel.Item>):null}
  {imgval.imgUrl3?(<Carousel.Item  >
    <img
      className="img-fluid" style={{minHeight:"250px"}}
      src={imgval.imgUrl3}
      alt="Third slide"
    />
  </Carousel.Item>):null}

  {imgval.imgUrl4?(<Carousel.Item  >
    <img
      className="img-fluid" style={{minHeight:"250px"}}
      src={imgval.imgUrl4}
      alt="Third slide"
    />
  </Carousel.Item>):null}
</Carousel>
  )
}
export default CarouselComponentForHome;
