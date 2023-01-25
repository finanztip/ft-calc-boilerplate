import React from 'react'
import ReactDOM from 'react-dom/client'

import reportWebVitals from './reportWebVitals'

import TestCalculator from './components/testCalculator/index'

import TestRootCalculator from './components/testRootCalculator/index'

generateComponents([
  ['ftip-test-root-calculator', TestRootCalculator],
  ['ftip-test-calculator', TestCalculator],
])

function generateComponents(componentList) {
  componentList.forEach((component) => {
    const domElement = document.getElementById(component[0])

    if (!domElement) {
      return null
    }

    const componentRoot = ReactDOM.createRoot(
      document.getElementById(component[0]),
    )
    const Component = component[1]

    componentRoot.render(
      <React.StrictMode>
        <Component />
      </React.StrictMode>,
    )
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
