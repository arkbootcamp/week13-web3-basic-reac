import React, {Component} from 'react'
import Button from '../Button/Button'
import './card.css'
import style from './card.module.css'

class Card extends Component{
    constructor(props){
        super(props)
        this.state={
            title: "Nasi goreng panas",
            status: 'tersedia'
        }
        console.log("contructor di jalankan");
    }
    handleClick = (status)=>{
        this.setState({status: status})
    }
    componentDidMount(){
        console.log("method componentDidMount di jalankan");
    }
    componentDidUpdate(){
        console.log("method componentDidUpdate di jalankan");
    }
    componentWillUnmount(){
        console.log("method componentWillUnmount di jalankan");
    }
    render(){
        console.log(this.props);
        console.log(" method render di jalankan");
        return(
            <div className='card bg-color'>
              <h3 className={style.title}>{this.state.title}</h3>
              <p>status: {this.state.status}</p>
                <Button
                fireEvent={this.handleClick}
                color="red" 
                title='masuk ke keranjang'
                />

            </div>
        )
    }
}
export default Card