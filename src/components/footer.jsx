import React from 'react'

let Footer=(props)=>{
  if(props.LoginRef==true)
  {
    return(
      <React.Fragment>  
            <div className=" p-4 pb-0 bg-dark text-center">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-facebook-f"></i
          ></a>
    
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-twitter"></i
          ></a>
    
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-google"></i
          ></a>
    
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-instagram"></i
          ></a>
    
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-linkedin-in"></i
          ></a>
    
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-github"></i
          ></a>
        </section>
      </div>
    
    
      </React.Fragment>
    );
  }
};
export default Footer ;