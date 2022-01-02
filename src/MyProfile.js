import React from 'react' ;
import "./MyProfile.css" ;
import Data from './data/countries.json' ;

const InputField = (props)=>{
    return(
        <div id="inf">
            <label>{props.label}</label> <input type='text'/>
        </div>
    )
}
const MyProfile = ()=>{
    return(
        <div>
            <h3>Create your profile</h3>
            <div id = "form">
            <InputField label='First Name:'/>
            <InputField label='Last Name:'/>
            <InputField label='Address Line 1:'/>
            <InputField label='Address Line 2:'/>
            <div id="inf">
                <label>Country:</label> 
                <input type='text' list='countries'/>
                <datalist id='countries'>
                    {Data.map(data =>{
                        return(
                            <option id={data.code} value={data.name}/>
                        )
                    })}  
                </datalist>
            </div>
            <input type="submit" value="Create"/>
            </div>
        </div>
        
    )
}
export default MyProfile ;
