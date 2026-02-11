function createImageElement(imgData, isFirstImage = false) {
    const img = document.createElement("img");

    img.className = "popup-image";
    img.src = imgData.src;
    img.alt = imgData.alt;

    // Dimensiones reales sin px
    img.width = 560;
    img.height = 875;

    // Reservar espacio correctamente
    img.style.aspectRatio = "560 / 875";
    img.style.width = "100%";
    img.style.height = "auto";

    if (isFirstImage) {
        img.fetchPriority = "high";
    } else {
        img.loading = "lazy";
    }

    return img;
}

function loadColumn(jsonPath, columnId, isFirstColumn = false) {
    fetch(jsonPath)
        .then(res => res.json())
        .then(images => {
            const column = document.getElementById(columnId);

            images.forEach((imgData, index) => {
                const container = document.createElement("div");
                container.className =
                    "elementor-element e-con-full e-flex e-con e-child";

                const widgetContainer = document.createElement("div");
                widgetContainer.className =
                    "elementor-widget elementor-widget-image";

                const widgetInner = document.createElement("div");
                widgetInner.className = "elementor-widget-container";

                const img = createImageElement(
                    imgData,
                    isFirstColumn && index === 0
                );

                widgetInner.appendChild(img);
                widgetContainer.appendChild(widgetInner);
                container.appendChild(widgetContainer);

                column.appendChild(container);
            });
        });
}

// Solo la PRIMERA imagen del sitio es prioridad alta
loadColumn("./imagesCol1.json", "col-1", true);
loadColumn("./imagesCol2.json", "col-2");
