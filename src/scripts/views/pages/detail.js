/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSources from '../../data/restaurant-db';
import { createRestaurantDetailTemplate } from '../templates/template';
import LikeInitiator from '../../utils/like-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
              <h2 class="restaurants__title">Detail Restaurant</h2>
              <section class="restaurants__list" id="listRestaurantDetail"></section>
              <div id="likeButtonContainer"></div>
            `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSources.detailRestaurant(url.id);
    const restaurantDetailContainer = document.querySelector('#listRestaurantDetail');
    restaurantDetailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;