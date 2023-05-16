import PropTypes from "prop-types";

const GroupList = ({ teaCategories, onChange }) => {
     const categories = [...new Set(teaCategories.map((tea) => tea.category))];

     return (
          <div className="flex flex-row text-m font-medium text-gray-900 bg-white border border-gray-200 m-10 rounded-lg ">
               {categories.map((category) => (
                    <button
                         key={category}
                         onClick={() => onChange(category)}
                         className="block basis-1/4 w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                    >
                         {category}
                    </button>
               ))}
               <button
                    onClick={() => onChange(``)}
                    className="block basis-1/4 w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
               >
                    Сбросить
               </button>
          </div>
     );
};

GroupList.propTypes = {
     teaCategories: PropTypes.array,
     onChange: PropTypes.func,
};

export default GroupList;
