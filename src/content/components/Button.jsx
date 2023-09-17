/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PropTypes from "prop-types"

const styles = css`
    

    .button {
        padding: 8px 0;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        cursor: pointer;
        background-color: transparent;
        color: #525252;

        &:hover {
            color: black;
        }
     }
`

export default function Button ({
    label,
    icon,
    isIcon,
    onHandle,
}) {

    return (
        <div css={styles}>
            <button 
                className='button'
                onClick={onHandle}
            >
                {isIcon ? icon : label}
            </button>
        </div>
    )
}

Button.propTypes = {
    label : PropTypes.string.isRequired,
    icon : PropTypes.object,
    isIcon : PropTypes.bool.isRequired,
    onHandle : PropTypes.func.isRequired,
}