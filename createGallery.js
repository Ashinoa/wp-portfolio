
fetch('./imagesCol1.json')
    .then(res => res.json())
    .then(images => {
        const col1 = document.getElementById('col-1');

        images.forEach(imgData => {
            const container = document.createElement('div');
            container.className =
                'elementor-element elementor-element-4934eb4 e-con-full e-flex e-con e-child';

            container.innerHTML = `
        <div class="elementor-widget elementor-widget-spacer">
          <div class="elementor-widget-container">
            <div class="elementor-spacer">
              <div class="elementor-spacer-inner"></div>
            </div>
          </div>
        </div>

        <div class="elementor-element elementor-widget elementor-widget-image">
          <div class="elementor-widget-container">
            <img
              class="popup-image"
              src="${imgData.src}"
              alt="${imgData.alt}"
              loading="lazy"
            >
          </div>
        </div>

        <div class="elementor-widget elementor-widget-spacer">
          <div class="elementor-widget-container">
            <div class="elementor-spacer">
              <div class="elementor-spacer-inner"></div>
            </div>
          </div>
        </div>
      `;

            col1.appendChild(container);
        });
    });

fetch('./imagesCol2.json')
    .then(res => res.json())
    .then(images => {
        const col2 = document.getElementById('col-2');

        images.forEach(imgData => {
            const container = document.createElement('div');
            container.className =
                'elementor-element elementor-element-b92f322 e-con-full e-flex e-con e-child';

            container.innerHTML = `
        <div class="elementor-element elementor-widget elementor-widget-image">
          <div class="elementor-widget-container">
            <img
              class="popup-image"
              src="${imgData.src}"
              alt="${imgData.alt}"
              loading="lazy"
            >
          </div>
        </div>

        <div class="elementor-widget elementor-widget-spacer">
          <div class="elementor-widget-container">
            <div class="elementor-spacer">
              <div class="elementor-spacer-inner"></div>
            </div>
          </div>
        </div>
      `;

            col2.appendChild(container);
        });
    });
