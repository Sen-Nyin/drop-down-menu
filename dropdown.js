'use: strict';

const navbar = document.querySelectorAll('[data-navbar]');

navbar.forEach((nav) => {
  nav.addEventListener('click', (e) => {
    const isButton = e.target.matches('[data-dropdown-button');
    let dropDown;
    if (isButton && e.target.closest('[data-dropdown]')) {
      dropDown = e.target.nextElementSibling;
      if (dropDown.dataset.dropdownExpanded === 'true') {
        dropDown.dataset.dropdownExpanded = 'false';
      } else {
        dropDown.dataset.dropdownExpanded = 'true';
        const allDropDowns = document.querySelectorAll('[data-dropdown-menu]');
        allDropDowns.forEach((menu) => {
          const thisDropDown = menu;
          if (thisDropDown !== dropDown) {
            thisDropDown.dataset.dropdownExpanded = 'false';
          }
        });
      }
    }
  });
});
