import './Search.css';

function Search() {
    return (
        <div className="search-container">
            <input type="search" id="site-search" name="q" placeholder="Busca la imagen"/>

            <button>Search</button>
        </div>
    );
}

export default Search;