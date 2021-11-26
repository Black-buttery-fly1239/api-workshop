// eslint-disable-next-line no-unused-vars
const amabrands = document.querySelector('.brands');
/* eslint-disable no-unused-vars */
const carsTemplateText = document.querySelector('.carTemplate');
// eslint-disable-next-line no-undef
const brandTemplate = Handlebars.compile(carsTemplateText.innerText);
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
const thebutton = document.querySelector('.btn');

thebutton.addEventListener('click', function () {
    const brands = document.querySelector('.thebrand').value;
    // eslint-disable-next-line no-unused-vars
    const colorS = document.querySelector('.colors').value;
    // eslint-disable-next-line no-undef
    axios
        .get(`https://api-tutor.herokuapp.com/v1/cars/make/${brands}/color/${colorS}`)
        .then(function (result) {
            console.log(result.data);

            amabrands.innerHTML = brandTemplate({
                cars: result.data
            });
        });
});
