import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({ label, name, value, onChange, error }) => {
     const handleChange = ({ target }) => {
          onChange({ name: target.name, value: target.value });
     };

     return (
          <div className="block text-m text-gray-800 m-4">
               <label htmlFor={name}> {label}</label>
               <div className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                    <textarea
                         id={name}
                         name={name}
                         value={value}
                         onChange={handleChange}
                         className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />

                    {error && <div className="invalid-feedback ">{error}</div>}
               </div>
          </div>
     );
};
TextAreaField.defaultProps = {
     type: "text",
};
TextAreaField.propTypes = {
     label: PropTypes.string,
     type: PropTypes.string,
     name: PropTypes.string,
     value: PropTypes.string,
     onChange: PropTypes.func,
     error: PropTypes.string,
};

export default TextAreaField;
