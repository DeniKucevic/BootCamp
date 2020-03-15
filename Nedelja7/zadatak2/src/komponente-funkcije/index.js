import React from 'react'

const Card = (props) => {
    return (
        <>
            <div id='CardEmoji'>
                <emoji>{props.emoji}</emoji>
            </div>
            <div id='CardDesc'>
                <description>{props.description}</description>
            </div>
        </>
)
}

export default Card