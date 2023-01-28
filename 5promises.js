var posts=[
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt:new Date().getTime()},
];

let intervalId=0
function getPosts(){
    clearInterval(intervalId);
    setInterval(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} created ${(new Date().getTime()-post.createdAt)/1000} seconds ago</li>`
        });
        document.body.innerHTML=output
    },1000)
}

        
  
// getPosts()
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        
            posts.push({...post,createdAt: new Date().getTime()});
            
            const error=false;
            if(!error){
                resolve()
                

            }
            else{
                reject('Error Something gone wrong')
            }
        });
        
    })
    
    
}


function deletepost(post){
    
    var promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop(post);
            const error=post.length;
            if(error!=0){
                resolve()
            }
            else{
                reject('Error there are no post to delete')
            }
        },2000);

    })
    return promise
    
}
createPost({title:'Post three',body:'This is post three'})
.then(getPosts)
.catch(err=>console.log(err))

// deletepost(posts)
// .then(getPosts)
// .catch(err=>console.log(err))

// deletepost(posts)
// .then(getPosts)
// .catch(err=>console.log(err))

// deletepost(posts)
// .then(getPosts)
// .catch(err=>console.log(err))

const promise1=Promise.resolve('Hello World')
const promise2=10
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Goobye')
})

// Promise.all([promise1,promise2,promise3]).then((
//     (values)=>console.log(values)))


const User = {
    name : 'Atib' , lastUpdatedAt : new Date().getHours() +":"+ new Date().getMinutes() + ":" + new Date().getSeconds()
}


let updateLastUserActivityTime = ()=>{
    return new Promise((resolve , reject)=>{
        
        setTimeout(()=>{
                let someCondition = false;
                if(!someCondition)
                    resolve(`After creation user activity ${new Date().getTime()}`);
                else
                    reject('something went wrong');

        }, 1000)
     }
    )
}

const promise4=createPost({title:'Post Four',body:'This is post four'})
.then(getPosts)
.catch(err=>console.log(err))
const promise5=Promise.resolve(`Before creation of post 4 ${new Date().getTime()}`)
Promise.all([ promise5,promise4,updateLastUserActivityTime()])
.then(([first , second,third]) =>{ 
    console.log(first);
    console.log(posts)
    console.log(third);
    
})
.catch(err=> console.log(err));

deletepost(posts)
.then(getPosts)
.catch(err=>console.log(err))










