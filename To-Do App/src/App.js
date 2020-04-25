import React from 'react';
import logo from'./logo.png';
import "./App.css";

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      newItem : "",
      list : []
    }
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };

      const list=[...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !==id);
    this.setState({
      list: updatedList
    })
  }

  updatedInput(input){
    this.setState({
      newItem: input
    })
  }

  render(){
    return(
      <div>
        <img src={logo} className="logo" />
        <h1 className="app-title"></h1>
        <div className="container">
          <strong>ADD AN ITEM..!</strong>
          <br />
          <input type="text" className="input-text" placeholder="Write a Todo"
          required value={this.state.newItem} 
          onChange={e => this.updatedInput(e.target.value)}></input>
          <button className="add-btn"
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          ><strong>Add To Do</strong></button>
          <div className="list">
            <ul>
              {this.state.list.map(item =>{
                return(
                  <li key={item.id}>
                    <input type="checkbox" name="idDone" checked={item.isDone}
                    onChange={()=>{}}></input>
                    {item.value}
                    <button className="btn"
                    onClick={() => this.deleteItem(item.id)}><strong>Delete</strong></button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox"></input>
                 Write some code!
                <button className="btn"><strong>Delete</strong></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;