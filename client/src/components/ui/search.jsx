const Search = ({ handleSearchQuery, searchQuery, placeholder }) => {
     return (
          <div className="flex flex-row text-m font-medium text-gray-900 bg-white border border-gray-200 m-10 rounded-lg ">
               <input
                    className="w-full"
                    type="text"
                    name="searchQuery"
                    placeholder={placeholder}
                    onChange={(e) => handleSearchQuery(e)}
                    value={searchQuery}
               />
          </div>
     );
};

export default Search;
