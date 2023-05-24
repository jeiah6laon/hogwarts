import { useEffect, useState } from "react";
import Navbar from './Navbar';

export default function Staff() {
    const api = 'https://hp-api.onrender.com/api/characters/staff'

    const [allStaff, setAllStaff] = useState([]);
    const [staff, setStaff]=useState([]);
    const [headmaster, setHeadmaster]=useState([]);

    const fetchStaff = async () => {
        const response = await fetch(api);
        const staffArr = await response.json();
        setStaff(staffArr.filter(staff => staff.name !== "Albus Dumbledore"));
        setAllStaff(staffArr.filter(staff => staff.name !== "Albus Dumbledore"));
        setHeadmaster(staffArr.filter(staff => staff.name === "Albus Dumbledore"))
      };
       useEffect(()=> {
            console.log("fetch staff mounted");
            fetchStaff();
            //unmount
        return () => {
            console.log("fetch staff unmounted");
        }}, []);

        //const staffList = staff;
        const houses = ['All', ...new Set(allStaff.map((staffmem) => staffmem.house))].sort();    
        
        //const [house, setHouse]=useState(houses);
        
        const filterStaff = (house) => {
            if (house === 'All') {
                setStaff(allStaff);
              //return;
            } else{
                const newStaffArr = allStaff.filter((staffmem) => staffmem.house === house);
                setStaff(newStaffArr);
            }
            
          };
    return(
        <>
            <Navbar/>
            <div id="staff" className="container d-flex flex-column">
                
            <section className="my-5">
                    {headmaster.map((hm)=>{
                        return(
                            // <p key={index}>Headmaster: {hm.name}</p>
                            <article className="col" key={hm.id}>
                                    <div className="card text-center gryffindor" style={{borderColor:"black",width: "24rem", backgroundColor: "#800000", color:"gold"}}>
                                        {/* <img src={staffm.image} className="card-img-top" alt={staffm.name}/> */}
                                        <div className="card-header">Headmaster</div>
                                        <div className="card-body d-flex align-items-end" style={{background: `url(${hm.image}) no-repeat center/cover`, height:"35rem"}}>

                                            <div className="w-100" style={{backgroundColor: "#80000080", color:"gold"}}>
                                                <h4>{hm.name}</h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                            </article>

                            
                        )
                    })}
                </section>

                <section className="w-100 d-flex justify-content-evenly categories">
                    {houses.map((house, index) => {
                        return (
                            <button type="button" key={index} className="btn3d" onClick={() => filterStaff(house)}>{house === "" ? "Others" : house}</button>
                        )
                    })}
                </section>

                <section className="w-100 row row-cols-3 my-5">
                    {
                        staff.map((staffm)=>{
                            return(
                                <article className="col my-3" key={staffm.id}>
                                    <div className="card text-center" style={{borderColor:"black",width: "18rem"}}>
                                        {/* <img src={staffm.image} className="card-img-top" alt={staffm.name}/> */}
                                        <div className="card-body d-flex align-items-end" style={{background: `url(${staffm.image}) no-repeat center/cover`, height:"35rem"}}>

                                            <div className="w-100"
                                                style={{...(staffm.house === "Gryffindor"?{backgroundColor: "#80000080", color:"gold"} 
                                                : staffm.house === "Slytherin"?{backgroundColor: "#00640080", color:"lightgray"} 
                                                : staffm.house === "Ravenclaw"?{backgroundColor: "#00008080", color:"white"} 
                                                : staffm.house === "Hufflepuff"?{backgroundColor: "#FFD70080", color:"black"} 
                                                : {backgroundColor: "#00000080"})
                                                }}>
                                                <h4>{staffm.name}</h4>
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