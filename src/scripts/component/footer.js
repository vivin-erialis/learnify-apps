class FooterApp extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <style>
            footer{
			display: grid;
			grid-template-rows: 1fr 0.15fr;
			min-height: 200px;
			background: #406882;
		}

		footer h1{
			padding: 50px 50px 20px 50px;
			margin: 0 auto;
			text-align: center;
		}

		footer p{
			text-align:center;
		}

		.footer-item{
			text-align:center;
		}
		
		a{
			text-decoration:none;
		}

		.footer-item img{
			margin:5px;
			width:1.8%;

		}

		footer .copyright{
			padding-top: 5px;
			text-align: center;
			background: whitesmoke;
		}
        </style>
        <footer>
		<div class="footer-item">
			<h1>Learnify</h1>
			<p>PT Dicoding Academy Indonesia</p>
			<a href="https://www.dicoding.com/" ><img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"></a>
			<a href="https://www.instagram.com/dicoding/" ><img src="./svg/instagram.svg"></a>
			<a href="https://web.facebook.com/dicoding/"><img src="./svg/facebook.svg"></a> 
			<a href="https://www.youtube.com/@DicodingIndonesia"><img src="./svg/youtube.svg"></a>
		</div>
		<div class="copyright">Copyright &copy; 2022 Learnify </div>
	</footer>

        `;
    }
}

customElements.define('footer-app', FooterApp);