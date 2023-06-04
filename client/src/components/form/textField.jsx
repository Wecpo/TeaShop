import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
     const handleChange = ({ target }) => {
          onChange({ name: target.name, value: target.value });
     };

     return (
          <div className="block text-sm text-gray-800 m-4">
               <label htmlFor={name}> {label}</label>
               <div className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                    <input
                         type={type}
                         id={name}
                         name={name}
                         value={value}
                         onChange={handleChange}
                         className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {error && <div>{error}</div>}
               </div>
          </div>
     );
};
TextField.defaultProps = {
     type: "text",
};
TextField.propTypes = {
     label: PropTypes.string,
     type: PropTypes.string,
     name: PropTypes.string,
     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
     onChange: PropTypes.func,
     error: PropTypes.string,
};

export default TextField;
