import { useEffect, useState } from "react";
import Navbar from './Navbar';

export default function TriwizardChamp() {
    const api = 'https://hp-api.onrender.com/api/characters/students'
    const [students, setStudents]=useState([]);
    const fetchStudents = async () => {
        const response = await fetch(api);
        const studentArr = await response.json();
        setStudents(studentArr.filter(student => student.house !== ""));
      }
    //   const svtUp = students.filter(student => (1994 - student.yearOfBirth) >= 17 );
    //   console.log(svtUp);
       useEffect(()=> {
            console.log("fetch students mounted");
            fetchStudents();
            //unmount
        return () => {
            console.log(" fetch students unmounted");
        }}, []);

        const [isDragging, setIsDragging] = useState(false);
        const [draggedItem, setDraggedItem] = useState(null);
        const [champions, setChampions]=useState([]);
        const [hasNamesGoblet, setHasNamesGoblet]=useState(false);
        const [hogwartsChampion, setHogwartsChampion]=useState("");
        const [haschosenChampion, setHasChosenChampion]=useState(false);

        const handleDragStart = (event) => {
            setIsDragging(true);
            setDraggedItem(event.target.textContent);
        };

        const handleDragEnd = () => {
            setIsDragging(false);
            setDraggedItem(null);
        };

        const handleDragOver = (event) => {
            event.preventDefault();
        };
        
        const handleDrop = (event) => {
            event.preventDefault();
            const dropZoneId = event.target.id;
            
            let birthYear;

            for (let i = 0; i < students.length; i++) {
                if (students[i].name === draggedItem) {
                    birthYear = students[i].yearOfBirth;
                    break;
                }
            }
            if((1994-birthYear) >= 17){
                if (dropZoneId === 'flame' && draggedItem) {
                    setChampions([...champions, {id: champions.length, name: draggedItem}]);
                }
                setHasNamesGoblet(true);
                setStudents(students.filter(student => student.name !== draggedItem));
                
            } else{
                alert('Only students 17 and above are allowed to enter.');
            }

            setIsDragging(false);
            setDraggedItem(null); 
        };

        const chooseChampion = () => {
            setStudents([])
            setChampions([]);
            setHasNamesGoblet(false);
            setHogwartsChampion(champions[Math.round(Math.random()*(champions.length-1))].name);
            setHasChosenChampion(true);
            // console
        }

    return(
        <>
            <Navbar />
            <div className="container text-center" id="triwizard">
                
                {haschosenChampion === false && <p>Drag names to the Goblet of Fire</p>}
                <div id="flame" className="row row-cols-12 my-3" onDragOver={handleDragOver} onDrop={handleDrop}>
                    {champions.map((champ) => {
                        return(
                            <p key={champ.id} onDragStart={handleDragStart} onDragEnd={handleDragEnd} draggable style={{cursor:"pointer"}}>{champ.name}</p>
                        )
                    })}
                    {haschosenChampion && <h1 className="my-auto">{hogwartsChampion}</h1>}
                </div>

                {hasNamesGoblet && <button className="my-3 btn btn-dark" onClick={chooseChampion}>Choose a Champion</button>}

                <div id="initial" className="row row-cols-4">
                    {students.map((student) => {
                        return(
                            <p key={student.id} onDragStart={handleDragStart} onDragEnd={handleDragEnd} draggable style={{cursor:"pointer"}}>{student.name}</p>
                        )
                    })}
                </div>
            </div>
        </>
    )
}