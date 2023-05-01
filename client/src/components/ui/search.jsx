const Search = ({ handleSearchQuery, searchQuery, placeholder }) => {
     return (
          <input
               className="w-full"
               type="text"
               name="searchQuery"
               placeholder={placeholder}
               onChange={(e) => handleSearchQuery(e)}
               value={searchQuery}
          />
     );
};

export default Search;
