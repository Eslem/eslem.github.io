app.directive("imgPreload", function () {
    return {
        link: function (scope, element, attrs) {
            var img, loadImage;
            var IMAGE_LOAD = "images/loading.gif";
            var IMAGE_FAIL = "images/loading.gif";
            img = null;

            loadImage = function () {

                element[0].src = IMAGE_LOAD;

                img = new Image();
                
                img.src = attrs.src;
                
                if (attrs.ngSrc)
                    img.src = attrs.ngSrc;

                img.onload = function () {
                    element[0].src = attrs.src;
                };

                img.onerror = function () {
                    element[0].src = IMAGE_FAIL;
                }
            };

            loadImage();


        }
    };
});