import React from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayerTest = () => {
    return (
        <div>
            <h1>Video Player Demo</h1>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=Me1Gg082UCU'
                controls
                width='420px'
                height='240px'
                onReady={()=> console.log('onReady callback')}
                onStart={()=> console.log('onStart callback')}
                onPause={()=> console.log('onPause callback')}
                onEnded={()=> console.log('onEnded callback')}
                onError={()=> console.log('onError callback')}
            />
        </div>
    )
}
