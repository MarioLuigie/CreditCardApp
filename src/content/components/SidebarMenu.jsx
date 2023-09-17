/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext } from "react"
import { Context } from "../../store/Context"
import CreditCard from "./CreditCard"
import ChevronButton from "./ChevronButton"
import Button from "./Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { creditCardsActions } from "../../constants/actions"
import ControlPanel from "./ControlPanel"


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
    height: 100vh;
    background-color: #cfcfcf76;
    backdrop-filter: blur(8px);
    box-shadow: #1f1f1fb0 0 0 20px;

    .creditCardsListPanel {
        padding: 0 15px;
        z-index: 100;
        position: fixed;
        display: flex;
        align-items: center;
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
        gap: 30px;
        padding: 100px 30px 50px;
        /* background-color: red; */
     }
`

export default function SidebarMenu () {

    const icons = {
        deleteIcon : <FontAwesomeIcon icon={faTrash} />,
        editIcon : <FontAwesomeIcon icon={faPenToSquare} />
    }

    const { 
        creditCardsList, 
        isSidebarOpen,
        creditCardsDispatch,
        handleClickButton,
    } = useContext(Context)

    const { DELETE_ALL_CARDS } = creditCardsActions
    // console.log(creditCardsList);

    // const handleClickButton = (actionType, payload) => () => {
    //     creditCardsDispatch({
    //         ...payload,
    //         type : actionType,
    //     })
    // }

    return (
        <div css={[styles, animationStyles(isSidebarOpen)]}>
            <ChevronButton position="absolute"/>
            <div className='creditCardsListPanel'>
                <Button 
                    label="delete"
                    icon={<FontAwesomeIcon icon={faTrash} />}
                    isIcon={true}
                    onHandle={handleClickButton(DELETE_ALL_CARDS)}
                />
            </div>
            <div className='creditCardsList'>
                {creditCardsList.map((card, i) => (
                    <CreditCard 
                        key={i}
                        position="static"
                        creditCardDataToSave={card}
                        isCreditCardDataToSave={true}
                        controlPanel={
                            <ControlPanel 
                                icons={icons} 
                                isIcon={true} 
                                id={card.id}
                                clickButton={handleClickButton}
                            />
                        }
                    />
                ))}
            </div>
        </div>
    )
}