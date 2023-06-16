import { useState } from "react";
import { Select } from "../select";
import { useQuery } from "react-query";
import { getCountries } from "../../getCountries";
import { getCurrency } from "../../getCurrency";


const SearchBar = () => {
  const [value, setValue] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const query = useQuery({
    queryKey: ["countries", value],
    queryFn: () => getCountries(value),
    enabled: value ? true : false,
  });

  const code = useQuery({
    queryKey: ["currency", countryCode],
    queryFn: () => getCurrency(countryCode),
    enabled: countryCode ? true : false,
  });

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clickHandler = (code) => {
    // setValue(targetValue);
    setCountryCode(code);
  };

  const country = query.data?.data?.data?.results;
  // console.log(country);

  return (
    <div className="bg-[#E8F4FF] py-[30px] px-5 h-full flex flex-col items-center small:w-full small:rounded-2xl medium:rounded-2xl large:rounded-2xl xLarge:rounded-2xl xxLarge:rounded-2xl">
      <Select
        data={country}
        onChange={onChange}
        clickHandler={clickHandler}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
