/* eslint-disable no-unused-vars */
// const { application } = require('express');

const colors = document.querySelector('.colors');

const colorTemplateText = document.querySelector('.colorTemplate');

// eslint-disable-next-line no-undef
const colorTemplate = Handlebars.compile(colorTemplateText.innerText);

// eslint-disable-next-line no-undef
axios
    .get('http://api-tutor.herokuapp.com/v1/colors')
    .then(function (result) {
        console.log(result.data);

        colors.innerHTML = colorTemplate({
            colors: result.data
        });
    });

const brands = document.querySelector('.brands');
const brandsTemplate = document.querySelector('.brandTemplate');
// eslint-disable-next-line no-undef
const brandTemplate = Handlebars.compile(brandsTemplate.innerText);

// eslint-disable-next-line no-undef
axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(function (result) {
        console.log(result.data);

        brands.innerHTML = brandTemplate({
            brands: result.data
        });
    });

const cars = document.querySelector('.cars');
const carsTemplate = document.querySelector('.carTemplate');
// eslint-disable-next-line no-undef
const carTemplate = Handlebars.compile(carsTemplate.innerText);

// eslint-disable-next-line no-undef
axios
    .get('https://api-tutor.herokuapp.com/v1/cars')
    .then(function (result) {
        // console.log(result.data);

        cars.innerHTML = carTemplate({
            cars: result.data
        });
    });
