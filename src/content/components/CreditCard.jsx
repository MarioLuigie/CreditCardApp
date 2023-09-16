/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../../store/Context"
import { css } from '@emotion/react'
import { creditCardDim } from "../../styles/dimensions"
import visaLogo from "../../assets/images/visa.svg"

const styles = (position) => css`
    position: ${position};
    z-index: 1;
    top: ${creditCardDim.height / 2}px;
    width: ${creditCardDim.width}px;
    height: ${creditCardDim.height}px;
    padding: 15px 0;
    background-color: #090f16;
    border-radius: ${creditCardDim.borderRadius}px;
    box-shadow: #010c13e1 0 0 35px;
    color: white;
    font-family: 'Antic Slab', serif;
    transition: 0.2s ease;

    &:hover {
        transform: ${position === "static" ? "scale(0.95)" : ""};
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 25px;

        .sign {
            width: 65px;
            height: 55px;
            background-color: #4b4b4b;
            border-radius: 3px;
        }

        .logo {
            width: 120px;
            /* background-color: red; */
        }
    }

    .body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        /* background-color: red; */

        .number {
            width: 100%;
            text-align: center;
            font-size: 32px;
            letter-spacing: 2px;
        }
    }
    
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 25px;
        /* background-color: red; */

        .personalSection {
            border: #616161 1px solid;
            border-radius: 6px;
            padding: 8px 14px;
            width: 75%;
            height: 68px;
            font-size: 18px;
            /* background-color: red; */
        }

        .dateSection {
            height: 68px;
            width: 70px;
            padding: 8px 0;
            font-size: 18px;
            /* background-color: red; */
        }
    }

    .title {
        font-size: 13px;
        color: #bdbdbd;
    }
`
export default function CreditCard ({
    position,
    creditCardDataToSave,
    useCreditCardDataToSave,
}) {

    const { formState } = useContext(Context)
    const { 
        cardNumber, 
        cardHolders, 
        month, 
        year, 
        cvv 
    } = useCreditCardDataToSave ? creditCardDataToSave : formState

    // console.log(cardHolders, cardNumber);
    console.log(creditCardDataToSave);
    console.log(useCreditCardDataToSave);

    return (
        <div css={styles(position)}> 
            <div className="header">
                <div className="sign"></div>
                <div>
                    <img className="logo" src={visaLogo} alt="Visa" />
                </div>
            </div>
            <div className="body">
                <div className="number">
                    {cardNumber ? cardNumber : "1234 **** **** 1234"}
                </div>
            </div>
            <div className="footer">
                <div className="personalSection">
                    <p className="title">Card Holder</p>
                    <p>{cardHolders ? cardHolders?.toUpperCase() : "FULL NAME"}</p>
                </div>
                <div className="dateSection">
                    <p className="title">Expires</p>
                    <p>{month ? month?.value : "MM"}/{year ? year?.value.slice(2) : "YY"}</p>
                </div>
            </div>
        </div>
    )
}

CreditCard.propTypes = {
    position : PropTypes.string,
    creditCardDataToSave : PropTypes.object,
    useCreditCardDataToSave : PropTypes.bool,
}