angular
    .module('app.core')
    .directive('pieChart', pieChart);

function pieChart() {
    return {
        restrict: 'C',
        template: '<div></div>',
        scope: {
            title: '@',
            data: '=',
            config: '=',
            errormsg: '@',
            drilldownurl: '&drilldownurl',
            chartfilter: '=',
            charttype: '@'
        },
        link: function (scope, element) {
            

            scope.$watch('data', function () {

                var data = [
                    { "CountryName": "China", "Pop1990": 1141, "Pop2008": 1333, "Pop2025": 1458 },
                    { "CountryName": "India", "Pop1990": 849, "Pop2008": 1140, "Pop2025": 1398 },
                    { "CountryName": "United States", "Pop1990": 250, "Pop2008": 304, "Pop2025": 352 },
                    { "CountryName": "Indonesia", "Pop1990": 178, "Pop2008": 228, "Pop2025": 273 },
                    { "CountryName": "Brazil", "Pop1990": 150, "Pop2008": 192, "Pop2025": 223 }
                ];
                
                $(element).igPieChart({
                    // width: "435px",
                    // title: "Energy Production Per Country",
                    height: "400px",
                    dataSource: data, //JSON data defined above
                    dataValue: "Pop2008",
                    dataLabel: "CountryName",
                    labelsPosition: "bestFit",
                    sliceClick: function (evt, ui) {
                        scope.drilldownurl({ args: ui });
                    },
                    
                });
    
                
            });
        }
    };
}
