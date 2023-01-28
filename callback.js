const posts=[
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt:new Date().getTime()},
];

let intervalId=0
function getPosts(){
    clearInterval(intervalId);
    setInterval(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} created  ${(new Date().getTime()-post.createdAt)/1000} seconds Ago</li>`
        });
        document.body.innerHTML=output;
    },1000)
}
function createPosts(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()})
        callback()
    },2000)
}

function create4thPosts(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()})
        callback()
    },3000)
}
// getPosts()

// createPosts({title:'Post Three', body:'This is post three'},function(){
//     getPosts()
// })

create4thPosts({title:'Post four', body:'This is post four'},function(){
    createPosts({title:'Post Three', body:'This is post three'},function(){
        getPosts()
    })
})