import React, { useState, useEffect } from 'react';
import Starwars from './Starwars';
import styles from './App.module.css';

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [count, setCount] = useState(0);

    /* let nums = [1, 2, 3, 4, 5]

    let doubled = nums.map(number => number * 2) // map makes a new array with new reference 
    return ( <ul> {doubled} </ul>) // this returns unpacked list
    React.createElement('ul',{},2,4,6,8,10) // from the 3rd argument onwards (inclusive), all others are packed in a list and returned unpacked by rest operator (...) 

    let doubled2 = nums.map(number=> <li>{number * 2}</li>) // this returns warning: every child in a list should have a key prop

    //React needs identifiers of the elements in order to track them independently, this is why we write keys, that should be unique in the current operation
    //If we use math.random() as a key it passes new number on every refresh and React identifies the elements as new, deletes the old and creates new with the new key 

    let doubled3 = nums.map((number, index) => <li key={index}>{number * 2}</li>)

    let [doubled4, setDoubled] = useState(doubled3)
    const onClick = () => {setDoubled(state => state.slice(1))}   //--mutate the array
    return <ul> onClick= {onClick}> {doubled3} </ul> */

    //             new example: 
    /* const [numbers, setNumbers] = useState([1,2,3,4,5])
    const onClick = () => {setNumbers(state => state.slice(1))}

    return (
        <div> 
        <ul>
        {numbers.map((number, index) => <li key={index} onClick={onClick}>{number*2}</li)}
        </ul>
        <div>
    )
    */

    useEffect(() => {
        // console.log('Mount component');
    }, []);  //DependencyList - when the items in the list change- the function acts. In this case the function doesn't depend on anything because the array is empty and tracks only if the component is being mounted so it is called and returns result

    useEffect(() => {    //there may be many useEffects in single component. Now it will be called once when the component is mounted and also every time a change is being made to an element from the DependencyList [count]
        // console.log(`Update component - ${numbers.length}`)  //numbers should be in the Dependency list!
    }, [count]);

    useEffect(() => {
        // setTimeout(() => setCount(s => s + 1), 1000);
    }, [count]); 

    const onClick = () => {
        setNumbers(oldState => oldState.slice(0, oldState.length - 1)); //we should always return reference to the new state
        // setNumbers(oldState => oldState.splice(oldState.length - 1, 1)); //this won't work
    }

    // With useState we can use only not-mutating functions, because they make new array with new reference
    // Mutating functions are not caught properly because useState sees the old reference and thinks this is the same array
    // Mutator array methods sort() unshift() shift() splice() push() reverse() pop() fill() forEach() -NO
    //Non-mutator array methods slice() join() includes() filter() concat() every() find() findIndex() map() reduce() some() flat() flatMap() -YES !!
    return (
        <div className={styles.app}>
            <Starwars />

            <h3>Count: {count}</h3>
            <ul>
                {numbers.map((number, index) => (
                    <li
                        data-key={index}
                        key={index}
                        className={styles['list-item']}
                    >
                        {number * 2}
                    </li>)
                )}
            </ul>

            <button style={{marginRight: '10px'}} onClick={onClick}>Remove</button>
            <button onClick={() => setCount(c => c + 1)}>+</button>
        </div>
    );
}



export default App
