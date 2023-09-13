/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { creditCardDim } from "../../styles/dimensions"

const styles = css`
    position: absolute;
    z-index: 1;
    top: ${creditCardDim.height / 2}px;
    width: ${creditCardDim.width}px;
    height: ${creditCardDim.height}px;
    background-color: #090f16;
    border-radius: ${creditCardDim.borderRadius}px;
    box-shadow: #010c13e1 0 0 35px;

    .example {

     }
`
export default function CreditCard () {

    return (
        <div css={styles}> 
            
        </div>
    )
}