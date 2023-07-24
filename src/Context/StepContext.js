import { createContext,useState,useContext } from "react";
import PersonalInfo from '../pages/PersonalInfo';
import {plans,AddonData} from '../assets/data'



const StepContext=createContext(null)
export const ContextProvider =({children}) => {

     const [planDue,setPlanDue] = useState('monthly')
    

      const [selectedPlan, setSelectedPlan] = useState(plans[0]);
      const[Addon,setAddOn] = useState([])

      const Selectplan=(id)=>{
       const Selected = plans.find(i=>i.id===id)
       setSelectedPlan(Selected)
       console.log(selectedPlan)
      }
       const [SelectAddon, setSelectAddon] = useState(false);
      const HandleAddon = (title)=>{
        setAddOn(prev=>{
           const isAddonSelected =  prev.includes(title)
           if(isAddonSelected){
            const updatedAdds=  prev.filter(i=>i!==title)
            setSelectAddon(false)
             console.log(updatedAdds)
            return updatedAdds
           } else{
            const updatedAdds= [...prev,title]
             setSelectAddon(true)
             console.log(updatedAdds)
             return updatedAdds
           }
        })
        }


        // if(picked){
        //     setAddOn(prev=>{prev.filter(item=>item.title !== picked.title)})
        //     setSelectAddon(false)
        //     return;
        // }
        // setAddOn(prev=>[...prev,picked])
        // setSelectAddon(true)
        // console.log(Addon)

      
    
    return(
        <StepContext.Provider value={{planDue,setPlanDue, selectedPlan,setSelectedPlan,Selectplan,HandleAddon,SelectAddon}}>
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

        //    plans.map(i=>{
    //         if(i.id===id){
    //             setSelectedPlan(i)
    //         }
    //     return;
    //     })