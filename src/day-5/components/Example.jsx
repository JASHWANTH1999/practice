import React from 'react'
import { UseThemechange } from '../ThemeProvider'

export const Example = () => {
    const {theme,toggleTheme}=UseThemechange()
  return (
    <div style={{backgroundColor:theme==='light'?'white':'black',color:theme==='light'?'black':'white'}}>
    <button onClick={toggleTheme}>change the toggle</button>
    <div>Example</div>
    </div>
  )
}
