let Table =(props)=>{
    let ListOfItem = props.Data.map((item)=>{
        return (
            <tr key={item.id}> 
            {/* // 34an el ittreation {mo4klt el warining} by7l mo4klt el ittreation coparsion *lazm unique value tmizoo*/}
            <td>{item.id} </td>
            <td>{item.name} </td>
            <td>{item.quantity} </td>

            <td><img src={item.prductimag} style={{
             width:100,height:100
            }}/> </td>
            <td>{item.productDesc} </td>
            <td> <button class="btn btn-primary"  onClick={Detail(item.id)}> Details </button> </td>
            </tr>
        )
    })

     function Detail(params) {
        
    } 
    return (
        <table class="table">
          <thead>
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
            {ListOfItem}
          </tbody>
        </table>
      );
}

export default Table ;



  