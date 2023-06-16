import { Select } from "../select";
const fakeData = [{ label: "label", value: "value" }];

const SearchBar = () => {
  // const query = useQuery({
  //   queryKey: ["countries", value],
  //   queryFn: () => getCountries(value),
  //   enabled: value ? true : false,
  // });

  // const sag = useQuery({
  //   queryKey: ["currency", countryCode],
  //   queryFn: () => getCurrency(countryCode),
  //   enabled: countryCode ? true : false,
  // });

  return (
    <div className="bg-[#E8F4FF] py-[30px] px-5 h-full flex flex-col items-center small:w-full small:rounded-2xl medium:rounded-2xl large:rounded-2xl xLarge:rounded-2xl xxLarge:rounded-2xl">
      <Select data={fakeData} />
    </div>
  );
};

export default SearchBar;
