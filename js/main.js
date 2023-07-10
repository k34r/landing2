document.addEventListener('DOMContentLoaded', function() {
    let elems_sidenav = document.querySelectorAll('.sidenav');
    let sidenav = M.Sidenav.init(elems_sidenav);

    let elems_modal = document.querySelectorAll('.modal');
    let modal = M.Modal.init(elems_modal);
});
