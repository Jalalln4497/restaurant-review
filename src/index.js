import './style/style.css';
import './component/desc-resto.js';
import './component/form-review.js'
import './component/container-card.js';
import $ from "jquery";
import { cardReview } from "./script/newItemReview.js";
import { RenderDesc } from "./script/renderDescResto.js";
import { renderRecentReview } from "./script/renderRecentReview.js";

const newReview = {
    id: 'fnfn8mytkpmkfw1e867',
    name: '',
    review: ''
}

document.addEventListener('DOMContentLoaded', () => {
    const formSubmit = document.querySelector('form-review');

    formSubmit.addEventListener('submit', (event) => {
        event.preventDefault();

        newReview.name = $('#inputName').val(),
            newReview.review = $('#reviewer').val();

        addReview(newReview);
    });

    getDetailRestaurant();
});

const getDetailRestaurant = async () => {
    try {
        const response = await fetch('https://restaurant-api.dicoding.dev/detail/fnfn8mytkpmkfw1e867');
        const dataRestaurant = await response.json();

        renderRecentReview(dataRestaurant.restaurant.customerReviews);

        const renderForm = new RenderDesc(dataRestaurant);
        renderForm.render();

    } catch (error) {
        console.log(error.messege);
    }
}

const addReview = async (item) => {
    try {
        const response = await fetch(`https://restaurant-api.dicoding.dev/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'force-cache',
            body: JSON.stringify(item)
        });
        const responseJson = await response.json();

        cardReview(responseJson.customerReviews);

    } catch (error) {
        console.log(`Eror => ${error.messege}`);
    }
};