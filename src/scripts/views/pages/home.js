/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import RestaurantDbSources from '../../data/restaurant-db';
import { createHomeRestaurantTemplate } from '../templates/template';

const Home = {
  async render() {
    return `
            <h2 class="restaurants__title" >Discover Exciting Eateries</h2>
            <section class="restaurants__list" id="listRestaurant"></section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSources.homePage();
    const listRestaurantContainer = document.querySelector('#listRestaurant');
    restaurants.forEach((restaurant) => {
      listRestaurantContainer.innerHTML += createHomeRestaurantTemplate(restaurant);
    });
  },
};

export default Home;