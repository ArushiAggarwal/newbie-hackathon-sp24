import React from 'react'
import '../css/home.css'
import album1 from '../image/album1.jpg';
import album2 from '../image/album2.png';
import album3 from '../image/album3.jpg';

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
                <button className="triangle-button previous">
                  <img src="./prev.png" alt="Previous" />
                </button>

                <button className="circle-button play-pause">
                  <img src="./play.png" alt="Play/Pause" />
                </button>

                <button className="triangle-button next">
                  <img src="./next.png" alt="Next" />
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


              <div>
                <img src={album1} />
                <img src={album2} />
                <img src={album3} />
              </div>

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


