import {createSiteMenuMarkup} from "./view/site-menu";
import {createSiteFilterMarkup} from "./view/site-filter";
import {createSiteBoardMarkup} from "./view/site-board";
import {createSiteSortMarkup} from "./view/site-sort";
import {createSiteBoardTaskMarkup} from "./view/site-board-task";
import {createSiteCardEditMarkup} from "./view/site-card-edit";
import {createSiteLoadMoreMarkup} from "./view/site-load-more";
import {createSiteCardMarkup} from "./view/site-card";

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.main__control`);
const COUNT_CARDS = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

function init() {
  render(siteHeaderElement, createSiteMenuMarkup());
  render(siteMainElement, createSiteFilterMarkup());
  render(siteMainElement, createSiteBoardMarkup());
  const siteBoardElement = document.querySelector(`.board`);
  render(siteBoardElement, createSiteSortMarkup());
  render(siteBoardElement, createSiteBoardTaskMarkup());
  const siteBoardTaskElement = document.querySelector(`.board__tasks`);
  render(siteBoardTaskElement, createSiteCardEditMarkup());
  for (let i = 0; i < COUNT_CARDS; i++) {
    render(siteBoardTaskElement, createSiteCardMarkup());
  }
  render(siteBoardElement, createSiteLoadMoreMarkup());
}

init();
