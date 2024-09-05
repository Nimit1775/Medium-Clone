import { useBlog } from "../hooks"

export const  Blog= ()=> {
  
  const  {loading  , blog } = useBlog()  ;  
  if(loading) {
    return <div>Loading...</div>
  }
  return  <div>
    
  </div>

}
