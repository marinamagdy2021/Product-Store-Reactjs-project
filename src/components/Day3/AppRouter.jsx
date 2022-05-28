import React from 'react'
import Login from './Routes/Login';
export default class AppRouter extends React.Component {
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
        
        //debugger life cycle ;
        // 1- constructor  ===> to initiate 
        // 2- component will mount  ===> api calling ->server -> setstate -> Apidata
            // data htgele mn el backend m7tag a3mlha set abl 
            // mynf34 a3ml ay req fel constructor //34an lw feh mo4kla fel backend => 4kl el ui hyb2a sf7a beda
            //not recomended to make the data coming from BE 34an el user m4 hyb2a 3arf ekmoshkla gaya mneen    
        // 3- render function
        // 4- component did mount  ===> aktr kifecyle used in feaching data comming from backend
        // after any setstate render function called again 
        // setState ===> hwa ane b8yr el data ele htzhr fel ui 
        // never ever use setstate in componentdidupdate ---> goes to infinite loop -- used to change data in backend
        // component will unmount   ==>> used in logout to save or delete data from cookies 
            // ttnfz abl ma ashel el component mn 3la el browser bta3e 
        // component did catch ====> fire if my component has error ( )
        // all the previous for each component not for the page 


    componentWillMount(){

    }
    handelerCounter=()=>{
        let newC = this.state.counter+1;
        this.setState({
            counter: newC 
        })
    }
    handelerCounterMins =()=>{ // if consine function must to make binding for this 
        let newCo = this.state.counter-1;
        this.setState({
            counter: newCo 
        })
    }

    render(){
        return(
            <>
            <div className="container">

           
                <span>{ this.state.counter} </span>
                <input
                    onClick={this.handelerCounter}
                    value="+"
                    type={"button"}
                    className="btn btn-success"
                />

                <input
                    onClick={this.handelerCounterMins}
                    value="-"
                    type={"button"}
                    name="_name"
                    className="btn btn-danger"
                />

            </div>
            
           
            </>
        )
    }

}