/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import 'core-js/stable/structured-clone';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
describe('Favorite Restaurant Source Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});