function UnityProgress(gameInstance, progress) {
    if (!gameInstance.Module)
        return;

    var progress_div = document.getElementById("progress_div");
    var gameContainer = document.getElementById("gameContainer");
    if (progress_div) {
        gameContainer.style.display = "none";

        progress_div.querySelector('.progress_bar').querySelector('.progress_bar_content').style.width = (100 * progress) + "%";
        if (progress == 1) {
            progress_div.remove();
            gameContainer.style.display = "block";
        }
    }
}