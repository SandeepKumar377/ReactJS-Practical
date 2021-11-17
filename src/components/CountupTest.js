import React from "react";
import CountUp, { useCountUp } from "react-countup";

export const CountupTest = () => {
    const countUpRef = React.useRef(null)
    const { start, pauseResume, reset, update } = useCountUp(
        {
            ref: countUpRef,
            start: 0,
            end: 10000,
            duration: 5,
            startOnMount: false,
            onReset: () => console.log('Resetted!'),
            onUpdate: () => console.log('Updated!'),
            onPauseResume: () => console.log('Paused or resumed!'),
            onStart: ({ pauseResume }) => console.log(pauseResume),
            onEnd: ({ pauseResume }) => console.log(pauseResume),
        })
    return (
        <div>
            <h1>Countup Demo</h1>
            <div>
                <h1><span ref={countUpRef} /></h1>
                <button onClick={start} >Start</button>
                <button onClick={reset} >Reset</button>
                <button onClick={pauseResume} >Pause / Resume</button>
                <button onClick={() => update(2000)} >Update to 2000</button>
            </div>
            <h3>
                <CountUp end={2000} />
                <br />
                <CountUp end={2000} duration={5} />
                <br />
                <CountUp start={500} end={1000} duration={5} />
                <br />
                <CountUp start={0} end={1000} duration={5} prefix='$' decimals={2} />
                <br />
                <CountUp start={0} end={1000} duration={5} suffix='USD' decimals={2} />
            </h3>
        </div>
    )
}