import React from 'react'
import '../css/library.css'
import Image from '../image/album.jpg'
import Songs from '../image/library.png'
import Lover from '../image/lover.png'
import Guts from '../image/guts.jpeg'
import Record from '../image/therecord.webp'
import Easy from '../image/easy.jpg'
import Tunnel from '../image/tunnel.png'
import Djdevs from '../image/djdevs.png'

const Library = () => {
  return (
    <div className="library">
      <div className="column1">
        <div className="row1">
          <h1>
            Playlist
          </h1>

          <h2>
            Newbie Night
          </h2>

          <img src= {Djdevs} alt="Playlist" className = "newbie-pic"/>
          {/* <span id="playlist-img"></span> */}
        </div>

        <div className="row2">
          <div className = "button">
            +
          </div>

          <p className = "button-text">
            Add Song
          </p>
        </div>

        <div className="row3">
          <p className='browse'>
            Browse Songs
          </p>

          <div className="playlist-songs">
            <img src= {Image} alt="Playlist" className='playlist-img'/>
            <p>Supercut</p>
            <p className='playlist-queue-p'>Brandon</p>
            {/* <span id="song-img1"></span>
            <span id="song-title1"></span>
            <span id="song-queuer1"></span> */}
          </div>

          <div className="playlist-songs">
            <img src= {Guts} alt="Playlist" className='playlist-img' />
            <p>Lacy</p>
            <p className='playlist-queue-p'>Rohan</p>
            {/* <span id="song-img2"></span>
            <span id="song-title2"></span>
            <span id="song-queuer2"></span> */}
          </div>

          <div className="playlist-songs">
            <img src= {Tunnel} alt="Playlist" className='playlist-img'/>
            <p>Margaret</p>
            <p className='playlist-queue-p'>Srija</p>
            {/* <span id="song-img3"></span>
            <span id="song-title3"></span>
            <span id="song-queuer3"></span> */}
          </div>
        </div>
      </div>

      <div className="column2">
        <p className='queue-title'>
          What's Coming Up Next...
        </p>

        <p className='queue-word'>
          Queue
        </p>

        <div className="queue-songs">
          <img src= {Easy} alt="Playlist" className = "queue-picture"/>
            {/* <span id="queue-song1"></span> */}
          <div className="queue-description">
            <p>Easy</p>
            <p>LE SSERAFIM </p>
            <p>Akul</p>
              {/* <span id="queue-song-title1"></span>
              <span id="queue-song-artist1"></span>
              <span id="queue-song-queuer1"></span> */}
          </div>
        </div>

        <div className="queue-songs">
          <img src= {Lover} alt="Playlist" className = "queue-picture"/>
            {/* <span id="queue-song2"></span> */}
          <div className="queue-description">
            <p>Daylight</p>
            <p>Taylor Swift</p>
            <p>Arushi</p>
              {/* <span id="queue-song-title2"></span>
              <span id="queue-song-artist2"></span>
              <span id="queue-song-queuer2"></span> */}
          </div>
        </div>

        <div className="queue-songs">
          <img src= {Record} alt="Playlist" className = "queue-picture"/>
            {/* <span id="queue-song3"></span> */}
          <div className="queue-description">
            <p>Not Strong Enough</p>
            <p>Boygenius</p>
            <p>Kaavya</p>
              {/* <span id="queue-song-title3"></span>
              <span id="queue-song-artist3"></span>
              <span id="queue-song-queuer3"></span> */}
          </div>
        </div>

        <div className="queue-songs">
          <img src= {Tunnel} alt="Playlist" className = "queue-picture"/>
            {/* <span id="queue-song4"></span> */}
          <div className="queue-description">
            <p>A&W</p>
            <p>Lana Del Rey</p>
            <p>Yuki</p>
              {/* <span id="queue-song-title4"></span>
              <span id="queue-song-artist4"></span>
              <span id="queue-song-queuer4"></span> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library