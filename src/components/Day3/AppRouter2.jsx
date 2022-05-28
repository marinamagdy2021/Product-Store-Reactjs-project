import { BrowserRouter as Router,Route} from "react-router-dom";
import { Component } from "react";
import AddComp from "./Routes/AddComp";
import DetailsComp from "./Routes/DetailsComp";
import ListComp from "./Routes/ListComp";
import Login from "./Routes/Login";
import EditComp from "./Routes/EditComp";
import Header from "../Header";
import Footer from "../footer";

class AppRoute extends Component {
    constructor(){
        super();
        this.List=[
                {id:1,name:"foot up",quantity:5,prductimag:"images/11.jpg",productDesc:"Skin care"},
                {id:2,name:"pure skin",quantity:5,prductimag:"images/13.jpg",productDesc:"Skin care"} ,
                {id:3,name:"gaurd 3D",quantity:5,prductimag:"images/14.jpg",productDesc:"Hair care"}     ,
                {id:4,name:"",quantity:5,prductimag:"images/15.jpg",productDesc:"Perfume"},
            ];
        this.state={
            StudentArray:this.List,
            ShowAdd:0,
            Details :{},
            LogInFlag:true
        }
    }
    AddItem = (m)=>{
        let newArray = [...this.state.StudentArray,m];
        this.setState({
            StudentArray : newArray,
            ShowAdd:0
            });
    }
    RemoveHandler=(_index)=>{
        this.state.StudentArray.splice(_index,1);
        this.setState({
            StudentArray :this.state.StudentArray,
        })
    }
    DetailHandler =(i)=>{
        let newstd = this.state.StudentArray[i]
        console.log(newstd);
        this.setState({
            Details:newstd,
        })
    }
    LoginHandler=()=>{
        this.setState({
            LogInFlag:false
        })
    }
   
// ana fel logout b5leh yms7 el session storage 



    render() { 
        if( this.state.LogInFlag==true && sessionStorage.getItem('Name')=="marina"&&sessionStorage.getItem('pass')=="123")  // this.state.LogInFlag==1 &&
        {
            return(
            <>
                <Router>
                    <Header LoginRef= {this.LoginHandler} ></Header>
                    <Route component={(props)=>
                        <ListComp 
                        Ref={this.state.StudentArray} 
                        DetialHandlerRef={this.DetailHandler}
                        RemoveHandlerRef={this.RemoveHandler}{...props}>
                        </ListComp>} exact path="/"></Route>
                    <Route component={()=><AddComp  AddRef={this.AddItem}/>} path="/Add"></Route>
                    <Route component={(props)=><DetailsComp RefItem={this.state.Details} {...props} />}   path="/details/:id"></Route>
                    <Route component={EditComp} path="/Edit/:id" ></Route>
                    <Footer LoginRef= {this.state.LogInFlag}  />
                </Router>
            </>
            );
        }
        else{
            return (
                <>
                    <Login />
                </>
            )
        }
        }
}
 
export default AppRoute;