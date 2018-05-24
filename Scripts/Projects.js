var headerEm;
window.onload = function () {
    var header = document.getElementById('header');
    headerEm = parseFloat(getComputedStyle(header).fontSize);
};

function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - headerEm * 3 - 25);
    }
    if (location.hash === '#tool') {
        document.getElementById('fullscreen').style.display = 'block';
    } else {
        document.getElementById('fullscreen').style.display = 'none';
    }
}

window.addEventListener("hashchange", offsetAnchor);
