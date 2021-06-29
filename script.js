function show_percentage() {
    const likes = parseInt(document.getElementById("like-bar").style.width);
    const dislikes = 100 - likes;

    const likes_label = "= " + likes + "%";
    const dislikes_label = "= " + dislikes + "%";

    // "sentiments" finds the list containing the texts of Likes and Dislikes
    sentiments = document.querySelectorAll("#text.style-scope.ytd-toggle-button-renderer");

    /* 
        The structure of 'sentiments' is such that it can return 
        a list with numerous elements, but only the last 2 elements
        in the list are actually used for the Likes and Dislikes respectively.
        
        Hence, 'sent_length' gets the correct length of 'sentiments'
        (which sometimes bugs out), and only applies the following
        changes to the last two elements.
    */
    sent_length = sentiments.length;

    /* 
        Checks if video is Liked / Disliked / neither,
        and accordingly updates sentiments to percentages.
    */
    if ((sentiments[sent_length-2].classList.contains("style-text") && sentiments[sent_length-1].classList.contains("style-text"))
        || (sentiments[sent_length-2].classList.contains("style-default-active") && sentiments[sent_length-1].classList.contains("style-text")) 
        || (sentiments[sent_length-2].classList.contains("style-text") && sentiments[sent_length-1].classList.contains("style-default-active"))) {
        sentiments[sent_length-2].innerHTML = likes_label;
        sentiments[sent_length-1].innerHTML = dislikes_label;
    }
}

window.addEventListener('load', function () {
    setInterval(show_percentage, 250);
})