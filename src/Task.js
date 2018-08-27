import React from 'react';




class Task extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            text: '',
        }
        this.makeEditable= this.makeEditable.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
 
        this.inputRef = React.createRef();
    }
 
    handleInputChange(e){
        this.setState({text: e.target.value});
    }
 
    makeEditable(e) {
        e.preventDefault();
        this.setState({editing: true, text: this.props.text});
    }
 
    handleCancel(e) {
        e.preventDefault();
        this.setState({editing: false});
    }
 
    handleEdit(e){
        e.preventDefault();
        this.props.onEdit(this.state.text, this.props.id);
        this.setState({editing:false});
    }
 
    handleKeyUp(e){
         if(e.keyCode===13) this.handleEdit(e);
     }
 
    componentDidUpdate(){
        if (this.state.editing) {
            console.log('updating');
            this.inputRef.current.focus();
        }
    }
 
    render(){
        if(this.state.editing){
            return (
                <div className="task" id={this.props.id}>
                    <input className ="mb-2" ref={this.inputRef} type="text" id={`input-${this.props.id}`} value={this.state.text} onKeyUp={this.handleKeyUp} onChange={this.handleInputChange}/>
                        <div> 
                            <button className ='btn btn-outline-dark btn-sm mr-4 mb-2' type="button" onClick={this.handleCancel}>cancel</button>
                            <button className ='btn btn-outline-dark btn-sm mr-4 mb-2' type="button" onClick={this.handleEdit}>save</button>
                        </div>
                </div>
            );
        } else {
            return (
                <div className="task" id={this.props.id}>
                    <input type="checkbox" id={`check-${this.props.id}`} onChange={this.props.onCheck} checked={this.props.done}/>
                    <label htmlFor={`check-${this.props.id}`}>{this.props.text}</label>
                    <div>
                    <button className ='btn btn-outline-dark btn-sm mr-4 mb-2' onClick={this.makeEditable}>edit</button> 
                    <button className ='btn btn-outline-dark btn-sm mr-4 mb-2' onClick={this.props.onDelete}>delete</button>
                    </div>
                </div>
            );
        }
    }
 
 }

export default Task;