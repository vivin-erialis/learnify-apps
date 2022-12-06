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
			padding: 50px;
			margin: 0 auto;
			text-align: center;
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
		</div>
		<div class="copyright">Copyright &copy; 2022 Learnify </div>
	</footer>

        `;
    }
}

customElements.define('footer-app', FooterApp);