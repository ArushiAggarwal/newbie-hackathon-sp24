import React from 'react'
import '../css/home.css'

import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const Home = () => {
  return (
    <div className="clearfix">
      <header>
        <h1>DJ Devs</h1>
      </header>

      <main>
        <div className="row">
          <div className="column1" style={{ backgroundColor: '#aaa' }}>
            <div className="c1r1">
              <h2>Song Title</h2>
              <p>Some text..</p>
            </div>
            <div className="c1r2">
              <h2>Song IMG</h2>
              <p>Some text..</p>
            </div>
            <div className="c1r3">
              <p className="artist">Lorde</p>
              <p className="person-queued">Brandon Lerit</p>
            </div>
            <div className="c1r4">

              <div className="spotify-player" id="button">
                <button>
                  <SkipPreviousIcon />
                </button>

                <button>
                  <PlayCircleFilledWhiteIcon />
                </button>

                <button>
                  <SkipNextIcon />
                </button>

              </div>

            </div>
          </div>
          <div className="column2" style={{ backgroundColor: '#bbb' }}>
            <div className="c2r1">
              <h2>Bio About Artist</h2>
              <p>Some text..</p>
            </div>
            <div className="c2r2">
              <h2>Recommendations</h2>
              <p>Some text..</p>

            </div>
            <div className="c2r3">
              <h2>Next Song</h2>
              <p>Some text..</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;


