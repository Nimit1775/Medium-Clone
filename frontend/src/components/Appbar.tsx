import { Avatar } from "./BlogCard"

export const Appbar = () => {
  return <div className="border-b flex justify-between px-10 py-4 ">
        <div className="font-bold text-lg flex flex-col justify-center">
                Medium 
        </div>
        <div>
            <Avatar size={5} name="Nimit"/>
        </div>
  </div>

}
