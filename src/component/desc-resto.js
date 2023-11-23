class DescResto extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="input_section shadow">
        <h2 id="name-resto"></h2>
          <figure>
            <img src="" alt="Restaurant">
            <figcaption></figcaption><span id="city"></span>
          </figure>
        <p id="desc"></p>
      </section>
      <br>`;
  }
}

customElements.define('desc-resto', DescResto);