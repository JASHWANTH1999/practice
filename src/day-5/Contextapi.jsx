import React from 'react'
import { Example } from './components/Example'
import { Functional } from './components/Functional'
import { ThemeProvider } from './ThemeProvider'


export const Contextapi = () => {
  return (
    <>
    <ThemeProvider >
    <Functional/>
    <Example/>
    </ThemeProvider>
    </>
  )
}
