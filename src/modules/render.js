export const render = (cards) => {
    const cardsWrap = document.querySelector('.cards');
    cardsWrap.innerHTML = "";

    if (cards.length == 0) {
        cardsWrap.textContent = 'no information about Heroes';
    } else {

        cards.forEach(item => {

            const card = document.createElement('div');
            const cardItem = document.createElement('div');
            const cardImg = document.createElement('img');
            const cardTitle = document.createElement('h3');
            const cardDesc = document.createElement('div');

            card.classList.add('col-lg-4', 'col-md-6', 'col-sm-6', 'mb-3');
            cardItem.classList.add("cards__item");
            Object.assign(cardImg, {
                src: `db/${item.photo}`,
                className: 'img-fluid rounded-top cards__item__img',
                alt: 'marvel heroes img'
            });
            cardTitle.classList.add('cards__item__tittle');
            cardDesc.classList.add('cards__item__descr');


            cardTitle.textContent = `${item.name}`;
            Object.entries(item).forEach(([key, value]) => {
                if (key === 'photo' || key === 'movies') {
                    return;
                }
                cardDesc.insertAdjacentHTML('beforeend', `
            <span class="cards__item__desc__span">${key}: <strong>${value}</strong></span>
            `);
            });

            cardItem.append(cardImg);
            cardItem.append(cardTitle);
            cardItem.append(cardDesc);

            card.append(cardItem);
            cardsWrap.append(card);
        }
        );
    }
};