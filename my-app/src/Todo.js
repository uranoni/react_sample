import React , {Component}from "react";
import Item from "./Item";
import axios from "axios";
const baseURL = "http://localhost:3001/getTodo";

class Todo extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        todo:[{name:'apple'},{name:'banaba'}]
     }

     passData=()=>{
        axios.get(baseURL)
        .then(res=>{console.log(`client result ${res} `)})
        .catch(err=>console.log(err))
     }
    render() { 
        return ( 
            <div>
                <div>
                    <ul>
                    { this.state.todo.map(el=>{
                            return <Item text ={el.name}/>
                        })}
                    </ul>
                     <button onClick={this.passData}>pass data to server</button>   
                </div>
            </div>
         );
    }
}
 
export default Todo;