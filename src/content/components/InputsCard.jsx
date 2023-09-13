/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from "./Input"
import InputSelect from "../components/InputSelect"
import SubmitButton from "../components/SubmitButton.jsx"
import { creditCardDim, inputsCardDim } from '../../styles/dimensions'
import months from "../../constants/months"

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
    /* background-color: yellow; */
    background-color: #f0f0f0;
    border-radius: 10px;

    .inputsWrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* background-color: orange; */
        padding-top: 70px;
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

    const monthsOptions = months

    return (
        <div css={styles}>
            <div className='inputsWrapper'>
                <Input 
                    label="Card Number"
                />
                <Input 
                    label="Card Holders"
                />
                <div className='selectsWrapper'>
                    <InputSelect 
                        label="Expiration Date"
                        inputId="selectYear"
                        placeholder="Year"
                    />
                    <InputSelect 
                        inputId="selectMonth"
                        placeholder="Month"
                        options={monthsOptions}

                    />
                    <InputSelect 
                        label="CVV"
                        inputId="selectCVV"
                    />
                </div>
            </div>
            <SubmitButton 
                label="Submit"
            />
        </div>
    )
}