const Search = ({ handleSearchQuery, searchQuery, placeholder }) => {
     return (
          <input
               className="w-full m-5"
               type="text"
               name="searchQuery"
               placeholder={placeholder}
               onChange={(e) => handleSearchQuery(e)}
               value={searchQuery}
          />
     );
};

export default Search;
