import React, {Component, Fragment} from 'react'
import Button from '../Components/Button/Button'
import Card from '../Components/Card/Card'
import Navbar from '../Components/Navbar/Navbar'

class Main extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: 'risano',
      email: 'risano@gmail.com',
      showCard: true
    }
  }
  // myname = 'risano akbar'
  // state ={
  //   name: 'risano',
  //   email: 'risano@gmail.com'
  // }
  // myName = 'risano'

  callName = ()=>{
    return 'risano akbar'
  }
  
  gantiState=()=>{
    this.setState({
      email: 'akbar@gmail.com'
    })
  }
  toggleCard = ()=>{
    if(this.state.showCard){
      this.setState({showCard: false})
    }else{
      this.setState({showCard: true})
    }
  }

  render(){
  
    return (
      <Fragment>
        <Navbar/>
        <h1>page Main</h1>
      <h1>hello world {this.state.email} </h1>
      <p>hai apa kabar dengan name : {this.state.name}</p>
      {/* <button onClick={()=>this.setState({email: 'akbar2@gamil.com', name: 'akbar'})}>ganti email</button> */}
      <Button fireEvent={()=>this.setState({email: 'akbar2@gamil.com', name: 'akbar'})} title= "click" color="yellow"/>
      <hr />
      
      <Button title={this.state.showCard ? 'hilangkan ': 'tampilkan'} fireEvent={this.toggleCard}/>
      {/* {this.state.showCard ? <Card/> : null} */}
      {this.state.showCard && <Card/> }

      </Fragment>
    )
  }
}
export default Main
