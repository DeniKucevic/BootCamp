import React from 'react'

class CardKlasa extends React.Component{
    render() {
    return  <>
    <div id='CardEmoji'>
        <emoji>{this.props.emoji}</emoji>
    </div>
    <div id='CardDesc'>
        <description>{this.props.description}</description>
    </div>
</>
    }
}

export default CardKlasa