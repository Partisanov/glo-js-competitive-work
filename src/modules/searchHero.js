import { render } from "./render";

export const searchHero = () => {
    const searchInput = document.getElementById('search-input');

    const searchByName = (data, value) => {
        return data.filter((item) => {

            if (item.realName) {
                return (
                    item.name.toLowerCase().includes(value.toLowerCase()) ||
                    item.realName.toLowerCase().includes(value.toLowerCase()) ||
                    item.actor.toLowerCase().includes(value.toLowerCase())
                );
            } else {
                return (item.name.toLowerCase().includes(value.toLowerCase()) ||
                    item.actor.toLowerCase().includes(value.toLowerCase()));

            }
        });
    };


    searchInput.addEventListener('input', (e) => {
        let resp = fetch('./db/dbHeroes.json')
            .then(response => response.json())
            .catch(error => console.log(error.message));

        resp.then(data => {
            let sortedData = data.slice();
            const value = e.target.value;
            sortedData = searchByName(sortedData, value);

            render(sortedData);

        });
    });
};