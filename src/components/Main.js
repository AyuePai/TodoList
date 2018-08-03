import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';

//import yeomanImage from '../images/yeoman.png';

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      list: [],
      inputValue:''
    };
    this.handleBtnClick=this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleBtnClick(){
    this.setState({list:[...this.state.list,this.state.inputValue]});
  }
  handleInputChange(e){
    this.setState({inputValue:e.target.value});
  }
  render() {
    return (
      <div>
        <div className="inputArea">
          <input value={this.state.input} onChange={this.handleInputChange} />
          <button style={{'margin-left':'10px'}} className="btn" onClick={this.handleBtnClick}>添加</button>
        </div>
        <ul>
          {this.state.list.map((item,index)=>{
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    );
  }
}

TodoList.defaultProps = {
};

export default TodoList;
