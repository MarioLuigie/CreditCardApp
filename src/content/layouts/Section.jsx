/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import CreditCard from "../components/CreditCard"
import InputsCard from "../components/InputsCard"
import SidebarMenu from "../components/SidebarMenu"
import Button from "../components/Button"
import { creditCardDim, section } from '../../styles/dimensions'

const styles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: ${section.width}%;
    max-width: ${section.maxWidth}px;
    min-width: ${section.minWidth}px;
    padding: ${creditCardDim.height}px 40px 60px;
    background-color: transparent;
`

export default function Section () {

    return (
        <div css={styles}>
            <CreditCard 
                position="absolute"
                useCreditCardDataToSave={false}
            />
            <InputsCard />
            <SidebarMenu />
            <Button label="ok" />
        </div>
    )
}