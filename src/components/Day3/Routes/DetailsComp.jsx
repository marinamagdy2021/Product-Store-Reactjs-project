const DetailsComp = (props) => {
    console.log(props.RefItem)
    return ( <>
         <div className="containern fs-3">
        <div className="row">
            <div className="col-4 text-danger">
                Name :
            </div>
            <div className="col-8">
                {props.RefItem.name}
            </div>
        </div>
        <div className="row">
            <div className="col-4 text-danger">
                Id :
            </div>
            <div className="col-8">
                {props.RefItem.id}
            </div>
        </div>
        <div className="row">
            <div className="col-4 text-danger">
                Quantity :
            </div>
            <div className="col-8">
                {props.RefItem.quantity}
            </div>
        </div>
        <div className="row">
            <div className="col-4 text-danger">
                Image :
            </div>
            <div className="col-8">
                {/* //{props.RefItem.prductimag}  */}
            <img src="../../../../public/11.jpg" style={{
                    width:200,height:200}}/>  
                    
            <img src={props.RefItem.prductimag}></img>
            </div>
        </div>
        <div className="row">
            <div className="col-4 text-danger">
                Description :
            </div>
            <div className="col-8">
                {props.RefItem.productDesc}
            </div>
        </div>
    </div>     
    
    
    </> );
}
 
export default DetailsComp;