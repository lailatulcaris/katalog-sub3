/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Scenario('showing empty liked restaurant', ({ I }) => {
    I.amOnPage('/#/home');
    I.click(locate('.restaurant-info a').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.seeElement('#listRestaurantFavorite');
});
