/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext } from "react"
import { Context } from "../../store/Context"
import CreditCard from "./CreditCard"

const animationStyles = (isSidebarOpen) => css`
    animation: ${isSidebarOpen ? "slide-in" : "slide-out"} 0.5s ease-in-out forwards;

    @keyframes slide-in {
        0% {
            left: -500px;
        }
        100% {
            left: 0;
        }
    }

    @keyframes slide-out {
        0% {
            left: ${isSidebarOpen ? "0" : "-500px"};
        }
        100% {
            left: -500px;
        }
    }
`
const styles = css`
    z-index: 2;
    position: absolute;
    top: 0;
    left: -500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 500px;
    max-width: 550px;
    width: 50vw;
    height: 100vh;
    background-color: #cfcfcf76;
    backdrop-filter: blur(8px);
    box-shadow: #1f1f1fb0 0 0 20px;

    .creditCardsListPanel {
        z-index: 100;
        position: fixed;
        width: 100%;
        height: 65px;
        border-bottom: #a0a0a0 1px solid;
        background-color: #ffffffa0;
        backdrop-filter: blur(8px);
     }

     .creditCardsList {
        overflow: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 100px 30px 50px;
        /* background-color: red; */
     }
`

export default function CreditCardsList () {

    const { creditCardsList, isSidebarOpen } = useContext(Context)
    console.log(creditCardsList);

    return (
        <div css={[styles, animationStyles(isSidebarOpen)]}>
            <div className='creditCardsListPanel'>
                
            </div>
            <div className='creditCardsList'>
                {creditCardsList.map((card, i) => (
                    <CreditCard 
                        key={i}
                        position="static"
                        creditCardDataToSave={card}
                        useCreditCardDataToSave={true}
                    />
                ))}
            </div>
        </div>
    )
}