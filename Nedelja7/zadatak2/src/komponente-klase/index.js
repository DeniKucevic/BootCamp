import React from 'react'
import Description from './description_class';
import Emoji from './emoji_class';

class CardKlasa extends React.Component{
    render(){
        return (
            <>
            <Description description={this.props.description}/>
            <Emoji emoji={this.props.emoji}/>
            </>
                );
    }
}

export default CardKlasa