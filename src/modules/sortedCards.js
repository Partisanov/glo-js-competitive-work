import { render } from "./render";

export const sortedCards = () => {
    const filterblock = document.getElementById('sort');

    const sortedByMovies = (data, value) => {
        return data.filter(item => {
            if (item.movies) {
                return item.movies.includes(value);
            }
        });
    };

    const sorted = (data, key, value) => {
        return data.filter(item => {
            if (item[key]) {
                return item[key] === value;
            }
        });
    };

    filterblock.addEventListener('change', () => {
        const selectsList = filterblock.querySelectorAll('select');
        let resp = fetch('./db/dbHeroes.json')
            .then(response => response.json())
            .catch(error => console.log(error.message));

        resp.then(data => {
            let sortedData = data.slice();

            selectsList.forEach(selectItem => {
                if (selectItem.value !== 'noselected') {
                    const keyName = selectItem.id;
                    const value = selectItem.value;

                    if (keyName === 'movies') {
                        sortedData = sortedByMovies(sortedData, value);
                    }
                    if (keyName !== 'movies') {
                        sortedData = sorted(sortedData, keyName, value);
                    }

                    return sortedData;
                }

            });
            render(sortedData);
        });

    });

};

