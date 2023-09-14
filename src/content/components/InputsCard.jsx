/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { useContext } from "react"
import { css } from '@emotion/react'
import { Context } from "../../store/Context"
import Input from "./Input"
import InputSelect from "../components/InputSelect"
import SubmitButton from "../components/SubmitButton.jsx"
import { creditCardDim, inputsCardDim } from '../../styles/dimensions'
import { months, years } from "../../constants/expirationDate"

const styles = css`
    position: relative;
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
`
export default function InputsCard () {

    const { 
        formState,
        handleChangeInput,
        handleChangeSelect,
        creditCardState,
        creditCardDispatch
    } = useContext(Context)

    return (
        <div css={styles}>
            <div className='inputsWrapper'>
                <Input 
                    label="Card Number"
                    name="cardNumber"
                    value={formState.cardNumber}
                    handleChange={handleChangeInput}
                />
                <Input 
                    label="Card Holders"
                    name="cardHolders"
                    value={formState.cardHolders}
                    handleChange={handleChangeInput}
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
            <SubmitButton 
                label="Submit"
                creditCardDispatch={creditCardDispatch}
            />
        </div>
    )
}