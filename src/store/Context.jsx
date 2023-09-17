import { createContext, useState, useReducer } from "react"
import PropTypes from "prop-types"
import { creditCardsActions } from "../constants/actions"

export const Context = createContext()

export default function Provider ({ children }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
        // console.log((formState[name])?.value);
    }

    const { 
        ADD_CARD, 
        DELETE_CARD, 
        DELETE_ALL_CARDS, 
        UPDATE_CARD, 
    } = creditCardsActions

    const initialCreditCardsList = []

    const creditCardsReducer = (creditCardsList, action) => {
        //Deep copy of actualStateObject from InputsCard
        const creditCardSaved = {
            ...formState,
            id : `${Date.now()}_${Math.floor(Math.random() * 1000)}`
        }

        switch (action.type) {
            case ADD_CARD :
                // console.log("ADD")
                console.log(creditCardSaved)
                setFormState(initialFormState)
                return [...creditCardsList, {...creditCardSaved}].reverse()
            case DELETE_CARD :
                // console.log("DELETE")
                return creditCardsList.filter(card => card.id !== action.cardId)
            case DELETE_ALL_CARDS :
                // console.log("DELETE ALL")
                return [...initialCreditCardsList]
            case UPDATE_CARD :
                // console.log("UDATE")
                return []
        }
    }

    const [creditCardsList, creditCardsDispatch] = useReducer(creditCardsReducer, initialCreditCardsList)

    const providerValues = {
        formState,
        handleChangeInput,
        handleChangeSelect,
        creditCardsList,
        creditCardsDispatch,
        isSidebarOpen,
        setIsSidebarOpen
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