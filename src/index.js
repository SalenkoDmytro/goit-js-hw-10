import './css/styles.css';
import Notiflix from 'notiflix';
import { refs } from './js/refs';
import { fetchCountries } from './js/fetchCountries.js';
import { renderCountries, deleteRender } from './js/renders';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInputType, DEBOUNCE_DELAY));

function onInputType(e) {
  deleteRender();

  const country = e.target.value.trim();
  if (!country) return;

  fetchCountries(country).then(renderCountries).catch(errorCatch);
}

function errorCatch() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
