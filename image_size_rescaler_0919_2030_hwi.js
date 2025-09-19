// 代码生成时间: 2025-09-19 20:30:29
$(document).ready(function() {

    // Function to resize image
    function resizeImage(imageSrc, newSize) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = newSize.width;
                canvas.height = newSize.height;
                ctx.drawImage(img, 0, 0, newSize.width, newSize.height);
                const resizedImg = canvas.toDataURL('image/jpeg');
                resolve(resizedImg);
            };
            img.onerror = function() {
                reject('Image loading error');
            };
            img.src = imageSrc;
        });
    }

    // Function to handle batch resizing
    function batchResizeImage(imageElements, newSize) {
        const promises = [];
        imageElements.forEach(element => {
            promises.push(resizeImage(element.src, newSize));
        });
        return Promise.all(promises).then(results => {
            return results.map((dataUrl, index) => {
                imageElements[index].src = dataUrl;
            });
        }).catch(error => {
            console.error('Batch resizing error:', error);
        });
    }

    // Example usage: Resize all images with class 'resizable' to 200x200
    $('img.resizable').each(function() {
        batchResizeImage($(this), { width: 200, height: 200 });
    });

});
