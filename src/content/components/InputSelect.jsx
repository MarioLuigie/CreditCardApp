/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Select from "react-select"
import PropTypes from "prop-types"
import { inputsCardDim } from '../../styles/dimensions'

const styles = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 2px;
    width: 100%;
    height: ${inputsCardDim.inputWrapperHeight}px;
    /* background-color: grey; */

    .label {
        font-size: 15px;
        color: #141414;
    }

    .select {
        width: 100%;
        color: #1d1d1d;
    }
`

const customStyles = {

    // Styl dla kontenera menu
    control: (baseStyles, state) => ({
        ...baseStyles,
        borderColor : state.isFocused ? 'grey' : ' #bebebe',
        width: "100%",
        color: "#1d1d1d",

        "&:hover" : {
            cursor : "pointer",
        }
    }),
    
    // Styl dla opcji w menu
    option: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor : state.isSelected ? '#525252' : 'white',
        color : state.isSelected ? 'white' : '#2c2c2c',

        "&:hover" : {
            backgroundColor: "#e0e0e0",
            cursor : "pointer",
        }
      }),
  };

export default function InputSelect ({
    label,
    inputId,
    name,
    placeholder,
    options,
    selectedOption,
    onChange
}) {

    return (
        <div css={styles}>
            <label htmlFor={inputId} className="label">{label}</label>
            <Select 
                styles={customStyles}
                className="select"
                inputId={inputId}
                value={selectedOption}
                onChange={onChange(name)}
                options={options}
                placeholder={placeholder}
                isSearchable={true}
            />
        </div>
    )
}

InputSelect.propTypes = {
    label : PropTypes.string,
    inputId : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    options : PropTypes.array,
    selectedOption : PropTypes.object,
    onChange : PropTypes.func,
}

