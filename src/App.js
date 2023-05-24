import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";
import HogwartsExpress from './Components/Menu/HogwartsExpress';
import Hogwarts from './Components/Menu/Hogwarts';
import Staff from './Components/Menu/Staff';
import Students from './Components/Menu/Students';
import Map from './Components/Menu/Map';
import HouseCup from './Components/Menu/HouseCup';
import TriwizardChamp from './Components/Menu/TriwizardChampion';
import SortingHat from './Components/Menu/SortingHat';
function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<HogwartsExpress />}/>
            <Route path="/Hogwarts" element={<Hogwarts />}/>
            <Route path="/Staff" element={<Staff />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/MaraudersMap" element={<Map />} />
            <Route path="/HouseCup" element={<HouseCup />} />
            <Route path="/TriwizardTournament" element={<TriwizardChamp />} />
            <Route path="/SortingHat" element={<SortingHat />} />
          </Routes>
    </div>
  );
}

export default App;

//navbar active, scroll

// quidditch
//spells