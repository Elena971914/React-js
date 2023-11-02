import { useState } from 'react';

export default function Timer(props) {
//state value, function to change state   initial state- can also be function (better to be arrow function)
    const [time, setTime] = useState(props.startTime); // Pass initial state

    console.log(`Current time is = ${time}`)

    // Note: Don't use setTimeout, useEffect is more appropriate
    setTimeout(() => {
        // cannot change it directly (time+1), because it is immutable
        // when there is a change of the state it calls the Timer function again
        // pre-rendering is to provide result, save the state and perform again
        // if a state is changes - the component is pre-rendered
        setTime(time + 1);
    }, 1000);

    return (
        <div>
            <h3>Timer</h3>

            <p>{time}</p>
        </div>
    );
}