const accordionHandler = (clickEvent) => {
  if (clickEvent.target.classList.contains('e-accordion__short')) {
    let hiddenPartEl = clickEvent.target.parentElement.querySelector('.e-accordion__more');

    if (hiddenPartEl) {
      hiddenPartEl.classList.toggle('e-accordion__more_view_default');
    }
  }
};

export default accordionHandler;
