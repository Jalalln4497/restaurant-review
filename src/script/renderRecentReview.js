import $ from "jquery";

export const renderRecentReview = (items) => {
    if (items) {
        for (const item of items) {
            $('.review_list').append(`
                <article class="review_item">
                    <h3>${item.name}</h3>
                    <p>${item.review}</p>
                    <p id="tgl-review">${item.date}</p>
                </article>`);
        }
    }
}