import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import UAParser from 'ua-parser-js';

svg4everybody();

window.$ = $;
window.jQuery = $;

window.ua = new UAParser;
