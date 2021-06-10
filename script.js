function show_percentage() {
    const likes = parseInt(document.getElementById("like-bar").style.width);
    const dislikes = 100 - likes;

    const likes_label = "= " + likes + "%";
    const dislikes_label = "= " + dislikes + "%";

    sentiments = document.querySelectorAll("#text.style-scope.ytd-toggle-button-renderer");

    if (sentiments.length == 8) {
        if ((sentiments[6].classList.contains("style-text") && sentiments[7].classList.contains("style-text"))
        || (sentiments[6].classList.contains("style-default-active") && sentiments[7].classList.contains("style-text")) 
        || (sentiments[6].classList.contains("style-text") && sentiments[7].classList.contains("style-default-active"))) {
            sentiments[6].innerHTML = likes_label;
            sentiments[7].innerHTML = dislikes_label;
        }
    } else if (sentiments.length == 9) {
        if ((sentiments[7].classList.contains("style-text") && sentiments[8].classList.contains("style-text"))
        || (sentiments[7].classList.contains("style-default-active") && sentiments[8].classList.contains("style-text")) 
        || (sentiments[7].classList.contains("style-text") && sentiments[8].classList.contains("style-default-active"))) {
            sentiments[7].innerHTML = likes_label;
            sentiments[8].innerHTML = dislikes_label;
        }
    }
}

window.addEventListener('load', function () {
    setInterval(show_percentage, 250);
})