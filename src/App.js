import React, { Component } from 'react'
import { Paper, Typography, TextField, Button } from '@material-ui/core'
//export default App;
export default class App extends Component {  
  state = { exercises: [],    title: ''  }
  handleChange = ({ target: { name, value } }) =>  this.setState({[name]: value})
//  render() {    return <h1>Exercises</h1>  }
render() {    
  const { title } = this.state    
  return (     
  <Paper> 
    <Typography variant='h2' align='center' gutterBottom>
    {title}
    </Typography>      
    <form>  
      <TextField name='title' label='Exercise' value={title} onChange={this.handleChange} margin='normal' />
<Button type='submit' color='primary' variant='outlined'>Create</Button>
    </form>
    </Paper>    
    )  
  }
  //render() {    return (<Typography variant='h1' align='center' gutterBottom>Exercises</Typography>)  }
}