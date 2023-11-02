import { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const incrementClickHandler = () => {
    // when the solution is based on the previous value - concurrent save
    // incrementation i++ is allowed, but not recommended
        setCount(oldValue => oldValue + 1);
    };

    const clearCounterHandler = (event) => {
        // synthetic event wrapper with meta data 
        console.log(event)
        setCount(0);
    }

    // Conditional rendering: if, boolean, ternary operator, return
    // if (count < 0) {
    //     return (
    //         <h3>Invalid count!</h3>
    //     );
    // }

    let message = null;

    switch (count) {
        case 1:
            message = 'First blood';
            break;
        case 2:
            message = 'Double kill';
            break;
        case 3:
            message = 'Tripple kill';
            break;
        case 4:
            message = 'Multi kill';
            break;
        case 5:
            message = 'Unstoppable';
            break;
        case 6:
            message = 'God like';
            break;
        default:
            message = 'M-m-m-onster kill';
    }

    return (
        <div>
            <h3>Counter</h3>

            {count < 0
                ? <p>Invalid count!</p>
                : <p>Valid count!</p>
            }

            {/* Boolean (when we want only IF clause) */}
            {count == 0 && <p>Please start incrementing</p>}

            <h4>{message}</h4>

            <p>Count: {count}</p>

            <button disabled={count < 0} onClick={() => setCount(count - 1)}>-</button>
     {/* no addEventListener; the function reference or arrow function*/}
            <button onClick={clearCounterHandler}>clear</button>
            <button onClick={incrementClickHandler}>+</button>
        </div>
    );
}