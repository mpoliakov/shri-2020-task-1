const accordionHandler = (clickEvent) => {
  const accordionEl = clickEvent.target.closest('.e-accordion');

  if (!accordionEl) {
    return;
  }

  const accordionShortEl = accordionEl.querySelector('.e-accordion__short');

  if (accordionShortEl) {
    let accordionMoreEl = accordionEl.querySelector('.e-accordion__more');

    if (accordionMoreEl) {
      accordionMoreEl.classList.toggle('e-accordion__more_view_default');
    }
  }
};

export default accordionHandler;
