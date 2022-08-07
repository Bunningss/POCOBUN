import './SearchBar.scss';
import FormInput from '../FormInput/FormInput';
import search from '../../img/search.png';

const SearchBar = () => {
const input = {
    name: "search",
    placeholder: "Search your favourite items"
}
  return (
    <div className='searchBar'>
        <div className="searchWrapper">
            <FormInput {...input}/>
            <img src={search} alt="" className='searchIcon' />
        </div>
    </div>
  )
}

export default SearchBar