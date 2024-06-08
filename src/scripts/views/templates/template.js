/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable eol-last */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  // Check if restaurant and its properties exist before using them
  if (!restaurant) {
    return '<p>Restaurant data not available.</p>';
  }

  const { menus, categories, customerReviews } = restaurant;

  return `
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__details">
      <h3>Information</h3>
      <h4>Rating</h4>
      <p class="restaurant__rating">${restaurant.rating}</p>
      <h4>Location</h4>
      <p class="restaurant__location">${restaurant.city}, ${restaurant.address}</p>
      <h4>Description</h4>
      <p class="restaurant__description">${restaurant.description}</p>
      <h4>Categories</h4>
      <ul>
        ${categories ? categories.map(category => `<li>${category.name}</li>`).join('') : '<li>No categories available</li>'}
      </ul>
    </div>
    <div class="restaurant__menu">
      <h3>Menu</h3>
      <div class="menu-container">
        <div class="menu-section">
          <h4>Foods</h4>
          <p class="restaurant__foods">${menus && menus.foods ? menus.foods.map(food => `<span>${food.name}</span>`).join(', ') : 'No foods available'}</p>
        </div>
        <div class="menu-section">
          <h4>Drinks</h4>
          <p class="restaurant__drinks">${menus && menus.drinks ? menus.drinks.map(drink => `<span>${drink.name}</span>`).join(', ') : 'No drinks available'}</p>
        </div>
      </div>
    </div>
    <div class="restaurant__reviews">
      <h4>Customer Reviews</h4>
      ${customerReviews ? customerReviews.map(review => `
        <div class="review-card">
          <p><strong>Name:</strong> ${review.name}</p>
          <p><strong>Review:</strong> ${review.review}</p>
          <p><strong>Date:</strong> ${review.date}</p>
        </div>
      `).join('') : '<p>No reviews available</p>'}
    </div>
  `;
};

const createHomeRestaurantTemplate = (restaurants) => `
  <section class="restaurants">
    <div class="container">
      <div class="restaurants__list">
        <div class="restaurant-card">
          <img class="restaurant-img lazyload" alt="${restaurants.name}" data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
          <div class="restaurant-info">
            <h2>
              <a href="/#/detail/${restaurants.id}">${restaurants.name}</a>
            </h2>
            <p>⭐️${restaurants.rating}</p>
          </div>
          <div class="card-body">
            <p>${restaurants.description}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const createLikeTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
<i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
  `;

const createLikedTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
<i class="fa fa-heart" aria-hidden="true"></i>
</button>
  `;

export {
  createHomeRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeTemplate,
  createLikedTemplate,
};
