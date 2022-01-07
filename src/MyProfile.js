import React from 'react' ;
import "./MyProfile.css" ;
import Data from './data/countries.json' ;


const MyProfile = ()=>{
    const InputField = (props)=>{
        return(
            <div id="inf">
                <label>{props.label}</label> <input type='text' className='info' key={props.label} required={props.require}/> 
            </div>
        )
    }
    const validation = ()=>{
        let inputList= document.getElementsByClassName("info") ;
        // let datasets=[inputList[0].value ?inputList[0].value:'' ,inputList[1].value?inputList[1].value:'',inputList[2].value?inputList[2].value:'',inputList[3].value?inputList[3].value:'',inputList[4].value?inputList[4].value:'']
        if(inputList[0].value && inputList[1].value && inputList[2].value&& inputList[4].value)
        {
            localStorage.removeItem("userData")
            let datasets=[inputList[0].value,inputList[1].value,inputList[2].value,inputList[3].value?inputList[3].value:'',inputList[4].value] ;
            localStorage.setItem("userData",JSON.stringify(datasets)) ;
            console.log(JSON.parse(localStorage.getItem("userData"))) ;
            console.log("EXecuted")
        }
        else{
            alert("Please fill out all the required details")
        }
        console.log("test------------------------------------------>>>>>>>>>>>>>>>>>>") ;
        if(localStorage.key("userData")){console.log(JSON.parse(localStorage.getItem("userData"))) ;}
        
        window.location.reload() ;
        
    }
    const del=()=>{
        localStorage.removeItem("userData") ;
        window.location.reload() ;
    } 
    
    return(
        <div>
            {/* <div id="Profile">
                {displayProfile()}
            </div> */}
            <div class="card" id="Profile">
                <img src="https://www.nautec.com/wp-content/uploads/2018/04/placeholder-person.png" alt=""/>
                <h1 style={{"color":"rgb(58, 61, 66)"}}>{localStorage.key("userData")? JSON.parse(localStorage.getItem("userData"))[0]+" "+JSON.parse(localStorage.getItem("userData"))[1] : "No profile Created"}</h1>
                <div class="cont">
                    <p style={{"color":"black"}}>
                        {localStorage.key("userData")? "Address Line 1: "+JSON.parse(localStorage.getItem("userData"))[2]: " "} <br/>
                        {localStorage.key("userData") && JSON.parse(localStorage.getItem("userData"))[3]? "Address Line 2: "+JSON.parse(localStorage.getItem("userData"))[3]: " "} <br/>
                        {localStorage.key("userData")? "Country: "+JSON.parse(localStorage.getItem("userData"))[4]: " "} <br/>
                    </p>
                </div>
            </div>
            <div id="create-profile">
            <h3 id="logo">{localStorage.key("userData")? "Edit ": "Create "}your profile</h3>
                <form id = "form">
                    <InputField label='First Name:' require={true}/>
                    <InputField label='Last Name:' require={true}/>
                    <InputField label='Address Line 1:' require={true}/>
                    <InputField label='Address Line 2:' require={false}/>
                    <div id="inf">
                        <label>Country:</label> 
                        <input type='text' className='info' list='countries'/>
                        <datalist id='countries'>
                            {Data.map(data =>{
                                return(
                                    <option key={data.code} value={data.name}/>
                                )
                            })}  
                        </datalist>
                        
                    </div>
                    <input type="submit" value="Create" onClick={validation}/>
                    <input type="button" id="del" value="Delete Current Profile" onClick={del}/>
                </form>
            </div>
        </div>
        
    )
}
export default MyProfile ;
