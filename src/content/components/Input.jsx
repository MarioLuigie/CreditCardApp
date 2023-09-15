/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PropTypes from "prop-types"
import { inputsCardDim } from '../../styles/dimensions'

const styles = css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: ${inputsCardDim.inputWrapperHeight}px;
    /* background-color: green; */

    .inputWrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        width: 100%;
        /* background-color: red; */
    }

    .input {
        width: 100%;
        font-size: 15px;
        padding: 9px 10px;
        border-radius: 4px;
        border: #c4c4c4 1px solid;

        &::placeholder {
            font-size: 15.5px;
            color: #969696;
            letter-spacing: 0.4px;
        }

        &:focus::placeholder {
            visibility: hidden;
        }
     }

     .label {
        font-size: 15px;
        color: #141414;
     }
`
export default function Input ({
    label,
    name,
    handleChange,
    value,
    placeholder
}) {

    return (
        <div css={styles}>
            <div className='inputWrapper'>
                <label 
                    className='label'
                    htmlFor="card_number"
                >
                    {label}
                </label>
                <input 
                    className='input'
                    id="card_number" 
                    name={name}
                    type="text" 
                    onChange={handleChange}
                    value={value}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

Input.propTypes = {
    label : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    handleChange : PropTypes.func,
    value : PropTypes.string,
    placeholder : PropTypes.string,
}