import React from 'react';
import {LuSearch} from 'react-icons/lu';
import {PiDotsThreeOutlineVerticalFill} from 'react-icons/pi';

const Search = ({classname = 'py-5'}) => {
  return (
    <>
      <div className="relative flex justify-between">
        <span className="absolute top-1/2 -translate-y-1/2 left-3 cursor-pointer text-auth_font_color">
          <LuSearch />
        </span>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          className={`${classname} shadow-lg`}
        />
        <span className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-auth_bg_color">
          <PiDotsThreeOutlineVerticalFill />
        </span>
      </div>
    </>
  );
};

export default Search;
