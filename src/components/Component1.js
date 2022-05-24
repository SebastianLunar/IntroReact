import React, { Component } from 'react'
import { SH3, SH4, SH5, SDiv1 } from '../styles/Styles'

export class Component1 extends Component{
     render() {
        return(
            <SDiv1>
                <SH3>Mis Estudios</SH3>
                <SH4>ESAP - 2020</SH4>
                <SH5>Administrador Público</SH5>
                <SH4>UDENAR - 2021</SH4>
                <SH5>Ingeniero Ambiental</SH5>                
            </SDiv1>
        )
    }
}