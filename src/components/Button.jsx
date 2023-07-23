import { useContext } from "react";
import StepContext, { GlobalContext } from "../Context/StepContext";
import { Link } from "react-router-dom";

const Button = ({ path, back }) => {
  // const { currentstep } = GlobalContext();
  return (
    <div className="button-container">
      {back === "null" ? (
        ""
      ) : (
        <Link to={back}>
          <button type="button" className="G-btn">
            Go back
          </button>
        </Link>
      )}
      <Link to={path}>
        <button
          type={`${back === "null" ? "submit" : "button"}`}
          className="n-btn btn"
        >
          {back === "null" ? "Submit" : "Next"}
        </button>
      </Link>
    </div>
  );
};

export default Button;
