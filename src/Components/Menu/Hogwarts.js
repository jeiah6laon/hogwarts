
import AudioPlayer from '../../audio/ThemeSong';
import Navbar from './Navbar';

export default function Hogwarts() {
    return(
      <>
        <Navbar/>
        <div id="hogwarts">
          <h1>Welcome to</h1>
          <h1>Hogwarts</h1>
          <h1>School of Witchcraft and Wizardry</h1>
        </div>
        <AudioPlayer />
      </>
    )
}