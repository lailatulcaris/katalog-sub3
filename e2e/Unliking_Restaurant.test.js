/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
const assert = require('assert');

Feature('UnLiking Restaurant');

Scenario('showing empty liked restaurant', ({ I }) => {
    I.amOnPage('#/home');
    I.click(locate('.restaurant-info a').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('#/favorite');
    I.seeElement('#listRestaurantFavorite');
    I.click(locate('.restaurant-info a').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('#/favorite');
    I.dontSeeElement('.restaurant-info');
});