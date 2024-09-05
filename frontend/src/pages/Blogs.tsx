import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
  const  {loading , blogs } = useBlogs()  ; 
  if (loading) {
    return <div> 
      Loading...
    </div>
  }
  return <div>
          <Appbar/>
          <div className="flex justify-center">

      <div >
        {blogs.map(blogs =>    <BlogCard
        id = {blogs.id}
          authorName = {blogs.author.name || "Anonymous"}
          title= {blogs.title}
          content = {blogs.content}
          publishedDate ={ "2021-09-01" }
          /> 
        )}
       
          </div>
        </div>
      </div>
  
}
