import { SignupInput } from "@nimitsodhani/medium";
import { useState } from "react";
import { SigninInput } from "@nimitsodhani/medium";
import { Link } from "react-router-dom"

export const Auth = ({type} : {type: "signup" | "signin" }) => {
    const [postInputs , setPostInputs] = useState<SignupInput> ({
        name : "" , 
        username: "",
        password: "",
    }) ; 
 const [signinInputs , setSigninInputs] = useState<SigninInput> ({
        username: "",
        password: "",
    }) ;

    function sendRequest () 
    {
        
    }
  return  <div className=" h-screen  flex justify-center flex-col">
        <div className=" flex justify-center">
            <div>

            
            <div className="px-10">
                 <div className="text-3xl font-extrabold">
                     Create an Account
                 </div>    
            <div className="text-slate-400 justify-center ml-3 mt-1 ">            
            {type == "signin" ? "Don't have an account ?" : "Already have an account?" }  
            
            <Link className="text-blue-500 underline pl-2 justify-center" to={ type == "signin" ? "/signup" : "/signin"}>
            {type=="signin" ? "Sign up " : "Sign in "} </Link>
            </div>
        </div>
        <div>

{type=="signup" ? 
    <LabelInput
        label="Name"
        placeholder="nimit..."
        onChange={(e) => {
            setPostInputs({
                ...postInputs, 
                name  : e.target.value
                
            })
        }}
      /> : null }  
    <LabelInput
        label="Email"
        placeholder="nimit2@example.com."
        onChange={(e) => {
            setPostInputs({
                ...postInputs, 
                username  : e.target.value

            })
        }}
      />
    <LabelInput
        label= "Password"
        type = {"password"}
        placeholder="password1234"
        onChange={(e) => {
            setPostInputs({
                ...postInputs, 
                password  : e.target.value

            })
        }}
      />
      <button type="button" className=" pt4 pb-4  mt-2 w-full  text-white bg-gray-800 hover
      :bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300
       font-semibold rounded-lg text-base  px-5 py-2.5 me-2 mb-2 dark:bg-gray-800
        dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            {type === "signup" ? "Sign Up" : "Sign In"}
      </button>

            </div>
         </div>
    </div>
</div>
  
}
interface LabelInputType  {
    label : string; 
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type ? : string ; 
   
}
function LabelInput({ label, placeholder, type, onChange }: LabelInputType) {
    return (
        <div className="mb-4"> {/* Add margin-bottom to space out the inputs */}
            <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-black">
                {label}
            </label>
            <input
                onChange={onChange}
                type={type || "text"}
                id="input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
