import React,{useState,useEffect} from "react";
// import ReactImageMagnify from 'react-image-magnify';
const CarouselComponent =({imgval})=>{
  const [renderImg, setRenderImg] = useState('');
  useEffect(()=>{
    setRenderImg(imgval.imgUrl1)
  },[imgval])
  return (
      <div className="row ">
          <div className="row flex-column col-md-2 col-3">
            <div className="col-12 mb-2 text-center">
              <img className="img-fluid" src={imgval.imgUrl1} alt="one"  onMouseEnter={
                (e) => {setRenderImg(e.target.getAttribute("src"))}
              } style={{maxHeight:"200px"}}/>
            </div>

            {imgval.imgUrl2?(
              <div className="col-12 mb-2 text-center">
                <img className="img-fluid" src={imgval.imgUrl2} alt="two" onMouseEnter={
                  (e) => {setRenderImg(e.target.getAttribute("src"))}
                } style={{maxHeight:"200px"}}/>
              </div>
            ):null}

            {imgval.imgUrl3?(
              <div className="col-12 mb-2 text-center">
                <img className="img-fluid" src={imgval.imgUrl3} alt="three" onMouseEnter={
                  (e) => {setRenderImg(e.target.getAttribute("src"))}
                } style={{maxHeight:"200px"}}/>
              </div>
            ):null}

            {imgval.imgUrl4?(
              <div className="col-12 mb-2 text-center">
                <img className="img-fluid" src={imgval.imgUrl4} alt="three" onMouseEnter={
                  (e) => {setRenderImg(e.target.getAttribute("src"))}
                }/>
              </div>
            ):null}

          </div>

          <div className="col-md-10 col-9 text-center bg-white py-3">
            <img className="img-fluid" src={renderImg} alt="default"/>
          </div>

      </div>
  )
}
export default CarouselComponent;
