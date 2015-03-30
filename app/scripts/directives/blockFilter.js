app.directive('blockFilter', [function () {
    return {
        link: function postLink(scope, iElement, iAttrs) {

            function createListStyles(rulePattern, rows, cols) {
                var rules = [],
                    index = 0;
                for (var rowIndex = 0; rowIndex < rows; rowIndex++) {
                    for (var colIndex = 0; colIndex < cols; colIndex++) {
                        var x = (colIndex * 100) + "%",
                            y = (rowIndex * 100) + "%",
                            transforms = "{ -webkit-transform: translate3d(" + x + ", " + y + ", 0); transform: translate3d(" + x + ", " + y + ", 0); }";
                        rules.push(rulePattern.replace("{0}", ++index) + transforms);
                    }
                }
                var headElem = document.getElementsByTagName("head")[0],
                    styleElem = $("<style>").attr("type", "text/css").appendTo(headElem)[0];
                if (styleElem.styleSheet) {
                    styleElem.styleSheet.cssText = rules.join("\n");
                } else {
                    styleElem.textContent = rules.join("\n");
                }
            }

            var cols = iAttrs.cols;
            if($(window).width()<=360){
                cols=cols/2;
            }
            createListStyles(".ne-block-filt.ne-block-filtering li[data-position='{0}']", 50, cols);
            createListStyles(".ne-block-filt.ne-block-no-filt li:nth-child({0})", 50, cols);
            $(iElement).addClass("ne-block-filt")
            $(iElement).addClass("ne-block-no-filt")
        },
        controller:['$scope', function ($scope) {
            $scope.filtering = '';
            $scope.filter = function (filter) {
                $scope.filtering = filter;
                console.log($scope.filtering);
                $("ul").removeClass("ne-block-filtering").addClass("ne-block-no-filt");
                $("li").show();
                $("ul").addClass("ne-block-filtering").removeClass("ne-block-no-filt");
                var count = 1;
                //Jquery for little lag in angularJs
                $("li").each(function () {
                    var data = $(this).attr("data-group");
                    if (data.indexOf(filter) != -1) {
                        $(this).hide();
                        $(this).show();
                        $(this).attr("data-position", count++);
                    } else {
                        $(this).hide();
                        $(this).attr("data-position", 0);
                    }
                });
            };

            $scope.noFilter = function () {
                $scope.filtering = '';
                $("ul").removeClass("filtering").addClass("ne-block-no-filt");
                $("li").show();
            }
        }]
    }

}]);