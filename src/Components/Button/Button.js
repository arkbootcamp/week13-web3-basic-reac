import React, {Component} from 'react'
import style from './button.module.css'


class Button extends Component{

    render(){
        return(
            <button 
            onClick={()=>this.props.fireEvent('habis')}
            style={{'backgroundColor': this.props.color}}
            className={`${style.btn}`}>{this.props.title}</button>
        )
    }
}

export default Button