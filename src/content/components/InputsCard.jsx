/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { useContext } from "react"
import { css } from '@emotion/react'
import { Context } from "../../store/Context"
import PropTypes from "prop-types"
import Input from "./Input"
import InputSelect from "../components/InputSelect"
import SubmitButton from "../components/SubmitButton.jsx"
import { creditCardDim, inputsCardDim } from '../../styles/dimensions'
import { months, years } from "../../constants/expirationDate"
import Button from "./Button"
import { creditCardsActions } from "../../constants/actions"

const styles = (isModal) => css`
    position: ${isModal ? "absolute" : "static"};
    z-index: ${isModal ? "3" : "none"};
    box-shadow: ${isModal ? "#1f1f1fcc 0 0 35px" : ""};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: ${inputsCardDim.width}%;
    min-width: ${inputsCardDim.minWidth}px;
    max-width: ${inputsCardDim.maxWidth}px;
    padding: ${creditCardDim.height / 2}px 30px 30px;
    background-color: #f0f0f0;
    border-radius: 10px;
    /* background-color: yellow; */

    .inputsWrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 70px;
        /* background-color: orange; */
     }

    .selectsWrapper {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        column-gap: 20px;
        /* background-color: grey; */

        @media screen and (max-width: 700px) {
            flex-direction: column;
        }
    }

    .buttonsWrapper {
        display: flex;
        justify-content: center;
        gap: 20px;
        width: 100%;
    }
`
export default function InputsCard ({
    isModal,
}) {

    const { 
        formState,
        handleChangeInput,
        handleChangeSelect,
        creditCardsDispatch,
        isModalOpen,
        handleOpenModal,
        handleClickButton,
        cardEditedId
    } = useContext(Context)

    const { UPDATE_CARD } = creditCardsActions

    return (
        <div css={styles(isModal)}>
            <div className='inputsWrapper'>
                <Input 
                    label="Card Number"
                    name="cardNumber"
                    value={formState.cardNumber}
                    handleChange={handleChangeInput}
                    placeholder="Enter your number"
                />
                <Input 
                    label="Card Holders"
                    name="cardHolders"
                    value={formState.cardHolders}
                    handleChange={handleChangeInput}
                    placeholder="Enter your full name"
                />
                <div className='selectsWrapper'>
                    <InputSelect 
                        label="Expiration Date"
                        inputId="selectMonth"
                        name="month"
                        placeholder="Month"
                        options={months}
                        selectedOption={formState.month}
                        onChange={handleChangeSelect}

                    />
                    <InputSelect 
                        inputId="selectYear"
                        name="year"
                        placeholder="Year"
                        options={years}
                        selectedOption={formState.year}
                        onChange={handleChangeSelect}
                    />
                    <Input 
                        label="CVV"
                        name="cvv"
                        value={formState.cvv}
                        handleChange={handleChangeInput}
                    />
                </div>
            </div>
            {!isModal 
                ? <SubmitButton 
                    label="Submit"
                    creditCardsDispatch={creditCardsDispatch}
                />
                : <div className="buttonsWrapper">
                    <Button 
                        label="done" 
                        isIcon={false} 
                        onHandle={handleOpenModal(false)}
                        addStyles={{
                            backgroundColor : "#3674a7", 
                            boxShadow : "#575757b0 0 0 30px",
                            color : "black",
                            fontSize : "18px",
                            fontColor : "#f0f0f0",
                            fontWidth : "100%",
                            hoverBackgroundColor : "#3d7fb4",
                            hoverColor : "inherit"
                        }}
                    />
                    <Button 
                        label="apply" 
                        isIcon={false} 
                        onHandle={handleClickButton(UPDATE_CARD, {cardId : cardEditedId})}
                        addStyles={{
                            backgroundColor : "#3674a7", 
                            boxShadow : "#575757b0 0 0 30px",
                            color : "black",
                            fontSize : "18px",
                            fontColor : "#f0f0f0",
                            fontWidth : "100%",
                            hoverBackgroundColor : "#3d7fb4",
                            hoverColor : "inherit"
                        }}
                    />
                </div>
            }
        </div>
    )
}

InputsCard.propTypes = {
    isModal : PropTypes.bool.isRequired,
}