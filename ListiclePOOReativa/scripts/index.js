const container = document.getElementById('posts');

for(let i = 0;i<DATA.length; i++){
    let posts = new Post(container, DATA[i]);
}

