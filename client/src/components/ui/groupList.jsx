import PropTypes from "prop-types";

const GroupList = ({ teaCategories, onChange }) => {
     const categories = [...new Set(teaCategories.map((tea) => tea.category))];
     const toRussianCategories = (category) => {
          if (category === `tea`) return `Чай`;
          if (category === `herbal-tea`) return `Травяной чай`;
     };

     return (
          <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
               {categories.map((category) => (
                    <button
                         key={category}
                         onClick={() => onChange(category)}
                         className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                    >
                         {toRussianCategories(category)}
                    </button>
               ))}
               <button
                    onClick={() => onChange(``)}
                    className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
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
