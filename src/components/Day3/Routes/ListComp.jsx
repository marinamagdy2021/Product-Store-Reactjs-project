import { Component } from "react";
import { Link } from "react-router-dom";

 class ListComp extends Component {
     Arr=[];
     List={}
    constructor(){ super();}
    state={
        filter:false
    }

    Filteration=(n)=>{
        if(n.target.value==1){
            this.setState({
                filter:false
            });
        }
        else
        {
            this.setState({
                filter:true
            });
        }
        this.Arr= this.props.Ref.filter((desc)=>{
            return(
                desc.productDesc==n.target.value 
                )
      })
      console.log(this.List)
    }
  render(){ 
  if(this.state.filter==false&& sessionStorage.getItem("Name")=="marina"&& sessionStorage.getItem("pass")==123)
  {
       this.List = this.props.Ref.map((item,index)=>{
            return(
            <>
            <tr key={index}> 
            <td>{item.id} </td>
            <td>{item.name} </td>
            <td>{item.quantity} </td>
            <td>
                <img src={item.prductimag} style={{
                    width:200,height:200}}/>  
             </td>
            <td>{item.productDesc} </td>
            <td> 
                    <input
                    className="btn btn-danger" 
                    type={"button"}
                    value="Delete"
                    onClick={()=>{this.props.RemoveHandlerRef(index)}} 
                    />  
                    <Link
                    className="btn btn-success mx-3" 
                    to={{pathname:`/details/${index}}`,Det:item}}
                    onClick={()=>{this.props.DetialHandlerRef(index)}} 
                    > Details</Link>
            </td>
        </tr>
        </>
        )
    })
  }
  else{
      console.log(this.List)
      this.List=this.Arr.map((item,index)=>{
        return(
        <>
        <tr key={index}> 
            <td>{item.id} </td>
            <td>{item.name} </td>
            <td>{item.quantity} </td>
            <td>
                <img src={item.prductimag} style={{
                    width:200,height:200}}/>  
            </td>
            <td>{item.productDesc} </td>
            <td> 
                <input
                className="btn btn-danger" 
                type={"button"}
                value="Delete"
                onClick={()=>{this.props.RemoveHandlerRef(index)}} 
                />  
                <Link
                className="btn btn-success mx-3" 
                to={{pathname:`/details/${index}}`,Det:item}}
                onClick={()=>{this.props.DetialHandlerRef(index)}} 
                > Details</Link>
            </td>
        </tr>
    </>
    )}
    )
  }
    return(
        <>
        <div className="lcontainer">
     
        <div className="row">
        <div className="mx-4 col-3 fs-4 my-5 text-danger"> Filter using this catigoury</div>
           <div className="col-6">
            <select name="Sel" className="fs-4 form-select my-5" aria-label="Default select example" onChange={this.Filteration}>
                <option value={1} selected>Open this select menu</option>
                <option name="aa">Hair care</option>
                <option >Skin care</option>
                <option  >Perfume</option>
             </select>
           </div>
        </div>

        <table className="fs-4 table text-center table-striped sm bordered table-hover inverse table-inverse table-responsive">
            <thead className="thead-inverse thead-default">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
        
              <th scope="col">image</th>
              <th scope="col">Description</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            {this.List}
          </tbody>
        </table>
    </div>
    </>
    )
}
}

export default ListComp ;
