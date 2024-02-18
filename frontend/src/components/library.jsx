import React from 'react'
import '../css/library.css'

const Library = () => {
  return (
    <div className="main">
      <div className="column1">
        <div className="1row1">
          <h1>
            Playlist
          </h1>

          <h2>
            Newbie Night
          </h2>

          {/* <img src="/image/album.jpg" alt="Playlist Image" /> */}
          {/* <span id="playlist-img"></span> */}
        </div>

        <div className="1row2">
          <button>
            {/* <img src="/image/library.png" alt="Add Song Button" /> */}
          </button>
        </div>

        <div className="1row3">
          <h2>
            Browse Songs
          </h2>

          <div className="playlist-songs">
            {/* <img src="/image/album.jpg" alt="Playlist Image" /> */}
            <p>Song Title</p>
            <p>Song Queuer</p>
            {/* <span id="song-img1"></span>
            <span id="song-title1"></span>
            <span id="song-queuer1"></span> */}
          </div>

          <div className="playlist-songs">
            {/* <img src="/image/album.jpg" alt="Playlist Image" /> */}
            <p>Song Title</p>
            <p>Song Queuer</p>
            {/* <span id="song-img2"></span>
            <span id="song-title2"></span>
            <span id="song-queuer2"></span> */}
          </div>

          <div className="playlist-songs">
            {/* <img src="/image/album.jpg" alt="Playlist Image" /> */}
            <p>Song Title</p>
            <p>Song Queuer</p>
            {/* <span id="song-img3"></span>
            <span id="song-title3"></span>
            <span id="song-queuer3"></span> */}
          </div>
        </div>

        <div className="column2">
          <h2>
            Queue
          </h2>

          <p>
            What's Coming Up Next
          </p>

          <div className="queue-songs">
            {/* <img src="/image/album.jpg" alt="Playlist Image" /> */}
            {/* <span id="queue-song1"></span> */}
            <div className="queue-description">
              <p>Song Title</p>
              <p>Song Artist</p>
              <p>Song Queuer</p>
              {/* <span id="queue-song-title1"></span>
              <span id="queue-song-artist1"></span>
              <span id="queue-song-queuer1"></span> */}
            </div>
          </div>

          <div className="queue-songs">
            {/* <img src="/image/album.jpg" alt="Playlist Image" /> */}
            {/* <span id="queue-song2"></span> */}
            <div className="queue-description">
              <p>Song Title</p>
              <p>Song Artist</p>
              <p>Song Queuer</p>
              {/* <span id="queue-song-title2"></span>
              <span id="queue-song-artist2"></span>
              <span id="queue-song-queuer2"></span> */}
            </div>
          </div>

          <div className="queue-songs">
            {/* <img src="/image/album.jpg" alt="Playlist Image" /> */}
            {/* <span id="queue-song3"></span> */}
            <div className="queue-description">
              <p>Song Title</p>
              <p>Song Artist</p>
              <p>Song Queuer</p>
              {/* <span id="queue-song-title3"></span>
              <span id="queue-song-artist3"></span>
              <span id="queue-song-queuer3"></span> */}
            </div>
          </div>

          <div className="queue-songs">
            {/* <img src="/image/album.jpg" alt="Playlist Image" /> */}
            {/* <span id="queue-song4"></span> */}
            <div className="queue-description">
              <p>Song Title</p>
              <p>Song Artist</p>
              <p>Song Queuer</p>
              {/* <span id="queue-song-title4"></span>
              <span id="queue-song-artist4"></span>
              <span id="queue-song-queuer4"></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library