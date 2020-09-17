class Post{
    constructor(containerElement, post){
        this.containerElement = containerElement;
        this.title = post.title;
        this.subtitle = post.subtitle;
        this.body = post.body;
        this.img = post.img;
        this.createPost = this.createPost.bind(this);
    }
    createPost(){
        for(datas in this.post){
            let div = document.createElement('div');
            div.className = 'post';
        
            let h1 = document.createElement('h1');
            h1.textContent=this.title;
            div.appendChild(h1);
        
            let h2 = document.createElement('h2');
            h2.textContent=this.subtitle;
            div.appendChild(h2);
        
            let body = document.createElement('h4');
            body.textContent=this.body;
            div.appendChild(body);
        
            let img = document.createElement('img');
            img.src = this.img;
            img.alt = this.img + ' imagem';
            img.className = 'post-img';
            div.appendChild(img);

            this.containerElement.appendChild(div);
        }
    }
}
