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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


createPost({ title:'Post Three', body: 'This is the body three'}, getPosts);

//with out the callback the output is happening before the third post is pushed to the array.