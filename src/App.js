import React, { Component } from 'react'

class App extends Component {
state = {
    Name : "",
    Department: "",
    Rating : "",
    arr : []
  };
change = (e)=>{

console.log(e.target.value);
this.setState({[e.target.name]: e.target.value})

}

showData = () =>{
  const empdata = {
    Name : this.state.Name,
    Department: this.state.Department,
    Rating: this.state.Rating,
    
  };
  const newarr = this.state.arr;
  newarr.push(empdata);
  this.setState({arr:newarr})


}

  render() {
    return (
      <div>
        <h1 align='center'>EMPLOYEE FEEDBACK FORM</h1>
        <form align='center'>
        <label>Name : &nbsp;&nbsp; </label>
        <input type='text' name="Name" value={this.state.Name} onChange={this.change} /> <br />
        <label>Department :</label>
        <input type='text' name="Department" value={this.state.Department} onChange={this.change} /> <br />
        <label>Rating : &nbsp;</label>
        <input type='number' name="Rating" value={this.state.Rating} onChange= {this.change} /> <br/>
        <button type='button' align='center' onClick={this.showData}>Submit</button>
        </form>
        <div className='container'>
          {this.state.arr.map((value,index)=>{
            return (
              <span key={index}>Name :{value.Name} |Department :{value.Department} |Rating :{value.Rating}</span>
            )
          })}
        </div>
      </div>
    )
  }
}
export default App;