import React from 'react';

class BtnNoCalendar extends React.Component {
    bring(){
        alert("no calendar");   
    }
    render(){
        return <button className = "btn" onClick={this.bring}>직접 입력하기</button>;
    }
}

export default BtnNoCalendar;