
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { ContextProvider, GlobalContext } from './Context/StepContext';
import AddsOn from './pages/AddsOn';
import PersonalInfo from './pages/PersonalInfo';
import Plans from './pages/Plans';
import Summary from './pages/Summary';
import SharedLayout from './components/SharedLayout';
import Final from './components/Final';



function App() {
 
  return (

    <BrowserRouter>
    <ContextProvider>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<PersonalInfo/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='addsOn' element={<AddsOn/>}/>
        <Route path='Summary' element={<Summary/>}/>
        <Route path='final' element={<Final/>}/>
      </Route>
    </Routes>
     </ContextProvider>
    </BrowserRouter>
    // <div className="App">
    
    // </div>
  );
}

//  {currentstep===1 && <PersonalInfo/>}
//      {currentstep===2 && <Plans/>}
//      {currentstep===3 && <AddsOn/>}
//      {currentstep===4 && <Summary/>}

export default App;
