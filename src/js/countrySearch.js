import renderCountries from '../templates/countries-list.hbs';
import renderCountry from '../templates/country.hbs';
import debounce from 'lodash.debounce';
import API from './fetchCountries.js';

import { onOutputInfo, onNoCountry, onError } from './pnotify.js';


