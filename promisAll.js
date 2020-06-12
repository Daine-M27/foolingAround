const posts = [
    {title:'Post One', body:'This is the body one'},
    {title:'Post Two', body:'This is the body two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += post.title;
        });
        console.log(output);
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false; //usually do error checking here 
            
            if(!error){ // if no errors call resolve() which will continue process, reject will return error message
                resolve();
            } else {
                reject("something is wrong")
            }            
        }, 2000);
    })
    
}


// createPost({ title:'Post Three', body: 'This is the body three'}).then(getPosts).catch(err => console.log(err));

const promise1 = Promise.resolve("hellow world");
const promise2 = 27;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve
    }, 2000)
);

Promise.all(promise1, promise2, promise3).then(values => console.log(values)).catch(err => console.log(err));
