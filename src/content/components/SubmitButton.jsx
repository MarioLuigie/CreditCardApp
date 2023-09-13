/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PropTypes from "prop-types"

const styles = css`
    width: 100%;

    .button {
        width: 100%;
        background-color: #3674a7;
        padding: 10px;
        font-size: 18px;
        color: #f0f0f0;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: #575757b0 0 0 30px;
        transition: all 0.1s ease-in-out;

        &:hover {
            background-color: #3d7fb4;
        }
     }
`

export default function SubmitButton ({
    label
}) {

    return (
        <div css={styles}>
            <button className="button">
                {label}
            </button>
        </div>
    )
}

SubmitButton.propTypes = {
    label : PropTypes.string.isRequired,
}