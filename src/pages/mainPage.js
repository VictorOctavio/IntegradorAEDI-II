import React from 'react'

//Components
import { Acercade } from '../components/Acercade/Acercade'
import { Download } from '../components/Download/Download'
import { Header } from '../components/Header/Header'

export const MainPage = (props) => {
  return(
    <React.Fragment>
      <Header/>
      <Acercade/>
      <Download/>
    </React.Fragment>
   )

 }