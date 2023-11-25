import { useState } from "react"

export const usePersistedState = (key, defaultVal) => {
    //set initial value of the state
    const [state, setState] = useState(() => {
        //if there is authenticated user in the localStorage - use it, if there isn't- use the passed default value-{}
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        }
        return defaultVal
    }
    )

    // setPersistedState is called from other files as setAuth(result)
    // value is the "result" - new value to be set
    const setPersistedState = (value) => {
        //it sets the state to be used in the component: auth = value
        setState(value)

        //and sets the state in the memory
        let serializedValue
        if (typeof value === 'function') {
            serializedValue = JSON.stringify(value(state))
        } else {
            serializedValue = JSON.stringify(value)
        }
        localStorage.setItem(key, serializedValue)
    }

    return [state, setPersistedState]
}