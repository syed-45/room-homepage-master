function handleMenuClick(event) {
    const mobileNav = document.getElementById('mobileNav');
    if (!mobileNav) return;
    // toggle visibility using the HTML hidden attribute (vanilla JS)
    mobileNav.hidden = !mobileNav.hidden;
}

let imgNum = 1
const imgStyles = {
    1: "",
    2: "translateX(-100%)",
    3: "translateX(-200%)"
}

const handleLeftArrowClick = (event, source) => {
    const currentImg = document.getElementById('heroImgContainer');
    if (!currentImg || imgNum === 1) return;
    imgNum--
    currentImg.style.transform = imgStyles[imgNum]

};

const handleRightArrowClick = (event, source) => {
    const currentImg = document.getElementById('heroImgContainer');
    if (!currentImg || imgNum === 3) return;
    imgNum++
    currentImg.style.transform = imgStyles[imgNum]
};

// attach the handler and pass a custom argument via a wrapper function
window.onload=function() {
    document.getElementById('menuBtn').addEventListener("click", (e) => handleMenuClick(e));
    document.getElementById('menuCloseBtn').addEventListener("click", (e) => handleMenuClick(e));
    document.getElementById('leftArrowBtn1').addEventListener("click", (e) => handleLeftArrowClick(e));
    document.getElementById('leftArrowBtn2').addEventListener("click", (e) => handleLeftArrowClick(e));
    document.getElementById('rightArrowBtn1').addEventListener("click", (e) => handleRightArrowClick(e));
    document.getElementById('rightArrowBtn2').addEventListener("click", (e) => handleRightArrowClick(e));
}