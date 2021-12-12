import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import "./AutoComplete.css";

const AutoComplete = ({ categorys }) => {
  let history = useHistory();
  const [options, setOptions] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  React.useEffect(() => {
    let ar = [];
    if (categorys) {
      categorys.map((val) => {
        ar.push(val.name);
        return setOptions(ar);
      });
    }
  }, [categorys]);
  return (
    <Autocomplete
      className="w-100 Autocomplete"
      size="small"
      onChange={(event, newValue) => {
        setValue(newValue);
        if (newValue == null) {
          history.push(history.location.pathname);
        } else {
          history.push(`/oneCategory/${newValue}`);
        }
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label="What Are You Looking For ?"
          InputLabelProps={{ className: "lable" }}
        />
      )}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    categorys: state.category,
  };
};
export default connect(mapStateToProps)(AutoComplete);
