const posts=[
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt:new Date().getTime()},
];

let intervalId=0
function getPosts(){
    return new Promise((resolve,reject)=>{
        clearInterval(intervalId);
    setInterval(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} created  ${(new Date().getTime()-post.createdAt)/1000} seconds Ago</li>`
        });
        document.body.innerHTML=output;
        resolve()
    },1000)
    })
    
}
function createPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()})
            resolve()
        },2000)
    })
    
}

function create4thPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()})
            resolve()
        },3000)
    })
    
}
function deletePosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let len=posts.length
            posts.pop()
            if(len==0){
                return reject('Error Stack is Empty')
            }
            resolve()
        },1000)
    })
}
createPosts({title:'Post Three', body:'This is post three'})
.then(create4thPosts({title:'Post four', body:'This is post four'}))
.then(getPosts)
.then(deletePosts)
.then(getPosts)
.then(deletePosts)
.then(getPosts)
.then(deletePosts)
.then(getPosts)
.then(deletePosts)
.then(getPosts)
.then(deletePosts)
.catch((err)=>{
    console.log(err)
})



// deletePosts()
// .then(getPosts)
// .catch((err)=>{
//     console.log(err)
// })

// deletePosts()
// .then(getPosts)
// .catch((err)=>{
//     console.log(err)
// })

// deletePosts()
// .then(getPosts)
// .catch((err)=>{
//     console.log(err)
// })