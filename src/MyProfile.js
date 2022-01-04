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
    const displayProfile= ()=>{
        if(localStorage.key("userData")){
            return(
            <div>
            <h3>{JSON.parse(localStorage.getItem("userData"))[0]}</h3>
            </div>
        )
        }
        else{
            return(
                <h3>You currently do not have any profile</h3>
            )
        }
    }
    return(
        <div>
            <div id="Profile">
                {displayProfile()}
            </div>
            <h3>Create your profile</h3>
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
            </form>
        </div>
        
    )
}
export default MyProfile ;
