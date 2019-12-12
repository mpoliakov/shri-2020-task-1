document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(event){
    if (event.target.classList.contains('onoffswitch')) {
      event.target.classList.toggle('onoffswitch_checked');
      let theme = event.target.closest('.theme');
      theme.classList.toggle('theme_color_project-default');
      theme.classList.toggle('theme_color_project-inverse');
    }
  });
});
