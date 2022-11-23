class LandingPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML = `
        <style>
        main {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            width: 100%;
            height: 80vh;
            color: white;
            background-color: #6998AB;
        }
        .logo {
            width: 100%;
        }
        .landing-page {
            margin: 80px;
        }
        
        .tagline {
            margin-bottom: 10px;
            font-size: 50px;
        }
        .landing-page p{
            font-size: 13px;
        }
        .btn-start {
            margin-top: 20px;
            color: #406882;
            font-size: 14px;
            border: none;
            width: auto;
            border-radius: 10px;
            padding: 10px 13px;
        }
        
        </style>
        <main>
        <article class="landing-page">
        <h1 class="tagline">Learnify</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, autem odit? 
        Magni praesentium, veritatis voluptatibus expedita eligendi vel voluptatem 
        beatae temporibus ea! Temporibus, obcaecati iure debitis placeat libero ipsam nesciunt.</p>
        <button class="btn-start">Mulai sekarang</button>
      </article>
      <article>
      <img class="logo" src="images/logo.png">
      </article>
      </main>
        `
    }
}

customElements.define('landing-page', LandingPage);