import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
  return <div>
          <Appbar/>
          <div className="flex justify-center">

      <div className=" mx-w-xl  ">
          <BlogCard
          authorName = {"Nimit Sodhani"}
          title= {" How an ugly single page website makes $600 every month withaout affiliate marketing"}
          content = {"How an ugly single page website makes $600 every month withaout affiliate marketing blog blog blog blog "}
          publishedDate ={ "2021-09-01" }
          /> 
          <BlogCard
          authorName = {"Nimit Sodhani"}
          title= {" How an ugly single page website makes $600 every month withaout affiliate marketing"}
          content = {"How an ugly single page website makes $600 every month withaout affiliate marketing blog blog blog blog "}
          publishedDate ={ "2021-09-01" }
          /> 
          <BlogCard
          authorName = {"Nimit Sodhani"}
          title= {" How an ugly single page website makes $600 every month withaout affiliate marketing"}
          content = {"How an ugly single page website makes $600 every month withaout affiliate marketing blog blog blog blog "}
          publishedDate ={ "2021-09-01" }
          /> 
          <BlogCard
          authorName = {"Nimit Sodhani"}
          title= {" How an ugly single page website makes $600 every month withaout affiliate marketing"}
          content = {"How an ugly single page website makes $600 every month withaout affiliate marketing blog blog blog blog "}
          publishedDate ={ "2021-09-01" }
          /> 
          </div>
        </div>
      </div>
  
}
