/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-shadow */
/* eslint-disable no-empty-function */
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createHomeRestaurantTemplate } from "../templates/template";

/* eslint-disable eol-last */
const Favorite = {
    async render() {
        return `
                <h2 class="restaurants__title">Favorite Restaurant</h2>
                <section class="restaurants__list favorite" id="listRestaurantFavorite"></section>
            `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
        const listRestaurantContainer = document.querySelector('#listRestaurantFavorite');
        restaurants.forEach((restaurant) => {
            listRestaurantContainer.innerHTML += createHomeRestaurantTemplate(restaurant);
        });
    },
};

export default Favorite;