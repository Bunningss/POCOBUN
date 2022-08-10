import './SearchBar.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const SearchBar = () => {
  const navigate = useNavigate();
  const [ query, setQuery ] = useState("");
  const [ error, setError ] = useState("");
const input = {
    name: "search",
    placeholder: "Search your favourite items"
}
const handleChange = (e) => {
  setQuery(e.target.value)
}
const startSearch = async (e) => {
  // search logic
  if (query !== "") {
    navigate(`/search/${query}`)
  } else {
    setError("Please enter what you are looking for")
  }
};
  return (
    <div className='searchBar'>
        <div className="searchWrapper">
            <FormInput {...input} onChange={handleChange}/>
            <PrimaryButton text={"search"} onClick={startSearch}/>
        </div>
            {
              error && <p className="redLight">{error}</p>
            }
    </div>
  )
}

export default SearchBar