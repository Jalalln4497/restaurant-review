import $ from "jquery";

export const cardReview = (items) => {
    const newItem = items.pop();
    try {
        $('.review_list').append(`
                    <article class="review_item">
                        <h3>${newItem.name}</h3>
                        <p>${newItem.review}</p>
                        <p id="tgl-review">${newItem.date}</p>
                    </article>`);

    } catch (error) {
        console.log(error);
    }
}