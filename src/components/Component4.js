import React, { Component } from 'react'
import { SDiv4, SH3, SH4, Sprogress, Cont } from '../styles/Styles';

export class Component4 extends Component {
    render() {
        return (
            <SDiv4>
                <SH3>Habilidades</SH3>
                <Cont>
                    <div>
                        <SH4>HTML</SH4><br></br>
                        <Sprogress id="file" max="100" value="60"></Sprogress>
                    </div>
                    <div>
                        <SH4>CSS</SH4><br></br>
                        <Sprogress id="file" max="100" value="65"></Sprogress>
                    </div>
                    <div>
                        <SH4>JavaScript</SH4><br></br>
                        <Sprogress id="file" max="100" value="75"></Sprogress>
                    </div>
                    <div>
                        <SH4>ReactJS</SH4><br></br>
                        <Sprogress id="file" max="100" value="2"></Sprogress>
                    </div>
                </Cont>
            </SDiv4>
        );
    }
}