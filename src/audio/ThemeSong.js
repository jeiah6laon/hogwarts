import React from 'react';
import audio from './Harry-Potter-Theme.mp3';
class AudioPlayer extends React.Component {
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
  
  export default AudioPlayer;

