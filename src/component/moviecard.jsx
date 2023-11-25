import { Link } from "react-router-dom";
import {removeSelectedMovie} from "../utils/selectedMovie"
import { IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";


const moviecard = ({poster, id }) => {
const dispatch =useDispatch();
    return (
    <>
      <div className="p-3 w-40">
        <Link to={"/movieinfo/"+id} onClick={()=>dispatch(removeSelectedMovie())}>
          
          <img
            className="rounded-xl shadow-lg transition-all duration-300 hover:translate-y-[-15px]"
            src={IMG_URL + poster}
            alt="POSTER"
          />
        </Link>
      </div>
    </>
  );
};
export default moviecard;
