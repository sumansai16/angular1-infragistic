angular
    .module('app.core')
    .directive('lineChart', lineChart);

function lineChart() {
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

                var data = [{
                        "date": 2015,
                        "Member_Only": 2,
                        "Leadership_Role": 89,
                        "Committee_Member": 59,
                    }, {
                        "date": 2016,
                        "Member_Only": 2,
                        "Leadership_Role": 9,
                        "Committee_Member": 9,
                    },
                    {
                        "date": 2017,
                        "Member_Only": 12,
                        "Leadership_Role": 19,
                        "Committee_Member": 39,
                    },
                    {
                        "date": 2018,
                        "Member_Only": 20,
                        "Leadership_Role": 189,
                        "Committee_Member": 359,
                    }
                ];

                $(element).igCategoryChart({
                    width: "98%",
                    height: "400px",
                    legend: {
                        element: "legend3",
                        type: 'legend',
                        width: "98%"
                    },
                    title: "Refining & Supply (Org Lvl 1) Participations Over Time",
                    titleTextColor: "black",
                    titleTextStyle: "11pt Verdona",
                    titleBottomMargin: 10,
                    // subtitle: "$$(Chart_subtitle_countries_1995_v_2005)",
                    yAxisTitle: "Count of ID",
                    xAxisTitle: "pDate Added",
                    dataSource: data,
                    chartType: "line",
                    isHorizontalZoomEnabled: false,
                    isVerticalZoomEnabled: false
                });


            });
        }
    };
}