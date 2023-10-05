function video_toggle() {
    document.getElementById('lesson1').className = "hide";
    document.getElementById('lesson2').className = "hide";
    document.getElementById('btn_status').className = "hide";
    document.getElementById('videos').classList.remove("hide");
}

function picture_toggle() {
    document.getElementById('lesson1').classList.remove("hide");
    document.getElementById('lesson2').classList.remove("hide");
    document.getElementById('btn_status').classList.remove("hide")
    document.getElementById('btn_status').className = "btns";
    document.getElementById('videos').className = "hide";
}
