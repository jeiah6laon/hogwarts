import Navbar from './Navbar';
import MAudioPlayer from '../../audio/MaraudersSong';
import map from './../../img/Map0.5.mp4'
import mapRev from './../../img/MapReverse0.5.mp4'
import fullMap from './../../img/Full Map.jpg'
import { useEffect, useState } from "react";
export default function Map() {
    const [showMapSwear, setShowMapSwear] = useState(true);
    const [showFullMap, setShowFullMap] = useState(false);
    const [showMapVid, setShowMapVid] = useState(true);
    const [showMapRevVid, setShowMapRevVid] = useState(false);

    const clickSwear = () => {
        setShowMapSwear(false);
        document.getElementById('mapVid').play();
        setTimeout(()=> {
            setShowFullMap(true);
            setShowMapVid(false);
         },7000);
    }

    const mischiefManaged = () => {
        setShowFullMap(false);
        setShowMapRevVid(true);
        setTimeout(()=> {
            document.getElementById('mapRevVid').play();
         },500);
         setTimeout(()=> {
            setShowMapRevVid(false);
            setShowMapVid(true);
            setShowMapSwear(true);
         },7000);
    }
  
    return(
        <>
            <Navbar />
            <div id="maraudersMap">
                {showMapSwear && <div className="modal fade show" id="mapSwear" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-center p-5">
                        <button type="button" onClick={clickSwear}>I solemnly swear I am up to no good.</button>
                    </div>
                </div>
                </div>}

                {showMapVid && <video muted id="mapVid">
                    <source src={map} type="video/mp4" />
                </video>}

                {showFullMap && 
                    <>
                        <img id="fullMap" src={fullMap} alt="Full Marauder's Map" />
                        <button id="managedBtn" className="my-3" onClick={mischiefManaged}>Mischief managed.</button>
                    </>
                }

                {showMapRevVid && <video muted id="mapRevVid">
                    <source src={mapRev} type="video/mp4" />
                </video>}
            </div>
            <MAudioPlayer/>
        </>
    )
}