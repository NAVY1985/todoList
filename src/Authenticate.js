import React from 'react';
import firebase from 'firebase';


class Authenticate extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            email: '',
            password: '',
            error:'',
            
            
        }
   

    this.handleEmailChange= this.handleEmailChange.bind(this);
    this.handlePasswordChange= this.handlePasswordChange.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
}



    handleEmailChange(e){
        this.setState({email: e.target.value});
    }
    handlePasswordChange(e){
        this.setState({password: e.target.value});
    }

    handleCreateUser(){
        // console.log('algo');
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
            this.setState({error: error.message})

        });
        
    }

    handleLogin(){
        // console.log('algo');
        firebase.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
            this.setState({error: error.message})

        });
    }
        

    render (){
        return (
            <form class="container-fluid col-sm-12 col-lg-4 mt-4 ">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input value={this.state.mail} onChange={this.handleEmailChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input value={this.state.password} onChange={this.handlePasswordChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                    <button onClick={this.handleCreateUser} type="button" class="btn btn-danger m-4">New User</button>
                    <button  onClick={this.handleLogin} type="button" class="btn btn-danger m-4">Sign In</button>
            </form>
        );
    }
}

export default Authenticate;