window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const header         = document.querySelector('.wrapper-header');
    const headerMenuItem = document.querySelectorAll('.header-menu__item');
    const wrapper        = document.querySelector('.main-wrapper');
    const dropdownMenu   = document.querySelector('.dropdown-menu');

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

                /*Functions */
                const showSubmenuItems = (elemData) => {
                    dropdownMenu.innerHTML = ""; // clear
                    dropdownMenu.classList.add('dropdown-menu_active');

                    let elemsData = Object.entries(elemData);

                    elemsData.forEach((elems) => {
                        let blockContItems = document.createElement('ul');
                        blockContItems.className = 'dropdown-menu__items';
                        dropdownMenu.appendChild(blockContItems);

                        elems[1].forEach((elem) => {
                            let item       = document.createElement('li');
                            item.className = 'dropdown-menu__item';
                            item.innerHTML = `
                                <a href='${ elem.url }'>${ elem.item }</a>
                            `;
                            blockContItems.appendChild(item);
                        });
                    });
                };
                /* End Functions */

                headerMenuItem.forEach((menuItem) => {
                    menuItem.addEventListener('mouseover', (event) => {
                        let target = event.target;

                        switch (target.innerText) {
                            case 'Shop':
                                showSubmenuItems(data[0].mainitem1[0]);
                                break;
                            case 'Collections':
                                showSubmenuItems(data[1].mainitem2[0]);
                                break;
                            default:
                                dropdownMenu.classList.remove('dropdown-menu_active');
                                break;
                        }
                    });
                });

                document.addEventListener('mouseover', (event) => {
                    let target = event.target;
                    if (!target.closest('.wrapper-header')){
                        dropdownMenu.classList.remove('dropdown-menu_active');
                    }
                });

            }
        });
        request.send();
    };
    dropdownSubMenu();

    /* ---------------------------------------------------------------*/

});
