import React from 'react';
import audio from './MaraudersMap.mp3';
class MAudioPlayer extends React.Component {
    render() {
      return (
        <div>
          {/* <audio ref="audio_tag" src="./static/music/foo.mp3" controls autoPlay/> */}
            <audio controls autoPlay hidden loop id="audio">
                <source src={audio} type="audio/mpeg" />
            </audio>

        </div>
      );
    }
  }
  
  export default MAudioPlayer;

