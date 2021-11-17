import React from 'react'
// import { css } from '@emotion/core'
import {
    BounceLoader,
    BarLoader,
    BeatLoader,
    CircleLoader,
    ClimbingBoxLoader,
    ClipLoader,
    ClockLoader,
    DotLoader,
    FadeLoader,
    GridLoader,
    HashLoader,
    MoonLoader,
    PacmanLoader,
    PropagateLoader,
    PuffLoader,
    PulseLoader,
    RingLoader,
    RiseLoader,
    RotateLoader,
    ScaleLoader,
    SyncLoader
} from 'react-spinners'

// const loaderCSS = css`
// margin-top:25px;
// margin-bottom:25px;
// `

export const SpinnersTest = () => {
    return (
        <div>
            <h1>Spinners Test</h1>
            <BounceLoader
                // css={loaderCSS}
                loading
                // size={100}
                color='Red'
            /><br /><br /><br /><br />
            <BarLoader
                // css={loaderCSS}
                loading={true}
                width='200px'
                height='20px'
                size={20}
                color='Green'
            /><br /><br /><br /><br /><br />
            <BeatLoader
                // css={loaderCSS}
                loading
                // size={40}
                color='Yellow'
            /><br /><br /><br /><br /><br />
            <CircleLoader /><br /><br /><br /><br /><br /><br />
            <ClimbingBoxLoader /><br /><br /><br /><br /><br /><br />
            <ClipLoader /><br /><br /><br /><br /><br /><br />
            <ClockLoader /><br /><br /><br /><br /><br /><br />
            <DotLoader /><br /><br /><br /><br /><br /><br />
            <FadeLoader /><br /><br /><br /><br /><br /><br />
            <GridLoader /><br /><br /><br /><br /><br /><br />
            <HashLoader /><br /><br /><br /><br /><br /><br />
            <MoonLoader /><br /><br /><br /><br /><br /><br />
            <PacmanLoader /><br /><br /><br /><br /><br /><br />
            <PropagateLoader /><br /><br /><br /><br /><br /><br />
            <PuffLoader /><br /><br /><br /><br /><br /><br />
            <PulseLoader /><br /><br /><br /><br /><br /><br />
            <RingLoader /><br /><br /><br /><br /><br /><br />
            <RiseLoader /><br /><br /><br /><br /><br /><br />
            <RotateLoader /><br /><br /><br /><br /><br /><br />
            <ScaleLoader /><br /><br /><br /><br /><br /><br />
            <SyncLoader /><br /><br /><br /><br /><br /><br />
        </div>
    )
}
