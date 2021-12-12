import { connect } from "react-redux";
import Item from "../Item/item";
import Masonry from 'react-masonry-css';
const Products = ({ products }) => {
  const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  780: 2,
  500: 1
};
  return (
    <div className="container pt-2">
      <div className="row justify-content-center">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className=" my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {products
            ? Object.entries(products).map(([key, value], i) => (
                <Item key={key} val={value} pID={key} />
              ))
            : null}
        </Masonry>

      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(Products);
