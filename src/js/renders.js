import { refs } from './refs';
import Notiflix from 'notiflix';

function renderCountries(countries) {
  if (countries.length >= 2 && countries.length < 10) {
    renderFewCountries(countries);
    return;
  }

  if (countries.length === 1) {
    renderOneCountry(countries);
    return;
  }

  return Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function renderFewCountries(countries) {
  const markup = countries
    .map(country => {
      return `<li><img src="${country.flags.svg}" width="20px" height="20px"></img><p>${country.name.common}</p></li>`;
    })
    .join('');
  refs.list.insertAdjacentHTML('beforeend', markup);
}

function renderOneCountry(countries) {
  const markup = countries
    .map(country => {
      const { flags, capital, population, languages, name } = country;

      return `<div class="country"><img src="${
        flags.svg
      }" width="40px" height="40px"></img>
      <h1>${name.common}</h1></div>
    <p><span>Capital: </span>${capital}</p>
    <p><span>Population: </span>${population}</p>
    <p><span>Languages: </span>${Object.values(languages).join(', ')}</p>`;
    })
    .join('');

  refs.div.insertAdjacentHTML('beforeend', markup);
}

function deleteRender() {
  refs.list.innerHTML = '';
  refs.div.innerHTML = '';
}

export { renderCountries, deleteRender };
