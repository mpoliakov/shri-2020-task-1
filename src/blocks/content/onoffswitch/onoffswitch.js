const onoffswitchHandler = (clickEvent) => {
  if (clickEvent.target.classList.contains('onoffswitch')) {
    clickEvent.target.classList.toggle('onoffswitch_checked');

    const themeElements = document.querySelectorAll('.theme');

    if (themeElements && themeElements.length) {
      for (let themeEl of themeElements) {
        themeEl.classList.toggle('theme_color_project-default');
        themeEl.classList.toggle('theme_color_project-inverse');
      }
    }
  }
};

export default onoffswitchHandler;
