import React, {Component} from 'react';

class BtnCalendar extends Component {
    bring(){
        alert("bring calendar");   
    }
    render(){
        return <button className = "btn" onClick={this.bring}>구글 캘린더 가져오기</button>;
    }
}

export default BtnCalendar;