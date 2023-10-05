function describe_toggle() {
    document.getElementById('form').classList.remove("hide")
    document.getElementById('video_button').classList.remove("active")
    document.getElementById('exam_button').classList.remove("active");
    document.getElementById('pre_exam_button').classList.remove("active")
    document.getElementById('describe_lesson1').classList.remove("hide")

    document.getElementById('describe_button').className = "active list-group-item list-group-item-action list-item-responsive hover_effect";
    document.getElementById('videos').className = "hide";
    document.getElementById('form').className = 'hide';
    document.getElementById('exam').className = 'hide';
    document.getElementById('btn_status').className = "hide";
  }

  function pre_exam_toggle() {
  document.getElementById('form').classList.remove("hide")
  document.getElementById('video_button').classList.remove("active")
  document.getElementById('exam_button').classList.remove("active");
  document.getElementById('describe_button').classList.remove("active");
  
  document.getElementById('videos').className = "hide";
  document.getElementById('describe_lesson1').className = "hide";
  document.getElementById('exam').className = "hide";
  document.getElementById('pre_exam_button').className = "active list-group-item list-group-item-action list-item-responsive hover_effect";

} 

  function video_toggle() {
    document.getElementById('form').className = 'hide';
    document.getElementById('exam').className = 'hide';
    document.getElementById('describe_lesson1').className = 'hide';
    document.getElementById('video_button').className = 'active list-group-item list-group-item-action list-item-responsive hover_effect';

    document.getElementById('videos').classList.remove("hide");
    document.getElementById('pre_exam_button').classList.remove("active");
    document.getElementById('exam_button').classList.remove("active");
    document.getElementById('describe_button').classList.remove("active");
}

  function exam_toggle() {
  document.getElementById('exam').classList.remove("hide")
  document.getElementById('video_button').classList.remove("active")
  document.getElementById('pre_exam_button').classList.remove("active");
  document.getElementById('describe_button').classList.remove("active");

  document.getElementById('videos').className = "hide";
  document.getElementById('form').className = "hide";
  document.getElementById('describe_lesson1').className = 'hide';
  document.getElementById('exam_button').className = "active list-group-item list-group-item-action list-item-responsive hover_effect";
  }