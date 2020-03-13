import React from 'react';
import './App.css';
import ResponsivePlayer from './ResponsivePlayer';


const Home = () => {

  return(

    <div className="App">
      <h1>Jay Winebrenner</h1>
      <h3>Director Reel</h3>
      <hr></hr>
      <ResponsivePlayer
        url='https://virtual-counselor-video.s3-us-west-2.amazonaws.com/Jay+Winebrenner+Reel.mp4'


        />
      <hr></hr>
      <h5>jaywinebrenner@gmail.com | <a style={{ color: '#524f4a', textDecoration: 'none'}}  href="https://www.linkedin.com/in/jaywinebrenner/">LinkedIn</a> </h5>
    </div>
  )
}

export default Home
