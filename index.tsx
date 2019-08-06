import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Hello } from './components/Hello';

ReactDOM.render(
    <Hello compiler={6} framework="React"/>,
    document.getElementById('example')
)