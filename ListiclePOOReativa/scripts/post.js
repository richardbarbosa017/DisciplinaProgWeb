class Post{
    constructor(containerElement, post){
        this.containerElement = containerElement;
        this.title = post.title;
        this.subtitle = post.subtitle;
        this.body = post.body;
        this.img = post.img;
        this.createPost = this.createPost.bind(this);
        this.clicked = this.clicked.bind(this);
    }
    createPost(){
        
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

            let div2 = document.createElement('div');
            div2.className = 'feedback';

            let like = document.createElement('input');
            like.type = 'button';
            like.id = 'like';
            div2.appendChild(like);

            let contador = document.createElement('p');
            contador.textContent='0';
            contador.id = 'contador';
            div2.appendChild(contador);

            div.appendChild(div2);

            this.containerElement.appendChild(div);
            
            like.addEventListener('click',this.clicked);
            console.log(like.parentNode);
        
    }
    clicked(event) {
        const button = event.target;
        
        const cont = document.getElementById('contador');
        if(button.id === 'click'){
            button.id = 'like';
            cont.textContent = '0';
        }else{
            button.id = 'click';
            cont.textContent = '1';
        }
        
    }
}
