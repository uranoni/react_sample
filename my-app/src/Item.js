import React,{Component} from "react";


class Item extends Component {
    state = {  }
    render() { 
        return ( <li>{this.props.text}</li> );
    }
}
 
export default Item;