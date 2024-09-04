import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
  return (
    <div>
      <BlogCard
      authorName = {"nimit"}
      title= {"My first blog"}
      content = {"This is my first blog. I am writing this blog to test the blog card component. I hope it works fine."}
      publishedDate ={ "2021-09-01" }
      /> 
    </div>
  )
}
