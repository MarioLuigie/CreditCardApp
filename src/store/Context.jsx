import { createContext, useState, useReducer } from "react"
import PropTypes from "prop-types"
import { creditCardActions } from "../constants/actions"

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

    const { ADD_CARD, DELETE_CARD, DELETE_ALL_CARDS, UPDATE_CARD } = creditCardActions
    const initialCreditCardState = []

    const creditCardReducer = (creditCardState, action) => {
        switch (action.type) {
            case ADD_CARD :
                console.log("ADD");
                return
            case DELETE_CARD :
                console.log("DELETE");
                return
            case DELETE_ALL_CARDS :
                console.log("DELETE ALL");
                return
            case UPDATE_CARD :
                console.log("UDATE");
                return
        }
    }

    const [creditCardState, creditCardDispatch] = useReducer(creditCardReducer, initialCreditCardState)

    const providerValues = {
        formState,
        handleChangeInput,
        handleChangeSelect,
        creditCardState,
        creditCardDispatch
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