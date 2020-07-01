window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const header       = document.querySelector('.header');
    const wrapper      = document.querySelector('.main-wrapper');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    /* ---------------------------------------------------------------*/
    const fixedMenu = () => {

        window.addEventListener('scroll', () => {

            let scrollUp = document.documentElement.scrollTop;

            if (scrollUp >= header.clientHeight + 100) {
                header.classList.add('header_fixed');
                wrapper.style.cssText = `margin-top: 110px`;
            } else {
                header.classList.remove('header_fixed');
                wrapper.style.cssText = `margin-top: 0`;
            }
        });
    };
    fixedMenu();

    /* ---------------------------------------------------------------*/
    const dropdownSubMenu = () => {

        const request = new XMLHttpRequest();
        const url     = "http://artemknutov.tech/layout1/js/data/menu.json";
        request.open('GET', url);
        request.setRequestHeader('Content-Type', 'application/x-www-form-url');
        request.addEventListener("readystatechange", () => {

            if (request.readyState === 4 && request.status === 200) {

                const data = JSON.parse(request.responseText);

                data.forEach((elem) => {

                    let items       = document.createElement('ul');
                    items.className = 'dropdown-menu__items';
                    items.innerHTML = `
                        <li class='dropdown-menu__title'>${ elem.title }</li>
                    `;
                    dropdownMenu.appendChild(items);

                    elem.items.forEach((e) => {
                        let item       = document.createElement('li');
                        item.className = 'dropdown-menu__item';
                        item.innerHTML = `
                        <a href='${e.url}'>${e.item}</a>
                    `;
                        items.appendChild(item);
                    });

                });
            }
        });

        request.send();
    };
    dropdownSubMenu();

    /* ---------------------------------------------------------------*/

});
