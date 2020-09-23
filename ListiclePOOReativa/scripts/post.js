class Post{
    constructor(containerElement, post){
        this.containerElement = containerElement;
        this.clicked = this.clicked.bind(this);
    
        
        this.div = document.createElement('div');
        this.div.className = 'post';
    
        this.h1 = document.createElement('h1');
        this.h1.textContent=post.title;
        this.div.appendChild(this.h1);
    
        this.h2 = document.createElement('h2');
        this.h2.textContent=post.subtitle;
        this.div.appendChild(this.h2);
    
        this.body = document.createElement('h4');
        this.body.textContent=post.body;
        this.div.appendChild(this.body);
    
        this.img = document.createElement('img');
        this.img.src = post.img;
        this.img.alt = post.img + ' imagem';
        this.img.className = 'post-img';
        this.div.appendChild(this.img);

        this.div2 = document.createElement('div');
        this.div2.className = 'feedback';

        this.contador = document.createElement('p');
        this.contador.textContent='0';
        this.contador.id = 'contador';
        this.button = new button(this.div2,this.clicked);
        this.div2.appendChild(this.contador);
        
        this.div.appendChild(this.div2);

        this.containerElement.appendChild(this.div);
        
}

    clicked() {
        if(this.button.like.id === 'click'){
            this.button.like.id = 'like';
            
            this.contador.textContent = '0';
        }else{
            this.button.like.id = 'click';
            this.contador.textContent = '1';
        }
        
    }
}

class button{
    constructor(containerElement, onClickedCallback){
        this.containerElement = containerElement;
        this.onClickedCallback = onClickedCallback;
        this.onClick = this.onClick.bind(this);

        this.like = document.createElement('input');
        this.like.type = 'button';
        this.like.id = 'like';
        this.like.addEventListener('click',this.onClick);
        this.containerElement.append(this.like);

    }

    onClick(event){
        this.onClickedCallback()
    }
}
