import onoffswitchHandler from './blocks/content/onoffswitch/onoffswitch';
import accordionHandler from './blocks/base/interactive/e-accordeon/e-accordeon';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', onoffswitchHandler);
  document.addEventListener('click', accordionHandler);
});
