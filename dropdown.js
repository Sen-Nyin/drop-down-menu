'use: strict';

(function handleDropDowns() {
  const navbars = document.querySelectorAll('[data-navbar]');
  navbars.forEach((navbar) => {
    navbar.addEventListener('click', (e) => {
      const isButton = e.target.matches('[data-dropdown-button');
      if (isButton && e.target.closest('[data-dropdown]')) {
        const dropDown = e.target.nextElementSibling;
        if (dropDown.dataset.dropdownExpanded === 'true') {
          dropDown.dataset.dropdownExpanded = 'false';
        } else {
          dropDown.dataset.dropdownExpanded = 'true';
          const allDropDowns = document.querySelectorAll(
            '[data-dropdown-menu]'
          );
          allDropDowns.forEach((menu) => {
            const m = menu;
            if (menu !== dropDown) m.dataset.dropdownExpanded = 'false';
          });
        }
      }
    });
  });
})();
