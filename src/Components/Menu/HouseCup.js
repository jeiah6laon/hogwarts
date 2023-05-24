import { useState, useEffect } from "react";
import Navbar from './Navbar';
import gryffindorCrest from './../../img/houses/gryffindor.png'
import slytherinCrest from './../../img/houses/slytherin.png'
import ravenclawCrest from './../../img/houses/ravenclaw.png'
import hufflepuffCrest from './../../img/houses/hufflepuff.png'

export default function HouseCup() {
    const [gryffindor, setGryffindor]=useState(0);
    const [slytherin, setSlytherin]=useState(0);
    const [ravenclaw, setRavenclaw]=useState(0);
    const [hufflepuff, setHufflepuff]=useState(0);
 
    const[highest, setHighest]=useState(0);

    const add = (house) =>{
        if(house === "Gryffindor"){
            setGryffindor(gryffindor+1);
        } else if(house === "Slytherin"){
            setSlytherin(slytherin+1);
        } else if(house === "Ravenclaw"){
            setRavenclaw(ravenclaw+1);
        } else {
            setHufflepuff(hufflepuff+1);
        }
    }
    useEffect(() => {
        setHighest(Math.max(gryffindor, slytherin, ravenclaw, hufflepuff));
      }, [gryffindor, slytherin, ravenclaw, hufflepuff]);
    const subtract = (house) =>{
        if(house === "Gryffindor"){
            setGryffindor(gryffindor-1);
        } else if(house === "Slytherin"){
            setSlytherin(slytherin-1);
        } else if(house === "Ravenclaw"){
            setRavenclaw(ravenclaw-1);
        } else {
            setHufflepuff(hufflepuff-1);
        }   
    }
    return(
        <>
            <Navbar/>
            <div id="houseCup">
            
                    <section id="points">
                        <div className="progress" style={{marginLeft: "-75px", ...(highest===gryffindor&& {boxShadow: "white 0 0 25px"})}}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{width: `${gryffindor}%`}} aria-valuenow={gryffindor} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="progress" style={{marginLeft: "300px",...(highest===slytherin&& {boxShadow: "white 0 0 25px"})}}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width: `${slytherin}%`}} aria-valuenow={slytherin} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="progress" style={{marginLeft: "675px", ...(highest===ravenclaw&& {boxShadow: "white 0 0 25px"})}}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${ravenclaw}%`}} aria-valuenow={ravenclaw} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="progress" style={{marginLeft: "1025px",...(highest===hufflepuff&& {boxShadow: "white 0 0 25px"})}}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{width: `${hufflepuff}%`}} aria-valuenow={hufflepuff} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </section>
                    <section id="crest">
                        <img src={gryffindorCrest} alt="Gryffindor Crest"/>
                        <img src={slytherinCrest} alt="Slytherin Crest"/>
                        <img src={ravenclawCrest} alt="Ravenclaw Crest"/>
                        <img src={hufflepuffCrest} alt="Hufflepuff Crest" />
                    </section>
                    <section id="setPoint">
                        <div>
                            <button onClick={()=>subtract("Gryffindor")} disabled={gryffindor===0}>-</button>
                            <p>{gryffindor}</p>
                            <button onClick={()=>add("Gryffindor")} disabled={gryffindor===100}>+</button>
                        </div>
                        <div>
                            <button onClick={()=>subtract("Slytherin")} disabled={slytherin===0}>-</button>
                            <p>{slytherin}</p>
                            <button onClick={()=>add("Slytherin")} disabled={slytherin===100}>+</button>
                        </div>
                        <div>
                            <button onClick={()=>subtract("Ravenclaw")} disabled={ravenclaw===0}>-</button>
                            <p>{ravenclaw}</p>
                            <button onClick={()=>add("Ravenclaw")} disabled={ravenclaw===100}>+</button>
                        </div>
                        <div>
                            <button onClick={()=>subtract("Hufflepuff")} disabled={hufflepuff===0}>-</button>
                            <p>{hufflepuff}</p>
                            <button onClick={()=>add("Hufflepuff")} disabled={hufflepuff===100}>+</button>
                        </div>
                    </section>
            </div>
        </>
    )
}