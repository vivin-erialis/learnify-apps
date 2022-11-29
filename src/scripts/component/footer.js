class FooterApp extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <style>
            footer {
                background-color: #406882;
                padding: 8px; 
            }
            footer p {
                text-align: center;
                color: white;
                margin-top: 12px;
            }
        </style>
        <footer>
            <p>Dicoding, Learnify</p>
        <footer>

        `;
    }
}

customElements.define('footer-app', FooterApp);