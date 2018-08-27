import React from "react";

class AddForm extends React.Component {

    constructor(props) {
        super(props);
        /* You need to store the value in the state */
        this.state = {
                       value: ""
                     }

        /** Bind this */
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);

    }

    render() {
        /* set value and onChange*/
        return ( < div className='container mt-4'>
            <input className = "m-2" type = "text" value = { this.state.value } onChange = { this.handleChange } onKeyUp={this.handleKeyUp} />   
            <button className = "btn btn-danger m-2 btn-sm" type = "button" onClick = { this.handleClick } > ADD </button> 
            </div>
        );
    }

    handleChange(event) {
        /* Updates the value onChange*/
        this.setState({ value: event.target.value });
    }
    handleClick(e) {
        /* The value is stored in this.state.value, do something with it*/
        this.props.saveForm(this.state.value);
        this.setState({  value:""});
    }

    handleKeyUp(e) {
        if (e.keyCode === 13) this.handleClick();
    }

}

export default AddForm;