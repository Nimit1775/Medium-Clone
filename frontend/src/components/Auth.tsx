import { SignupInput } from "@nimitsodhani/medium";
import { useState } from "react";
import { Link } from "react-router-dom"

export const Auth = ({type} : {type: "signup" | "signin" }) => {
    const [postInputs , setPostInputs] = useState<SignupInput> ({
        name : "" , 
        username: "",
        password: "",
    })
  return  <div className=" h-screen  flex justify-center flex-col">
        <div className=" flex justify-center">
            <div>
                 <div className="text-3xl font-extrabold">
                     Create an Account
                 </div>    
            <div className="text-slate-400 justify-center ml-3 mt-1 ">            
            Already have an account?   
            
            <Link className="text-blue-500 underline pl-2 justify-center" to={"/signin"}> Log-in </Link>
            </div>
        </div>
          
    </div>
    <LabelInput
        label="Name"
        placeholder="nimit..."
        onChange={(e) => {
            setPostInputs( c =>{
                return {...c, name: e.target.value}
            })
        }}
      />
</div>
  
}
interface LabelInputType  {
    label : string; 
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   
}
function LabelInput ( {label , placeholder,  onChange}: LabelInputType )
{
    return <div>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <input onChange={onChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300
     text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
      block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder= {placeholder} required />
</div>
}