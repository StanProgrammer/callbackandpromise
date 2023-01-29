const posts=[
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt:new Date().getTime()},
];

const user={
    name:'Atib',
    lastActivityTime:new Date().getTime()
}
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
            const error=false;
            if(!error){
                resolve()
            }
            else{
                reject('Something went wrong')
            }
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
                reject('Error Stack is Empty')
            }
            else{
                resolve()  
            }
            
        },1000)
    })
}



createPosts({title:'Post Three', body:'This is post three'})

// 1st Section 
// createPosts({title:'Post Three', body:'This is post three'})
// .then(getPosts)
// .then(deletePosts)
// .then(getPosts)
// .then(deletePosts)
// .then(getPosts)
// .then(deletePosts)
// .then(getPosts)
// .then(()=>{
//     create4thPosts({title:'Post Four', body:'This is post three'})
//     .then(getPosts).then(deletePosts)
// })
// .catch((err)=>{
//     console.log(err)
// })



const promise1= Promise.resolve('Hello World')
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'GoodBye')
})

// Promise.all([promise1,promise2,promise3]).then((values)=>{
//     console.log(values)
// })
let t = new Date(1970, 0, 1); // Epoch
t.setSeconds(user.lastActivityTime);
console.log(t)
const updateLastUserActivityTime=new Promise((resolve,reject)=>{
    user.lastActivityTime=new Date().getTime()
    resolve(user.lastActivityTime)
})

//2nd section
// Promise.all([create4thPosts({title:'Post Four',body:'This is post four'}),updateLastUserActivityTime]).then((a)=>{
//     console.log(posts)
//     var t = new Date(1970, 0, 1); // Epoch
//     t.setSeconds(a[1]);
//     console.log(t)   
// }).then(getPosts)
// .then(deletePosts)
// .then(getPosts)
// .then(()=>{
//     Promise.all([create4thPosts({title:'Post Five', body:'This is post five'}),updateLastUserActivityTime])
// })

async function myFunc1(){
    
    await Promise.all([create4thPosts({title:'Post Four',body:'This is post four'}),updateLastUserActivityTime])
    console.log(posts)
    await getPosts()
    await deletePosts()
    await getPosts()
    await  Promise.all([create4thPosts({title:'Post Five', body:'This is post five'}),updateLastUserActivityTime])
    await getPosts
    console.log(user.lastActivityTime)
}
myFunc1()
