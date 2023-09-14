/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import CreditCard from "../components/CreditCard"
import InputsCard from "../components/InputsCard"
import { creditCardDim, section } from '../../styles/dimensions'

const styles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: ${section.width}%;
    max-width: ${section.maxWidth}px;
    min-width: ${section.minWidth}px;
    padding: ${creditCardDim.height}px 40px 60px;
    background-color: #2e2e2e;
`

export default function Section () {

    return (
        <div css={styles}>
            <CreditCard />
            <InputsCard />
        </div>
    )
}