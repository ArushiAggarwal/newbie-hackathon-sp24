import React from 'react'
import '../css/home.css'
  
const Home = () => {
  return (
    <div id = "container">
      <div className = "col-1">
         <h1 className = "heading">COLUMN 1</h1>
         <p className = "paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className =  "col-2">
         <h1 className = "heading">COLUMN 2</h1>
         <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className="spotify-player-button">

        <button className="triangle-button previous">
          Home
        </button>

        <button className="circle-button play-pause">
          Home
        </button>

        <button className="triangle-button next">
          Home
        </button>

      </div>
   </div>
  )
}

export default Home;