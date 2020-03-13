import React from 'react';
import ReactPlayer from 'react-player';
import thumbnail from './thumbnail.png'

const ResponsivePlayer = ({ url }) => {

  return (
    <div className='player-wrapper'>
      <style jsx>{`
          .player-wrapper {
text-align: center;
          }

          .react-player {
            display: inline-block;
            margin: 50px auto;
          }

          `}</style>


        <ReactPlayer
          className='react-player'
          url={url}
          width='80%'
          height='100%'
          volume= '1'
          playing='true'
          loop='true'
          controls='true'

          />
      </div>
    )
  }


  export default ResponsivePlayer
