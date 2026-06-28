/* === PDF Viewer Wrapper Logic === */

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('viewer-container');
  
  try {
    // 1. Fetch JSON data
    const dataResponse = await fetch('index-data.json');
    if (!dataResponse.ok) throw new Error("Failed to load JSON data.");
    const data = await dataResponse.json();

    // 2. Fetch the base index.html to extract the templates
    const htmlResponse = await fetch('index.html');
    if (!htmlResponse.ok) throw new Error("Failed to load base template.");
    const htmlText = await htmlResponse.text();
    
    // Parse the HTML string into a DOM
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    
    // Extract the template structures from the unmodified base template
    const basePageWrapper = doc.querySelector('.page__wrapper');
    const dayTemplate = doc.querySelector('#day-template');
    
    if (!basePageWrapper || !dayTemplate) {
      throw new Error("Could not find necessary templates in index.html");
    }

    // Remove the original day-template and skip-link from the cloned wrapper to keep it clean
    const templateInWrapper = basePageWrapper.querySelector('template');
    if (templateInWrapper) templateInWrapper.remove();

    // Clear loading text
    container.innerHTML = '';

    // 3. Render all pages
    data.pages.forEach(page => {
      // Clone the extracted page wrapper
      const pageClone = basePageWrapper.cloneNode(true);
      
      // Populate page-level headers and footers
      pageClone.querySelector('.page-header__title').textContent = page.header.title;
      pageClone.querySelector('.day-heading').textContent = page.mainHeading;
      pageClone.querySelector('.page-footer__text').textContent = page.footer.text;

      const daysContainer = pageClone.querySelector('#days-container');
      daysContainer.innerHTML = ''; // Ensure it's clean

      // Populate days
      page.days.forEach(day => {
        const dayClone = dayTemplate.content.cloneNode(true);
        
        const section = dayClone.querySelector('.day-section');
        section.setAttribute('aria-labelledby', day.id);
        section.classList.add(`day-section--${day.layout}`);

        const title = dayClone.querySelector('.day-section__title');
        title.id = day.id;
        title.textContent = day.title;

        const paragraphsContainer = dayClone.querySelector('.day-section__paragraphs');
        day.paragraphs.forEach(pText => {
          const p = document.createElement('p');
          p.className = 'day-section__body';
          p.textContent = pText;
          paragraphsContainer.appendChild(p);
        });

        const callout = dayClone.querySelector('.day-section__callout');
        callout.textContent = day.callout;

        const imgContainer = dayClone.querySelector('.day-section__image');
        if (day.image) {
          const img = dayClone.querySelector('.day-section__img');
          img.src = day.image.src;
          img.alt = day.image.alt;
          if (day.image.width) img.setAttribute('width', day.image.width);
          if (day.image.height) img.setAttribute('height', day.image.height);
          if (day.image.loading) img.setAttribute('loading', day.image.loading);
        } else {
          imgContainer.remove();
          section.classList.remove(`day-section--${day.layout}`);
          section.style.gridTemplateColumns = '1fr';
        }

        daysContainer.appendChild(dayClone);
      });

      // Append constructed page to viewer
      container.appendChild(pageClone);
    });

  } catch (error) {
    console.error("Viewer Error:", error);
    container.innerHTML = `<h2 style="color: red; font-family: sans-serif;">Error initializing viewer: ${error.message}</h2>`;
  }
});
