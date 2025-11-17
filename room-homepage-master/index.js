// handler that accepts event and an extra argument
function handleMenuClick(event, source) {
    console.log('menu clicked from', source, event);
    const mobileNav = document.getElementById('mobileNav');
    if (!mobileNav) return;
    // toggle visibility using the HTML hidden attribute (vanilla JS)
    mobileNav.hidden = !mobileNav.hidden;
}

// attach the handler and pass a custom argument via a wrapper function
window.onload=function() {
    document.getElementById('menuBtn').addEventListener("click", function (e) {
        handleMenuClick(e, 'hero-button');
    });
    document.getElementById('menuCloseBtn').addEventListener("click", function (e) {
        handleMenuClick(e, 'hero-button');
    });
}