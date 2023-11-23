class CardReview extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="reviewer shadow">
        <h2>Reviewer</h2>
        <div id="incompleteBookshelfList" class="review_list">
        </div>
        </section>`;
    }
}
customElements.define('container-card', CardReview);