import { render } from "./render";

const mainData = () => {

    const renderSelect = (id, array) => {
        const select = document.getElementById(id);
        array.forEach(item => {
            select.insertAdjacentHTML('beforeend', `
            <option value="${item}">${item}</option>
            `);
        });
    };

    fetch('./db/dbHeroes.json')
        .then(response => response.json())
        .then(data => {
            const species = new Set();
            const movies = new Set();
            const status = new Set();

            data.forEach((item) => {
                if (item.species) {
                    species.add(item.species);
                }
                if (item.status) {
                    status.add(item.status);
                }
                if (item.movies) {
                    item.movies.forEach(movie => movies.add(movie));
                }
            });

            renderSelect('species', species);

            renderSelect('movies', movies);

            renderSelect('status', status);

            render(data);

        }).catch(error => console.log(error.message));
};

export default mainData;