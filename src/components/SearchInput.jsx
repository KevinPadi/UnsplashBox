/* eslint-disable react/prop-types */
import { useState } from "react";
import { SearchIcon } from "../assets/Icons";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ variant }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/results/search/${searchQuery}`);
    }
  };

  const paddingClasses = variant === "home" ? "py-3 sm:py-3" : "p-1"
  const isVisibleClasses = variant === "hamburguerMenu" ? "hidden md:block" : ""

  return (
    <form onSubmit={handleSubmit} className={`relative w-full ${isVisibleClasses}`}>
      <label htmlFor="SearchQuery" className="sr-only">
        Search
      </label>

      <input
        type="text"
        name="SearchQuery"
        id="SearchQuery"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter your keywords..."
        className={`text-sm sm:text-base w-full rounded-full border border-neutral-800 pe-10 ${paddingClasses} border-neutral-90 bg-neutral-900 text-gray-300 focus:ring-0 focus:outline-none focus:border-neutral-700 transition-colors ps-3`}
      />

      <span className="pointer-events-none absolute inset-y-0 end-0 grid w-14 place-content-center text-gray-500 dark:text-gray-400">
        <SearchIcon />
      </span>
    </form>
  );
};

export default SearchInput;
