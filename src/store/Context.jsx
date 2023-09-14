import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const Context = createContext()

export default function Provider ({ children }) {

    const initialFormState = {
        cardNumber : "",
        cardHolders : "",
        month : null,//object option from Select {value : "", label : ""}
        year : null,//object option from Select it is 'event.target'
        cvv : "",
    }

    const [formState, setFormState] = useState(initialFormState)//object

    const handleChangeInput = evt => {
        setFormState({
            ...formState,
            [evt.target.name] : evt.target.value
        })
        // console.log(formState[evt.target.name]);
    }

    const handleChangeSelect = name => selectedOption => {
        setFormState({
            ...formState,
            [name] : selectedOption
        })
        console.log((formState[name])?.value);
    }

    const providerValues = {
        formState,
        handleChangeInput,
        handleChangeSelect,
    }

    return (
        <Context.Provider value={providerValues}>
            {children}
        </Context.Provider>
    )
}

Provider.propTypes = {
    children : PropTypes.node.isRequired,
}