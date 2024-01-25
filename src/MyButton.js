import React from 'react';
import $ from 'jquery';

class MyButton extends React.Component {
    handleClick = () => {
        $(this.refs.myButton).hide();
    }

    render() {
        return (
            <button ref="myButton" onClick={this.handleClick}>
                Click to hide
            </button>
        );
    }
}

export default MyButton;