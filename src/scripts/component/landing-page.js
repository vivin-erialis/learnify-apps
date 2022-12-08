class LandingPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML = `
        <style>
        .content-section2 {
            display:grid;
            grid-template-columns: 1fr 1fr;
            
        }
        .logo {
            width: 100%;
        }
        .landing-page {
            margin: auto 80px;
        }
        
        .tagline {
            margin-bottom: 10px;
            font-size: 35px;
        }

        .landing-page h1 {
            text-align: left;
        }
        .landing-page p{
            font-size: 14px;
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

        @media screen and (max-width: 600px) {
            .landing-page h1{
                font-size: 20px;
            }

            .landing-page p {
                font-size: 11px;
            }

            .landing-page {
                margin: 30px 20px;
            }

            .tagline {
                font-size: 18px;
            }

            .landing-page button{
                font-size: 10px;
            }

        } 

        @media screen and (max-width: 400px) {
            .landing-page h1{
                font-size: 18px;
            }

            .landing-page p {
                font-size: 10px;
            }

            .landing-page {
                margin: 40px 20px;
            }

            .tagline {
                font-size: 15px;
            }

            .content-section2 {
                display:grid;
                grid-template-columns: 1fr ;
                
            }

            .landing-page button{
                font-size: 10px;
            }

        }
        
        @media screen and (max-width: 700px) {
            .landing-page h1{
                font-size: 20px;
            }

            .landing-page p {
                font-size: 11px;
            }

            .landing-page {
                margin: 30px 20px;
            }

            .tagline {
                font-size: 18px;
            }

            .landing-page button{
                font-size: 10px;
            }
            
        }
        
        @media screen and (max-width: 300px) {
            .landing-page h1{
                font-size: 20px;
            }

            .landing-page p {
                font-size: 13px;
            }

            .landing-page {
                margin: 30px 20px;
            }

            .tagline {
                font-size: 15px;
            }

            .landing-page button{
                font-size: 10px;
            }
            .content-section2 {
                display:grid;
                grid-template-columns: 1fr ;
                
            }
        }
    
        </style>
         <section class="content-section2">
            <article>
                <img class="logo" src="images/logo.png">
            </article>
            <article class="landing-page">
                <h1 class="tagline">Learnify</h1>
                <p>
                    siap jadi teman belajarmu kapanpun dan dimanapun kamu berada.<br>
                    Nikmati serunya belajar banyak hal dengan 
                    learnify.
                </p>
                <button class="btn-start">Mulai sekarang</button>
            </article>
            
        </section>
        `;
    }
}

customElements.define('landing-page', LandingPage);