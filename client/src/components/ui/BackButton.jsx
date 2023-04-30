import { useNavigate } from "react-router";

const BackButton = () => {
     const navigate = useNavigate();
     return (
          <button
               className="text-white bg-blue-700 m-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
               onClick={() => navigate(`/`)}
          >
               Назад
          </button>
     );
};

export default BackButton;
