import CarouselComponentForHome from "./carousalForHome.js";
import { Link } from "react-router-dom";

const imgs = {
  imgUrl1:"https://cms.souqcdn.com/cms/boxes/img/desktop/1566824849_HP-15-Laptops-CMB-en.jpg",
  imgUrl2:"https://cms.souqcdn.com/cms/boxes/img/desktop/1564423133_Cat-MB-Kingston-v2-en%20%281%29.jpg",
  imgUrl3:"https://cms.souqcdn.com/cms/boxes/img/desktop/1568631109_iPhones_CBM_en.jpg",
}
const Home = () => {
  return (
    <div className="Home container-fluid">
        <div className="row justify-content-center">
            <div className="col-12">
              <CarouselComponentForHome imgval={imgs} />
            </div>

            <div className="col-md-3 col-6 auto-width text-center pt-3">
              <p className="p-3 fw-bold text-white bg-dark">All your home needs</p>
            </div>

            <div className="col-12 row text-center justify-content-center ">

                <div className="col-md-6 col-12">
                  <Link to="/oneCategory/Home-Decor">
                      <img className="img-fluid" src="https://cms.souqcdn.com/cms/boxes/img/desktop/1542650158_1%20%284%29.jpg" alt={"home1"}/>
                  </Link>
                  <h6 className="pt-1"> Home Decor</h6>
                </div>

                <div className="col-md-6 col-12 row ">

                  <div className="col-md-6 col-12 text-center">
                    <Link to="/oneCategory/Shoes-Racks">
                        <img className="img-fluid" src="https://cms.souqcdn.com/cms/boxes/img/desktop/1542650158_2%20%283%29.jpg" alt={"home1"}/>
                    </Link>
                    <h6 className="pt-1">Shoes Racks</h6>
                  </div>

                  <div className="col-md-6 col-12">
                    <Link to="/oneCategory/Cleaning">
                        <img className="img-fluid" src="https://cms.souqcdn.com/cms/boxes/img/desktop/1542650158_4%20%283%29.jpg" alt={"home1"}/>
                    </Link>
                    <h6 className="pt-1">Cleaning</h6>
                  </div>
                  <div className="col-md-6 col-12">
                    <Link to="/oneCategory/Bean-Bags">
                        <img className="img-fluid" src="https://cms.souqcdn.com/cms/boxes/img/desktop/1542650158_5%20%283%29.jpg" alt={"home1"}/>
                    </Link>
                    <h6 className="pt-1">Bean Bags</h6>
                  </div>
                  <div className="col-md-6 col-12">
                    <Link to="/oneCategory/Storage">
                      <img className="img-fluid" src="https://cms.souqcdn.com/cms/boxes/img/desktop/1542650158_3%20%283%29.jpg" alt={"home1"}/>
                    </Link>
                    <h6 className="pt-1">Storage & Home Supplies</h6>
                  </div>
                </div>

            </div>

            <div className="col-md-3 col-6 col-3 auto-width text-center pt-3">
              <p className="p-3 fw-bold text-white bg-dark">Go Ahead</p>
            </div>

            <div className="col-12 row text-center">
                  <div className="col-md-3 col-12">
                      <Link to="/oneCategory/Sunglasses">
                          <img className="img-fluid" src="https://cf1.walker.souqcdn.com/hodor/campaigns/1558260753-248182076.jpg" alt={"home1"}/>
                      </Link>
                      <h6 className="pt-1">Sunglasses</h6>
                  </div>
                  <div className="col-md-3 col-12">
                      <Link to="/oneCategory/Watches">
                          <img className="img-fluid" src="https://cf4.walker.souqcdn.com/hodor/campaigns/1559084794-248182076.jpg" alt={"home1"}/>
                      </Link>
                      <h6 className="pt-1">Watches</h6>
                  </div>
                  <div className="col-md-3 col-12">
                      <Link to="/oneCategory/BackPacks">
                          <img className="img-fluid" src="https://cms.souqcdn.com/cms/boxes/img/desktop/1569243306_4.jpg" alt={"home1"}/>
                      </Link>
                      <h6 className="pt-1">BackPacks</h6>
                  </div>
                  <div className="col-md-3 col-12">
                      <Link to="/oneCategory/Car-Seats">
                          <img className="img-fluid" src="https://cf3.walker.souqcdn.com/hodor/campaigns/1569761416-4217794395.jpg" alt={"home1"}/>
                      </Link>
                      <h6 className="pt-1">Car Seats</h6>
                  </div>
            </div>

            <div className="col-12 text-center mt-3">
              <Link to="/oneCategory/Hair-Trimmer">
                  <img className="img-fluid" src="https://cf3.walker.souqcdn.com/hodor/campaigns/1569943519-1017146970.jpg" alt={"home1"}/>
              </Link>
              <h6 className="pt-1">Hair Trimmer</h6>
            </div>

            <div className="col-12 row text-center mt-3">
                  <div className="col-md-3 col-12">
                      <Link to="/oneCategory/Beauty-Tools">
                          <img className="img-fluid" src="https://cf5.walker.souqcdn.com/hodor/campaigns/1569847290-4217794395.jpg" alt={"home1"}/>
                      </Link>
                      <h6 className="pt-1">Beauty Tools</h6>
                  </div>
                  <div className="col-md-3 col-12">
                      <Link to="/oneCategory/Deodorants">
                          <img className="img-fluid" src="https://cf1.walker.souqcdn.com/hodor/campaigns/1569846986-4217794395.jpg" alt={"home1"}/>
                      </Link>
                      <h6 className="pt-1">Deodorants</h6>
                  </div>
                  <div className="col-md-3 col-12">
                      <Link to="/oneCategory/BackPacks">
                          <img className="img-fluid" src="https://cf3.walker.souqcdn.com/hodor/campaigns/1569764418-4217794395.jpg" alt={"home1"}/>
                      </Link>
                      <h6 className="pt-1">Beverages</h6>
                  </div>

                  <div className="col-md-3 col-12">
                      <Link to="/oneCategory/Food">
                          <img className="img-fluid" src="https://cf1.walker.souqcdn.com/hodor/campaigns/1569760691-4217794395.jpg" alt={"home1"}/>
                      </Link>
                      <h6 className="pt-1">Food</h6>
                  </div>
            </div>


        </div>
    </div>
  )
};

export default Home;
