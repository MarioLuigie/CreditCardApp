/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext } from "react"
import { Context } from "../../store/Context"
import CreditCard from "../components/CreditCard"
import InputsCard from "../components/InputsCard"
import SidebarMenu from "../components/SidebarMenu"
import { creditCardDim, section } from '../../styles/dimensions'

const styles = (isModalOpen) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: ${section.width}%;
    max-width: ${section.maxWidth}px;
    min-width: ${section.minWidth}px;
    padding: ${creditCardDim.height}px 40px 60px;
    padding: ${!isModalOpen ? `${creditCardDim.height}px 40px 60px` : "140px 40px 60px"};
    background-color: transparent;
`

export default function Section () {

    const {
        isModalOpen,
    } = useContext(Context)

    return (
        <div css={styles(isModalOpen)}>
            {isModalOpen && <InputsCard isModal={true}/>}
            <CreditCard 
                position="absolute"
                useCreditCardDataToSave={false}
            />
            <InputsCard isModal={false}/>
            <SidebarMenu />
        </div>
    )
}