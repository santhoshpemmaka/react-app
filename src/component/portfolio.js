import React,{Component} from 'react';

class Portfolio extends Component {
    render(){
        return(
            <div>
                <h1> My Work</h1>
                <p> Checkout the following things i've done:{this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Portfolio;