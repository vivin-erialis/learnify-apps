class LandingPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML = `
        <style>
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

        .landing-page h1 {
            text-align: left;
        }
        .landing-page p{
            font-size: 16px;
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

        @media screen and (max-width: 700px) {
            main {
                display: grid;
                grid-template-columns: 1fr;
            }

            .landing-page {
                margin-top: 2px;
            }

            .landing-page h1 {
                font-size: 35px;
            }

            .landing-page p {
                font-size: 20px;
            }
        } 

        @media screen and (min-width: 300px) {
            .landing-page h1 {
                font-size: 25px;
            }

            .landing-page p {
                font-size: 14px;
            }

            .landing-page {
                margin: 25px;
            }
        }

        .content-section2 {
            display:grid;
            grid-template-columns: 1fr 1fr;
            align-items:center;
            margin-top:20px;
        }
        
        </style>
         <section class="content-section2">
            <article class="landing-page">
                <h1 class="tagline">Learnify</h1>
                <p>
                    siap jadi teman belajarmu kapanpun dan dimanapun kamu berada.<br>
                    Nikmati serunya belajar banyak hal dengan 
                    learnify.
                </p>
                <button class="btn-start">Mulai sekarang</button>
            </article>
            <article>
                <img class="logo" src="images/logo.png">
            </article>
        </section>
        `
    }
}

customElements.define('landing-page', LandingPage);