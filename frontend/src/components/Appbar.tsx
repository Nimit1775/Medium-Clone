import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";


export const Appbar = () => {
  return <div className="border-b flex justify-between px-10 py-4">
      <Link to={`/blogs`} >
      <div className="font-bold text-lg flex flex-col justify-center">
        Medium
      </div>
      </Link>
      <div>
        <Avatar size={2} name="Nimit" />
      </div>
    </div>

};