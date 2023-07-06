import { useNavigate } from "react-router";
import PropTypes from "prop-types";

const BackButton = ({ body = `Назад` }) => {
     const navigate = useNavigate();

     return (
          <button
               className="text-white bg-blue-700 m-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
               onClick={() => navigate(-1)}
          >
               {body}
          </button>
     );
};

BackButton.propTypes = {
     body: PropTypes.string,
};

export default BackButton;
