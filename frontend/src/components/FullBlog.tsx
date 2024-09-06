import { Blog } from "../hooks"
import { Appbar } from "./Appbar"

export const FullBlog = ({blog} : { blog : Blog }) => {
  return <div>  
    <Appbar/>
    <div className=" flex justify-center ">
          <div  className="grid  px-10 grid-cols-12 w-full pt-200 max-w-screen-xl pt-12">
            <div className="  col-span-8">
                  <div className="text-5xl font-extrabold ">
                    {blog.title}
                    </div>
                    <div className="text-slate-500 pt-4">
                      Posted on 2nd July 2021
                    </div>
                    <div className="pt-4">
                      {blog.content}
                      </div> 
            </div>
            <div className="col-span-4 ">
              Author  
              <div className="text-xl font-bold">
                    {blog.author.name || "Anonymous"} 
                    </div>
                     <div className="pt-2 text-slate-500">
                          blogs are the best way to share your thoughts with the world.
                      </div>
            </div>
            
            
        </div>
    </div>
  </div>

}
