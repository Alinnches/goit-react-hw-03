import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.searchContainer}>
      <label className={s.findLabel} htmlFor="">
        Find me by name
        <input
          className={s.searchField}
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
