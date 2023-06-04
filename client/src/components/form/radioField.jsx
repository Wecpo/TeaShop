import React from "react";
import PropTypes from "prop-types";
const RadioField = ({ options, name, onChange, value, label }) => {
     const handleChange = ({ target }) => {
          onChange({ name: target.name, value: target.value });
     };
     return (
          <div className="mb-1 block min-h-[1.5rem] pl-[1.5rem]">
               <label className="mb-1 fmt-px inline-block pl-[0.15rem] hover:cursor-pointer">
                    {label}
               </label>
               <div>
                    {options.map((option) => (
                         <div
                              key={option.name + "_" + option.value}
                              className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                         >
                              <input
                                   className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                   type="radio"
                                   name={name}
                                   id={option.name + "_" + option.value}
                                   checked={option.value === value}
                                   value={option.value}
                                   onChange={handleChange}
                              />
                              <label
                                   className="form-check-label"
                                   htmlFor={option.name + "_" + option.value}
                              >
                                   {option.name}
                              </label>
                         </div>
                    ))}
               </div>
          </div>
     );
};

RadioField.propTypes = {
     options: PropTypes.array,
     name: PropTypes.string,
     onChange: PropTypes.func,
     value: PropTypes.string,
     label: PropTypes.string,
};

export default RadioField;
