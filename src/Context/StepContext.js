import { createContext, useState, useContext } from "react";
import PersonalInfo from "../pages/PersonalInfo";
import { plans, AddonData } from "../assets/data";

const StepContext = createContext(null);
export const ContextProvider = ({ children }) => {
  const [planDue, setPlanDue] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [addOns, setAddOns] = useState([]);

  const Selectplan = (id) => {
    const Selected = plans.find((i) => i.id === id);
    setSelectedPlan(Selected);
    console.log(selectedPlan);
  };

  const HandleAddon = (selectedAddOn) => {
    if (addOns.find((i) => i.id === selectedAddOn.id)) {
      setAddOns((prev) => prev.filter((i) => i.id !== selectedAddOn.id));
    } else {
      setAddOns((prev) => [...prev, selectedAddOn]);
    }
  };

  // if(picked){
  //     setAddOn(prev=>{prev.filter(item=>item.title !== picked.title)})
  //     setSelectAddon(false)
  //     return;
  // }
  // setAddOn(prev=>[...prev,picked])
  // setSelectAddon(true)
  // console.log(Addon)

  return (
    <StepContext.Provider
      value={{
        planDue,
        setPlanDue,
        selectedPlan,
        setSelectedPlan,
        Selectplan,
        HandleAddon,
        addOns,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export const GlobalContext = () => useContext(StepContext);

//  const[active,setActive] = useState({step1:true,
// step2:false,step3:false,step4:false})
//  const nextStep = ()=>{
//     setCurrentstep(prev=>prev===4?1:prev+1)
//  }
//  const prevStep = ()=>{
//     setCurrentstep(prev=>prev===1?4:prev-1)
//  }

//    plans.map(i=>{
//         if(i.id===id){
//             setSelectedPlan(i)
//         }
//     return;
//     })
