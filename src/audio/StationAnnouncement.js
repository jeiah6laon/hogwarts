import React from 'react';
import audio from './StationAnnouncement.mp3';
class SAudioPlayer extends React.Component {
    render() {
      return (
        <div>
          {/* <audio ref="audio_tag" src="./static/music/foo.mp3" controls autoPlay/> */}
            <audio controls hidden id="audio">
                <source src={audio} type="audio/mpeg" />
            </audio>

        </div>
      );
    }
  }
  
  export default SAudioPlayer;

