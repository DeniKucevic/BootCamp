import React from 'react'
import Description from './description'
import Emoji from './emoji/index'

const Card = (props) => {
    return (
        <>
            <Description description={props.description}></Description>
            <Emoji emoji={props.emoji}></Emoji>
        </>
)
}

export default Card