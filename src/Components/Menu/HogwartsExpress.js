import { useEffect, useState } from "react";
import platform from './../../img/PlatformExpress.mp4'
import SAudioPlayer from '../../audio/StationAnnouncement';

export default function HogwartsExpress() {
    const [showPlatform, setShowPlatform] = useState(true);
    const [showHogwarts, setShowHogwarts] = useState(false);

    useEffect(()=> {
        console.log("play vid mounted")
        const vidPlay = () => {
            document.getElementById('platformVid').play();
            setTimeout(()=> {
                document.getElementById('audio').play();
             },1000);
             setTimeout(()=> {
                setShowHogwarts(!showHogwarts);
             },19500);   
        }
        document.getElementById('platformVid').addEventListener('click', vidPlay);  
        //unmount
        return () => {
            console.log("play vid unmounted");
            document.getElementById('platformVid').removeEventListener('click', vidPlay);  
        }
    }, [showHogwarts])
    
    
    return(
        <div id="hogwartsExpress">
            <video muted id="platformVid">
                <source src={platform} type="video/mp4" />
            </video>

            {showPlatform && <div className="modal fade show" id="toPlatform" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-center p-5">
                        <p>Click the platform to enter</p>
                        <button type="button" className="btn btn-dark" onClick={()=>setShowPlatform(!showPlatform)}>Ok</button>
                    </div>
                </div>
            </div>}

            {showHogwarts && <div className="modal fade show" id="toHogwarts" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-5">
                        <a href="/Hogwarts" className="btn btn-dark">Go to Hogwarts</a>
                    </div>
                </div>
            </div>}
            <SAudioPlayer/>
        </div>
    )
}