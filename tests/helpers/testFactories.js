/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant-idb";
import LikeInitiator from "../../src/scripts/utils/like-initiator";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};
export { createLikeButtonPresenterWithRestaurant };