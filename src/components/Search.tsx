import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../redux/actions/alertAction";
import { getWeather, setLoading } from "../redux/actions/weatherAction";

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      return dispatch(setAlert("City is Required!"));
    }
    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity("");
  };

  return (
    <div className="search-main">
      <div className="search-main1">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Enter City Name"
              value={city}
              onChange={handleChange}
            />
            <button className="search-button">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
