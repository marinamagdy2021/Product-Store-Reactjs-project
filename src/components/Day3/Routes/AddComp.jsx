import { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

class AddComp extends Component {
    
    state={  // hybind el props lw7do
        _id:'',
        _Name:'',
        _Quantity:'',
        _Image:'',
        _Description:'',
    };

    HandlerInput=(obj)=>{
        console.log(obj.target.name)
        this.setState({
            [obj.target.name]: obj.target.value 
        })
    };
   render(){
    if( sessionStorage.getItem('Name')=="marina"&&sessionStorage.getItem('pass')=="123")  // this.state.LogInFlag==1 &&
    {
   
       return(
        <>
        <div className="container">
        <span>ID</span>    
        <input  type={"text"} 
                value={this.state._id} 
                className="form-control"
                name="_id"
                onChange={this.HandlerInput}
        />
        <span>Name</span>   
        <input type={"text"} 
                value={this.state._Name} 
                className="form-control"
                name="_Name"
                onChange={this.HandlerInput}
                />
        <span>Quantity</span>    
        <input type={"text"} 
                onChange={ this.HandlerInput}
                value={this.state._Quantity} 
                className="form-control"
                name="_Quantity"
                />
        <span>Image</span>    
        <input type={"text"} 
                onChange={ this.HandlerInput}
                value={this.state._Image} 
                className="form-control"
                name="_Image"
                />
        <span>Description</span>    
        <input type={"text"} 
                onChange={ this.HandlerInput}
                value={this.state._Description} 
                className="form-control"
                name="_Description"
                />
        <Link 
        className="my-2 btn btn-success"
        to={"/"}
        onClick={()=>{
            this.props.AddRef({id:this.state._id,
                            name:this.state._Name
                            ,quantity:this.state._Quantity,
                            productDesc:this.state._Description,
                            prductimag:this.state._Image,
                    })
                }}
        > Add Item </Link>
        
        </div>
        </>
    )
}else{
    return(<Login/>)
}
}
}
export default AddComp;