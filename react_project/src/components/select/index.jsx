import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useOnClickOutside } from "../../utiles/useClickOutside";

const Select = ({ data }) => {
  const [value, setValue] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [countryCode, setCountryCode] = useState("");

  const selectRef = useRef(null);
  useOnClickOutside(selectRef, () => {
    setShowDropDown(false);
  });

  const onChange = (event) => {
    setValue(event.target.value);
  };

  // const country = query.data?.data?.data?.results;
  // console.log(country);

  const clickHandler = (code) => {
    // setValue(targetValue);
    setCountryCode(code);
  };

  const clickHandleDropDown = () => {
    setShowDropDown(true);
  };

  return (
    <div
      className="w-11/12 h-auto px-5 rounded-2xl flex flex-col medium:w-8/12 xLarge:w-1/2 bg-white"
      ref={selectRef}
    >
      <section
        className="w-full h-10 my-5 flex items-center"
        onClick={clickHandleDropDown}
      >
        <div className="flex w-full">
          <span className="w-10 h-full hidden medium:flex items-center">
            <i className="uil uil-search-alt text-xl text-blue-800"></i>
          </span>
          <input
            type="text"
            value={value}
            onChange={onChange}
            className="w-full h-full font-medium focus:outline-none medium:pr-2"
            placeholder="جستجوی کشورها..."
          />
        </div>
      </section>
      {showDropDown ? (
        <section className="w-full max-h-[200px] overflow-auto flex flex-col gap-y-2">
          {data?.map((item, index) => {
            return (
              <div key={index} className="w-full h-10 flex items-center">
                <p
                  className="font-medium text-base cursor-pointer"
                  onClick={() => clickHandler(item.item.code)}
                >
                  {item.value}
                </p>
              </div>
            );
          })}
        </section>
      ) : null}
    </div>
  );
};

export { Select };

Select.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};
