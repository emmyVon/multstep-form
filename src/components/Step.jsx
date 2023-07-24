import { useContext } from "react";
import StepContext from "../Context/StepContext";
import { NavLink } from "react-router-dom";
const nav = [
  {
    count: 1,
    step: "step1",
    content: "Your Info",
    path: "/",
  },
  {
    count: 2,
    step: "step2",
    content: "SELECT PLAN",
    path: "plans",
  },
  {
    count: 3,
    step: "step3",
    content: "ADD-ON",
    path: "addsOn",
  },
  {
    count: 4,
    step: "step4",
    content: "SUMMARY",
    path: "Summary",
  },
];

const Step = () => {
  return (
    <div className="steps">
      {nav.map((i) => (
        <NavLink
          key={i.count}
          to={i.path}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <div className={"circle"}>{i.count}</div>
          <div>
            <p>{i.step}</p>
            <h3>{i.content}</h3>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Step;
