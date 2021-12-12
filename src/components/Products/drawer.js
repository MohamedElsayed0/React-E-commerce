import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { connect } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
const ResponsiveDrawer = ({ filterProduct, products, location }) => {
  const { name } = useParams();
  const [brand, setBrand] = useState([]);
  let curntProduct = [];
  let brandIn = [];

  useEffect(() => {
    curntProduct = filterProduct;
  }, [filterProduct, name]);

  useEffect(() => {
    if (name && products) {
      curntProduct.map(([key, value], i) => {
        brandIn.push(value.Brand);
      return  setBrand(brandIn);
      });
    }
  }, [filterProduct]);

  return (
    <List className="d-flex" style={{overflowX: "scroll"}}>
      {brand
        ? [...new Set(brand)].map((value, index) => (
            <NavLink
              className="nav-link p-0 text-secondary mx-1"
              to={`${location}?brand=${value}`}
              key={index}
            >
              <ListItem disablePadding>
                <ListItemButton className="rounded text-white" style={{background:"rgba(51, 71, 86,.3)"}}>
                  <ListItemText primary={value} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))
        : null}

    </List>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(ResponsiveDrawer);
