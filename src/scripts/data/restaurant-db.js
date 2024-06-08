/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
import API_ENDPOINTS from '../globals/api';

class RestaurantDbSources {
  static async homePage() {
    const response = await fetch(API_ENDPOINTS.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINTS.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantDbSources;