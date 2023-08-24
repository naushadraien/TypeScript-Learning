import PostProps from "../types/types";


const PostCard = ({id, title, body}: PostProps) => {

    // let desc = body.split(' ').slice(0, 40).join(' ') + '...'; //this is for slicing the body by words
    const desc = body.slice(0, 60) + '...'; //this is for slicing the body by characters


    // if(body.length > 10) { //this is for slicing the body by characacters length
    //   desc = body.slice(0, 60) + '...';
    // }

  return (
    <div className="flex justify-center items-center flex-wrap flex-col leading-5 mb-3">
        <h3 className="text-xl font-medium">{id}</h3>
        <p className="text-slate-600 font-bold mb-1">{title}</p>
        <p className="text-blue-700">{desc}</p>
    </div>
  )
}

export default PostCard