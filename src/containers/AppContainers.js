import React from 'react';
import { Component1 } from '../components/Component1';
import { Component2 } from '../components/Component2';
import { Component3 } from '../components/Component3';
import { Component4 } from '../components/Component4';
import { Component5 } from '../components/Component5';

const AppContainers = () => {
    return (
        <div>
            <Component5/>
            <Component1/>
            <Component2/>
            <Component3/>
            <Component4/>
        </div>
    );
};

export default AppContainers;