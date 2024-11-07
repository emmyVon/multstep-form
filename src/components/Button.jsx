import { Link } from "react-router-dom";

const Button = ({ path, back }) => {
  // const { currentstep } = GlobalContext();
  return (
    <div className="button-container">
      {back === "null" ? (
        <button className="btn" type="submit">
          Submit
        </button>
      ) : (
        <div>
          <Link to={back}>
            <button type="button" className="G-btn">
              Go back
            </button>
          </Link>

          <Link to={path}>
            <button type="button" className="n-btn btn">
              {back === "null" ? "Submit" : "Next"}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Button;
