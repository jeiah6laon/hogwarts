import { useEffect, useState } from "react";
import Navbar from './Navbar';

export default function Students() {
    const api = 'https://hp-api.onrender.com/api/characters/students'

    const [allStudents, setAllStudents] = useState([]);
    const [students, setStudents]=useState([]);

    const fetchStudents = async () => {
        const response = await fetch(api);
        const studentsArr = await response.json();
        setStudents(studentsArr);
        setAllStudents(studentsArr);
      };
       useEffect(()=> {
            console.log("fetch students mounted");
            fetchStudents();
            //unmount
        return () => {
            console.log("fetch students unmounted");
        }}, []);

        const houses = ['All', ...new Set(allStudents.map((student) => student.house))].sort();    
        const filterStudent = (house) => {
            if (house === 'All') {
                setStudents(allStudents);
              //return;
            } else{
                const newStudentArr = allStudents.filter((student) => student.house === house);
                setStudents(newStudentArr);
            }
            
          };
    return(
        <>
            <Navbar />
            <div id="students" className="container d-flex flex-column">

                <section className="w-100 d-flex justify-content-evenly categories">
                    {houses.map((house, index) => {
                        return (
                            <button type="button" key={index} className="btn3d" onClick={() => filterStudent(house)}>{house === "" ? "Others" : house}</button>
                        )
                    })}
                </section>
                
                <section className="w-100 row row-cols-3 my-5">



                    {
                        students.map((student)=>{
                            return(
                                <article className="col my-3" key={student.id}>
                                    <div className="card text-center" style={{borderColor:"black",width: "18rem"}}>
                                        <div className="card-body d-flex align-items-end" style={{background: `url(${student.image}) no-repeat center/cover`, height:"35rem"}}>

                                            <div className="w-100"
                                                style={{...(student.house === "Gryffindor"?{backgroundColor: "#80000080", color:"gold"} 
                                                : student.house === "Slytherin"?{backgroundColor: "#00640080", color:"lightgray"} 
                                                : student.house === "Ravenclaw"?{backgroundColor: "#00008080", color:"white"} 
                                                : student.house === "Hufflepuff"?{backgroundColor: "#FFD70080", color:"black"} 
                                                : {backgroundColor: "#00000080"})
                                                }}>
                                                <h4>{student.name}</h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </article>
                            )
                        })
                    }
                </section>
            </div>
        </>
    )
}