import { createContext,useState,useContext } from "react";
import PersonalInfo from '../pages/PersonalInfo';
import {plans} from '../assets/data'



const StepContext=createContext(null)
export const ContextProvider =({children}) => {

     const [planDue,setPlanDue] = useState('monthly')

      const [selectedPlan, setSelectedPlan] = useState(plans[0]);
      
      const Selectplan=(id)=>{
       const Selected = plans.find(i=>i.id===id)
       setSelectedPlan(Selected)
       console.log(selectedPlan)
      }
    //    plans.map(i=>{
    //         if(i.id===id){
    //             setSelectedPlan(i)
    //         }
    //     return;
    //     })

      
   
    return(
        <StepContext.Provider value={{planDue,setPlanDue, selectedPlan,setSelectedPlan,plans,Selectplan}}>
            {children}
        </StepContext.Provider>
    )
}

export const GlobalContext = ()=> useContext(StepContext)




 //  const[active,setActive] = useState({step1:true,
    // step2:false,step3:false,step4:false})
    //  const nextStep = ()=>{
    //     setCurrentstep(prev=>prev===4?1:prev+1)  
    //  }
    //  const prevStep = ()=>{
    //     setCurrentstep(prev=>prev===1?4:prev-1)  
    //  }