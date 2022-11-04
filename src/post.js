const Post = ({posts,btnSearch})=>{
    return (
        <>
        {posts.filter((value)=>{
            if(btnSearch === ""){
                return value
            }
            else if(value.title.includes(btnSearch)){
                return value
            }
        }).map((item)=>(
                <div className="card">
                    <p>title : {item.title}</p>
                    <p>body : {item.body}</p>
                </div>
        ))
        }
        </>
    )
}
export default Post;