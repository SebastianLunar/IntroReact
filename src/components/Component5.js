import React, { Component } from 'react'
import { SDiv5, F1, F2, F3, SIMG } from '../styles/Styles';

export class Component5 extends Component {
    render() {
        return (
            <SDiv5>
                <SIMG src="../src/images/FotoFrontal.jpg"/>
                <F1>Sebastian Luna Rosero</F1>
                <F2>Aprendíz Geek</F2>
                <F3>Dando lo mejor para seguir aprendiendo</F3>
                <F3>Pasto, Colombia</F3>
            </SDiv5>
        );
    }
}