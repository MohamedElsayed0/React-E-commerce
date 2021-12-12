import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Item from "../Item/item";
import ResponsiveDrawer from "./../Products/drawer";
import Masonry from 'react-masonry-css';

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const OneCategory = ({ productss, location }) => {
  let query = useQuery().get("brand");

  const [filterProduct, setFilterProducts] = useState([]);
  const [curntProduct, setCurntProduct] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    if (name) {
      setFilterProducts(
        Object.entries(productss).filter(([key, value], i) =>
          value.category.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        )
      );
      setCurntProduct(
        Object.entries(productss).filter(([key, value], i) =>
          value.category.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        )
      );
    }
    if (query) {
      setFilterProducts(
        Object.entries(productss).filter(([key, value], i) =>
          value.Brand.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
      );
    }
  }, [name, productss, query]);

  const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  780: 2,
  500: 1
};

  return (
    <div>
      <div className="container">
        <div className="row align-items-start justify-content-between">

          <div className="col-12 bg-white ">
            <nav aria-label="main mailbox folders" className="p-1">
              <h1
                className="p-1 pb-3 rounded"
                style={{ color: "#334756" }}
              >
                {name}
              </ h1>
              <h5 className="p-1 mt-1 ">
                <span
                  className="p-1 pb-2 rounded text-white"
                  style={{ background: "#334756" }}
                >
                  Brand
                </span>
              </h5>
              <ResponsiveDrawer
                location={location.pathname}
                name={name}
                filterProduct={curntProduct}
              />
            </nav>
          </div>

          <div className="col-12">


            <Masonry
                breakpointCols={breakpointColumnsObj}
                className=" my-masonry-grid mt-3"
                columnClassName="my-masonry-grid_column"
            >
                {filterProduct.map(([key, value], i) => {
                  return <Item key={i} pID={key} val={value} />;
                })}
            </Masonry>

          </div>

        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    productss: state.products,
  };
};
export default connect(mapStateToProps)(OneCategory);
