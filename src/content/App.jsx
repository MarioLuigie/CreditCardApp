/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Provider from "../store/Context"
import Section from "../content/layouts/Section"

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: blue; */
`

export default function App() {

  return (
    <div css={styles}>
      <Provider>
        <Section />
      </Provider>
    </div>
  )
}


