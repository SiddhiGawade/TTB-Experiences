/* === Data Loader for Thailand Itinerary === */

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('index-data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (!data.pages || data.pages.length === 0) {
      throw new Error("No pages found in itinerary data.");
    }

    // Determine which page to load from URL parameters (e.g., ?page=page-2)
    // Default to the first page if none is specified
    const urlParams = new URLSearchParams(window.location.search);
    const requestedPageId = urlParams.get('page');
    let pageData = data.pages.find(p => p.pageId === requestedPageId);
    
    if (!pageData) {
      pageData = data.pages[0]; // fallback to first page
    }

    // 1. Populate Meta Elements
    document.getElementById('meta-title').textContent = pageData.meta.title;
    document.getElementById('meta-description').setAttribute('content', pageData.meta.description);

    // 2. Populate Page Headers
    document.getElementById('page-header-title').textContent = pageData.header.title;
    document.getElementById('main-heading').textContent = pageData.mainHeading;
    document.getElementById('page-footer-text').textContent = pageData.footer.text;

    // 3. Populate Day Sections
    const daysContainer = document.getElementById('days-container');
    const template = document.getElementById('day-template');

    pageData.days.forEach(day => {
      // Clone the template content
      const clone = template.content.cloneNode(true);
      
      const section = clone.querySelector('.day-section');
      section.setAttribute('aria-labelledby', day.id);
      section.classList.add(`day-section--${day.layout}`);

      const title = clone.querySelector('.day-section__title');
      title.id = day.id;
      title.textContent = day.title;

      const paragraphsContainer = clone.querySelector('.day-section__paragraphs');
      day.paragraphs.forEach(pText => {
        const p = document.createElement('p');
        p.className = 'day-section__body';
        p.textContent = pText;
        paragraphsContainer.appendChild(p);
      });

      const callout = clone.querySelector('.day-section__callout');
      callout.textContent = day.callout;

      const imgContainer = clone.querySelector('.day-section__image');
      if (day.image) {
        const img = clone.querySelector('.day-section__img');
        img.src = day.image.src;
        img.alt = day.image.alt;
        if (day.image.width) img.setAttribute('width', day.image.width);
        if (day.image.height) img.setAttribute('height', day.image.height);
        if (day.image.loading) img.setAttribute('loading', day.image.loading);
      } else {
        imgContainer.remove();
        // Adjust layout class to full width if no image
        section.classList.remove(`day-section--${day.layout}`);
        section.style.gridTemplateColumns = '1fr';
      }

      // Append clone to main content
      daysContainer.appendChild(clone);
    });

  } catch (error) {
    console.error("Error loading itinerary data:", error);
    document.getElementById('main-heading').textContent = "Error loading itinerary.";
  }
});
