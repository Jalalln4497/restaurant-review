class FormReview extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="input_section shadow">
            <h2>Form Review</h2>
            <form id="inputBook">
                <div class="input">
                    <input id="inputName" type="text" placeholder="Nama" required>
                </div>
                <div class="input">
                    <textarea id="reviewer" cols="60" rows="6" placeholder="Ketik komentar Anda di sini..." required></textarea>
                </div>
                <button id="submitReview" class="shadow btn-animation" type="submit">SUBMIT REVIEW</button>
            </form> 
        </section>`;
    }
}
customElements.define('form-review', FormReview);