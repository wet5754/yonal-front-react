import React, {Component} from 'react';

class InputName extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
      }
      handleChange = (event) => {
        this.setState({value: event.target.value});
      }
      handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render(){
        let inputValue = React.createRef();
        

        return(

        <form onSubmit={this.handleSubmit}>
            <label>
                별명:
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder = "별명" />
            </label>
            <input type="submit" value="확인" className="btn" />
        </form>
        );
    }
}

export default InputName;
