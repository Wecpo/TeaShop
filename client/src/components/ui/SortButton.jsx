const SortButton = ({ onSort }) => {
     return (
          <div className="flex justify-center ">
               <div
                    className="h-5 flex justify-center hover:bg-blue-100 cursor-pointer"
                    onClick={onSort}
               >
                    Сортировать по стоимости
                    <svg
                         className=""
                         fill="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true"
                    >
                         <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M11.47 2.47a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06l-2.47-2.47V21a.75.75 0 01-1.5 0V4.81L8.78 7.28a.75.75 0 01-1.06-1.06l3.75-3.75z"
                         />
                    </svg>
                    <svg
                         fill="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true"
                    >
                         <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M12 2.25a.75.75 0 01.75.75v16.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V3a.75.75 0 01.75-.75z"
                         />
                    </svg>
               </div>
          </div>
     );
};

export default SortButton;
