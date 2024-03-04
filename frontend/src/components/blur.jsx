import React from 'react'
import AlbumLogo from '../image/album.jpg'
import Lover from '../image/lover.png'
import Guts from '../image/guts.jpeg'
import Record from '../image/therecord.webp'
import '../css/home.css'
import '../css/blur.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const Blur = () => {
  return (
    <div className="clearfix">
      <header>
        <h1>DJ Devs</h1>
      </header>

      <main>
        <div className="row">
          <div className="column1">
            <div className="c1r1">
              <h2 className="blur-song">Perfect Places</h2>
              <p className='genre'>Alternative/Indie</p>
            </div>
            <div className="c1r21">
              <img src = {AlbumLogo} alt = "Melodrama Album" className='blur-album'></img>
            </div>
            <div className="c1r3">
              <p className="artist-blur">Lorde</p>
              <p className="person-queued"><span className='small'>Queued By</span>Alisha</p>
            </div>
            <div className="c1r4">
              <div className='icon-box'>
                <FontAwesomeIcon icon={faShuffle} className='icon' />
                <FontAwesomeIcon icon={faBackward} className='icon'/>
                <FontAwesomeIcon icon={faPlay} className='icon'/>
                <FontAwesomeIcon icon={faForward} className='icon'/>
                <FontAwesomeIcon icon={faReply} className='icon'/>
              </div>
            </div>
          </div>
          <div className="column2">
            <div className="c2r1">
              <h2>Bio About Artist</h2>
              <p className='blurbio'>Ella Marija Lani Yelich-O'Connor (born 7 November 1996), known professionally as Lorde (/lɔːrd/ LORD), is a New Zealand singer and songwriter. She is known for her unconventional style of pop music, and introspective songwriting.</p>
            </div>
            <div className="c2r2">
              <h2>Recommendations</h2>
            </div>
            <div className="c2r3">
              <div className='song-rec'>
                <p>
                  Cool About It
                </p>
                <img src={Record} alt="Album"></img>
                <p>
                  Boygenius
                </p>
              </div>
              <div className='song-rec'>
                <p>
                  Lover 
                </p>
                <img src={Lover} alt="Album"></img>
                <p>
                  Taylor Swift
                </p>
              </div>
              <div className='song-rec'>
                <p>
                  Vampire 
                </p>
                <img src={Guts} alt="Album"></img>
                <p>
                  Olivia Rodrigo
                </p>
              </div>
            </div>
            <div className="c2r4">
              <h2>Peace Coming Up...</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blur;

