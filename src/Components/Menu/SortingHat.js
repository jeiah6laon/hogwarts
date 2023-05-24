import { useEffect, useState } from "react";
import Navbar from './Navbar';
import Gryffindor from './../../img/gryffindor.jpg'
import Slytherin from './../../img/slytherin.jpg'
import Hufflepuff from './../../img/hufflepuff.jpg'
import Ravenclaw from './../../img/ravenclaw.jpg'

export default function SortingHat() {
    const api = 'https://hp-api.onrender.com/api/characters/students'
    const [students, setStudents]=useState([]);
    const fetchStudents = async () => {
        const response = await fetch(api);
        const studentArr = await response.json();
        setStudents(studentArr.filter(student => student.house !== ""));
      }
      
       useEffect(()=> {
            console.log("mounted");
            fetchStudents();
            //unmount
        return () => {
            console.log("unmounted");
        }}, []);

        const [house, setHouse] = useState("");
        const [showHouse, setShowHouse] = useState(false);

        const sort = (e) => {
            // console.log(e.target.textContent);
            for(let i=0; i < students.length; i++){
                if(students[i].name === e.target.textContent){
                    // console.log(students[i].house);
                    setHouse(students[i].house);
                }
            }
            setShowHouse(true);
            setTimeout(() =>{
                setShowHouse(false);
                setStudents(students.filter(student => student.name !== e.target.textContent));
            }, 3000);
        }
    return(
      <>
        <Navbar/>
            <div className="container text-center" id="sorting">
                <p>Click a name to sort.</p>
                <div id="hat" className="mb-5"></div>

                <div className="row row-cols-4">
                    {students.map((student) => {
                        return(
                            <p key={student.id} style={{cursor:"pointer"}} onClick={sort}>{student.name}</p>
                        )
                    })}
                </div>

                {showHouse && <div className="modal fade show" tabIndex="-1" style={{display: "block"}}>
                    <div className="modal-dialog modal-dialog-centered">
                        {
                            house === "Gryffindor" ? <img src={Gryffindor} alt="Gryffindor" width={"100%"} className="gryffindor"/>
                            : house === "Slytherin" ? <img src={Slytherin} alt="Slytherin" width={"100%"} className="slytherin"/>
                            : house === "Ravenclaw" ? <img src={Ravenclaw} alt="Ravenclaw" width={"100%"} className="ravenclaw"/>
                            : <img src={Hufflepuff} alt="Hufflepuff" width={"100%"} className="hufflepuff"/>
                        }
                    </div>
                </div>}
            </div>
      </>
    )
}