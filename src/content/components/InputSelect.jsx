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

        option {
            background-color: red;
        }
    }
`

const customStyles = {
    // Styl dla kontenera menu
    // menu: css`
    //   background-color: lightgray;
    //   border-radius: 8px;
    //   width: 200px;
    // `,
  
    // Styl dla opcji w menu
    option: (provided, state) => css`
      ${provided}
      background-color: ${state.isSelected ? 'blue' : 'white'};
      color: ${state.isSelected ? 'white' : 'black'};
      &:hover {
        background-color: lightblue;
      }
    `,
  };

export default function InputSelect ({
    label,
    inputId,
    placeholder,
    options
}) {



    // const handleChange = (selectedOption) => {

    // }

    return (
        <div css={styles}>
            <label htmlFor={inputId} className="label">{label}</label>
            <Select 
                styles={customStyles}
                className="select"
                inputId={inputId}
                // value={"selectedOption"}
                options={options}
                placeholder={placeholder}
                // onChange={"handleChange"}
                // isSearchable={true}
            />
        </div>
    )
}

InputSelect.propTypes = {
    label : PropTypes.string,
    inputId : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    options : PropTypes.array,
}

