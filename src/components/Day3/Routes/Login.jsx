import { Component } from "react";
import AppRoute from "../AppRouter2";
import './Login.css'
//import {Link}
class Login  extends Component{
    
    state={
        adminData:{// get from be
            Name:"marina",
            pass:123
        },
        Log:false,
        txtuser:'',
        txtpass:''
    };
    handelerInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();  // 3wzo w2f eno y3ml call lel server 
        let loginObj={
            Name: this.state.txtuser,
            pass: this.state.txtpass
        }
        if(this.state.adminData.Name==this.state.txtuser
            &&this.state.adminData.pass==this.state.txtpass){
                // add this object in session 
                sessionStorage.setItem("Name",loginObj.Name);
                sessionStorage.setItem("pass",loginObj.pass);
                this.setState({
                    Log:true
                })
            }else{
                alert("wrong username or password")
            }
    }
    render(){
        if(!this.state.Log){
            return(
                <>
            <div className="container">

               <h1 className="text-primary mx-5 my-5"> Login page</h1>
               <hr/>
                <div  id="login" className="center">
                    <form className="login-form text-center" onSubmit={this.onSubmitHandler}>
               
                <span className="fa fa-user my-3"></span>
                <input 
                autoFocus className="my-3"
                onChange={this.handelerInput}
                type={"text"}  name="txtuser"  value={this.state.txtuser}
                placeholder="Enter your name"
                />

                <span className="fa fa-lock my-3"></span>
                <input  className="my-3"
                autoComplete="off"
                onChange={this.handelerInput}
                placeholder="Enter your Password"
                type={"password"} name="txtpass"  value={this.state.txtpass}/>
                <input  type={"submit"} value="LogIn" className="my-4" />
                    </form>
            
                </div>
            </div>
            </>
             )
        }else{
            return (<>
                <AppRoute/>
            </>)
        }
    }

    componentWillUnmount(){
        console.log(window.history)
    }
}

export default Login ;