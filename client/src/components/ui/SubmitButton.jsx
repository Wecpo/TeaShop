import PropTypes from "prop-types";

const SubmitButton = ({ isValid, body = `Отправить` }) => {
     return isValid ? (
          <button
               type="submit"
               className="text-white bg-blue-700 m-5 hover:bg-blue-800 focus:ring-4
        focus:outline-none focus:ring-blue-300 font-medium rounded-lg
        text-sm px-5 py-2.5 text-center"
          >
               {body}
          </button>
     ) : (
          <button
               type="submit"
               className="text-white bg-red-300 m-5 hover:bg-red-300 focus:ring-4
        focus:outline-none focus:ring-blue-300 font-medium rounded-lg
        text-sm px-5 py-2.5 text-center"
          >
               {body}
          </button>
     );
};

SubmitButton.propTypes = {
     id: PropTypes.string,
};

export default SubmitButton;
