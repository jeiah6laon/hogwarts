// import { useState } from 'react';
import crest from './../../img/hogwarts.png';

export default function Navbar() {
    // const [isActive, setIsActive]=useState("Hogwarts");
    return(
        <>
            <header className="App-header">
                <a href="/Hogwarts"><img src={crest} alt='Hogwarts Logo' id="logo"/></a>
            </header>
            <nav>
                <a className="menu" href="/Staff">Staff</a>
                <a className="menu" href="/Students">Students</a>
                <a className="menu" href="/SortingHat">Sorting Hat</a>
                <a className="menu" href="/HouseCup">House Cup</a>
                <a className="menu" href="/TriwizardTournament">Triwizard Tournament</a>
                <a className="menu" href="/MaraudersMap">Marauder's Map</a>
            </nav>
        </>
    )
}