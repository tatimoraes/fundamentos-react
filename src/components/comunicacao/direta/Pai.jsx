import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}><b>João</b></Filho>
        <Filho sobrenome={props.sobrenome}>Maria</Filho>
        <Filho sobrenome="Silva">Pedro</Filho>
    </div>