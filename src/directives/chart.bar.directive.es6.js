angular
    .module('app.core')
    .directive('hcBarChart', hcBarChart);

function hcBarChart() {
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
                        "Year": 1995,
                        "Canada": 16.8331,
                        "SaudiArabia": 20.6591,
                        "Russia": 41.4181,
                        "UnitedStates": 71.1744,
                        "China": 33.5387,
                    },
                    {
                        "Year": 1996,
                        "Canada": 17.2262,
                        "SaudiArabia": 20.8153,
                        "Russia": 39.9461,
                        "UnitedStates": 72.4860,
                        "China": 35.1037,
                    },
                    {
                        "Year": 1997,
                        "Canada": 17.4787,
                        "SaudiArabia": 21.2433,
                        "Russia": 38.7414,
                        "UnitedStates": 72.4715,
                        "China": 38.4407,
                    },
                    {
                        "Year": 1998,
                        "Canada": 17.4377,
                        "SaudiArabia": 21.4151,
                        "Russia": 39.0652,
                        "UnitedStates": 72.8764,
                        "China": 38.8876,
                    },
                    {
                        "Year": 1999,
                        "Canada": 17.6813,
                        "SaudiArabia": 20.1783,
                        "Russia": 40.8088,
                        "UnitedStates": 71.7420,
                        "China": 37.5003,
                    },
                    {
                        "Year": 2000,
                        "Canada": 18.1283,
                        "SaudiArabia": 21.5931,
                        "Russia": 41.6954,
                        "UnitedStates": 71.3322,
                        "China": 38.7841,
                    },
                    {
                        "Year": 2001,
                        "Canada": 18.0215,
                        "SaudiArabia": 20.9456,
                        "Russia": 42.6263,
                        "UnitedStates": 71.7343,
                        "China": 41.6730,
                    },
                    {
                        "Year": 2002,
                        "Canada": 18.3578,
                        "SaudiArabia": 20.2696,
                        "Russia": 44.1627,
                        "UnitedStates": 70.7132,
                        "China": 46.2297,
                    },
                    {
                        "Year": 2003,
                        "Canada": 18.3074,
                        "SaudiArabia": 23.0489,
                        "Russia": 47.1823,
                        "UnitedStates": 69.9627,
                        "China": 51.2491,
                    },
                    {
                        "Year": 2004,
                        "Canada": 18.6642,
                        "SaudiArabia": 24.1590,
                        "Russia": 49.8648,
                        "UnitedStates": 70.2224,
                        "China": 55.9233,
                    },
                    {
                        "Year": 2005,
                        "Canada": 18.8932,
                        "SaudiArabia": 25.4401,
                        "Russia": 51.0796,
                        "UnitedStates": 69.4437,
                        "China": 63.9524,
                    },
                    {
                        "Year": 2006,
                        "Canada": 19.2273,
                        "SaudiArabia": 24.6105,
                        "Russia": 52.0557,
                        "UnitedStates": 70.7539,
                        "China": 68.2333,
                    },
                    {
                        "Year": 2007,
                        "Canada": 19.5439,
                        "SaudiArabia": 23.7326,
                        "Russia": 52.5599,
                        "UnitedStates": 71.4000,
                        "China": 73.2809,
                    },
                    {
                        "Year": 2008,
                        "Canada": 19.0196,
                        "SaudiArabia": 25.1682,
                        "Russia": 52.5460,
                        "UnitedStates": 73.2178,
                        "China": 78.3599,
                    },
                    {
                        "Year": 2009,
                        "Canada": 18.3249,
                        "SaudiArabia": 22.837,
                        "Russia": 50.4291,
                        "UnitedStates": 72.6409,
                        "China": 84.0643,
                    },
                    {
                        "Year": 2010,
                        "Canada": 18.3358,
                        "SaudiArabia": 24.7442,
                        "Russia": 53.2232,
                        "UnitedStates": 74.7951,
                        "China": 90.3918,
                    },
                ];

                var lastFiveYears = [{
                        "Year": 2005,
                        "Canada": 18.8932,
                        "SaudiArabia": 25.4401,
                        "Russia": 51.0796,
                        "UnitedStates": 69.4437,
                        "China": 63.9524,
                    },
                    {
                        "Year": 2006,
                        "Canada": 19.2273,
                        "SaudiArabia": 24.6105,
                        "Russia": 52.0557,
                        "UnitedStates": 70.7539,
                        "China": 68.2333,
                    },
                    {
                        "Year": 2007,
                        "Canada": 19.5439,
                        "SaudiArabia": 23.7326,
                        "Russia": 52.5599,
                        "UnitedStates": 71.4000,
                        "China": 73.2809,
                    },
                    {
                        "Year": 2008,
                        "Canada": 19.0196,
                        "SaudiArabia": 25.1682,
                        "Russia": 52.5460,
                        "UnitedStates": 73.2178,
                        "China": 78.3599,
                    },
                    {
                        "Year": 2009,
                        "Canada": 18.3249,
                        "SaudiArabia": 22.837,
                        "Russia": 50.4291,
                        "UnitedStates": 72.6409,
                        "China": 84.0643,
                    },
                    {
                        "Year": 2010,
                        "Canada": 18.3358,
                        "SaudiArabia": 24.7442,
                        "Russia": 53.2232,
                        "UnitedStates": 74.7951,
                        "China": 90.3918,
                    }
                ];

                var everyThreeYears = [{
                        "Year": 1995,
                        "Canada": 16.8331,
                        "SaudiArabia": 20.6591,
                        "Russia": 41.4181,
                        "UnitedStates": 71.1744,
                        "China": 33.5387,
                    },
                    {
                        "Year": 1998,
                        "Canada": 17.4377,
                        "SaudiArabia": 21.4151,
                        "Russia": 39.0652,
                        "UnitedStates": 72.8764,
                        "China": 38.8876,
                    },
                    {
                        "Year": 2001,
                        "Canada": 18.0215,
                        "SaudiArabia": 20.9456,
                        "Russia": 42.6263,
                        "UnitedStates": 71.7343,
                        "China": 41.6730,
                    },
                    {
                        "Year": 2004,
                        "Canada": 18.6642,
                        "SaudiArabia": 24.1590,
                        "Russia": 49.8648,
                        "UnitedStates": 70.2224,
                        "China": 55.9233,
                    },
                    {
                        "Year": 2007,
                        "Canada": 19.5439,
                        "SaudiArabia": 23.7326,
                        "Russia": 52.5599,
                        "UnitedStates": 71.4000,
                        "China": 73.2809,
                    },
                    {
                        "Year": 2010,
                        "Canada": 18.3358,
                        "SaudiArabia": 24.7442,
                        "Russia": 53.2232,
                        "UnitedStates": 74.7951,
                        "China": 90.3918,
                    },
                ];

                // function generateCategoryXChart(chartType) {

                // var selector = "#" + chartType;
                var isColumnChart = "stackedColumn".contains("Column");

                $(element).igDataChart({
                    seriesMouseLeftButtonDown: function (evt, ui) {
                        scope.drilldownurl({ args: ui });
                    },
                    dataSource: lastFiveYears,
                    height: "400px",
                    // width: "400px",
                    title: "Energy Production Per Country",
                    subtitle: "The top five Total Primary Energy producers",
                    axes: [{
                            name: "Year",
                            type: "categoryX",
                            label: "Year",
                            title: "Year",
                            gap: 1,
                        },
                        {
                            name: "Volume",
                            type: "numericY",
                            title: "Quadrillion Btu"
                        }
                    ],
                    series: [function () { // a self executing function to create the series initialization object
                        var seriesObj = {
                            name: "parent",
                            xAxis: "Year",
                            yAxis: "Volume",
                            type: "stackedColumn",
                            outline: "transparent",
                            series: [{
                                name: "China",
                                title: "China",
                                type: "stackedFragment",
                                showTooltip: true,
                                tooltipTemplate: "China",
                                valueMemberPath: "China"
                            }, {
                                name: "United States",
                                title: "United States",
                                type: "stackedFragment",
                                showTooltip: true,
                                tooltipTemplate: "United States",
                                valueMemberPath: "UnitedStates"
                            }, {
                                name: "Russia",
                                title: "Russia",
                                showTooltip: true,
                                tooltipTemplate: "Russia",
                                type: "stackedFragment",
                                valueMemberPath: "Russia"
                            }, {
                                name: "Saudi Arabia",
                                title: "Saudi Arabia",
                                showTooltip: true,
                                tooltipTemplate: "Saudi Arabia",
                                type: "stackedFragment",
                                valueMemberPath: "SaudiArabia"
                            }, {
                                name: "Canada",
                                title: "Canada",
                                showTooltip: true,
                                tooltipTemplate: "Canada",
                                type: "stackedFragment",
                                valueMemberPath: "Canada"
                            }]
                        };
                        if (isColumnChart) { //for column charts set the radius to 0
                            seriesObj.radius = 0;
                        }
                        return seriesObj;
                    }()],
                    horizontalZoomable: false,
                    verticalZoomable: false,
                    windowResponse: "immediate"
                });
                // };

                // generateCategoryXChart("stackedColumn");

            });
        }
    };
}
/*

import angular from 'angular';

function hcBarChart() {

    return {
        restrict: 'C',
        template: '<div></div>',
        scope: {
            title: '@',
            data: '=',
            config: '=',
            errormsg: '@',
            statepath: '&statepath',
            chartfilter: '=',
            charttype: '@'
        },
        link: function (scope, element) {
            scope.$on('fullscreen', function () {
                setTimeout(function () {
                    $(element).highcharts().reflow();
                }, 0);
            });

            scope.$watch('data', function () {

                var errorFlag = false;
                var height = 150;
                var titleText = '';
                if (angular.isUndefined(scope.data))
                    errorFlag = true;
                else if (scope.data.length == 0)
                    errorFlag = true;
                else if (angular.isUndefined(scope.config)) {
                    errorFlag = true;
                }
                if (errorFlag) {
                    // $(element).on('click', function () {
                    // 	if (scope.event == 'true') {
                    // 		$(element).css('cursor', 'pointer');
                    // 		var path = scope.statepath;
                    // 		$state.go(path);
                    // 	}
                    // });
                    $(element).highcharts({
                        credits: {
                            enabled: false
                        },
                        chart: {
                            height: height
                        },
                        title: {
                            text: titleText,
                            style: {
                                fontSize: '0.9rem !important',
                                fontWeight: 600
                            }
                        },
                        subtitle: {
                            text: '<b>' + scope.errormsg + '</b>',
                            y: 120
                        }
                    });
                    return
                }
                var chartType = scope.charttype;
                var data = scope.data;
                var config = scope.config;
                var filter = scope.chartfilter;

                // Assign all required values to local variable
                var categories1 = config.categories;
                var status1 = Object.keys(config.statesDataType);
                var statesDataType = config.statesDataType;
                var titleText = config.title;
                var type = config.type;
                var height = config.height;
                var pieHeight = config.pieHeight;
                var pieLeft = config.pieLeft;
                var pieTop = config.pieTop;
                var kpiChart = angular.isUndefined(config.itsmkpi) ? false : config.itsmkpi;
                var colorArray = config.colors;

				if (angular.isUndefined(scope.config.colors)) {
					colorArray = ['#E31937', '#991F3D', '#FF6A00', '#F2A200', '#0167AC','#A1C4D0','#E0E0E0','#002D5c','#12890E','#A5ACB0'];
				}
              
                var pieSection = new Object();
                var pieSectionCount = new Array();
                var comboSeries = [];
                if (categories1[0] === "") {
                    var i = 0;
                    angular.forEach(data, function (d) {

                        comboSeries[i] = {
                            type: chartType, // line,bar,column
                            name: d.status,
                            data: [d.count]
                        }
                        i++;

                    });
                }
                else if (kpiChart)
                { comboSeries = data }
                else {

                    // comboSeries = data
                    for (var i = 0; i < status1.length; i += 1) {
                        pieSection[status1[i]] = [];
                        pieSectionCount[i] = [status1[i], 0];
                        for (var j = 0; j < categories1.length; j += 1) {
                            pieSection[status1[i]][j] = 0;
                        }
                    }

                    var i = 0;
                    categories1.forEach(function (date) {
                        angular.forEach(data, function (d) {
                            if (date == d.date) {
                                for (var j = 0; j < status1.length; j += 1) {
                                    if (d.status == statesDataType[status1[j]]) {
                                        pieSection[status1[j]][i] = d.count;
                                    }
                                }
                            }
                        });
                        i++;
                    });

                    for (var j = 0; j < status1.length; j += 1) {
                        var count = 0;
                        pieSection[status1[j]].forEach(function (value) {
                            count = count + value;
                        });
                        pieSectionCount[j][1] = count;

                        comboSeries[j] = {
                            type: chartType, // line,bar,column
                            name: status1[j],
                            data: pieSection[status1[j]]
                        }
                    }
                }
                var chartConfig = {
                    chart: {
                        height: height,
                    },
                    legend: {
                                      itemStyle: {
                                        fontSize: '0.8rem !important',
                                        fontWeight: 600
                                    }
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: titleText,
                        style: {
                            fontSize: '0.9rem !important',
                            fontWeight: 600
                        },
						plotLines: [{
							value: 0,
							width: 1,
							color: '#808080'
						}]
                    },
                    xAxis: { 
                        categories: categories1 ,
                        labels: {
                               style: {
                                   fontSize: '0.6rem !important'
                                 }
                                }
                        },
                    yAxis: {
                        maxPadding: .5,
                        title: {
                                   style: {
                                       fontSize: '0.6rem !important'
                                   }
                                },
                        labels: {
                                   style: {
                                       fontSize: '0.6rem !important'
                                   }
                            }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true,
                                formatter: function () {
                                    return formatter(this)
                                },
                                 style: {
                                         fontSize: '0.8rem !important',
                                        fontWeight: 600
                                 }
                            },
                            enableMouseTracking: true
                        },
                        column: {
                            dataLabels: {
                                enabled: true,
                                formatter: function () {
                                    return formatter(this)
                                }
                            },
                            enableMouseTracking: true
                        },
                        series: {
                            cursor: 'pointer',
                            events: {
                                legendItemClick: function () {
                                    var index = this.index,
                                        chart = this.chart,
                                        series = chart.series,
                                        len = series.length,
                                        pieSerie = series[len - 1];
                                    //pieSerie.data[index].setVisible();
                                }
                            },
                            point: {
                                events: {
                                    click: function () {

                                        if (this.shapeType == "rect") {

                                            this.fromdate = filter.selectedWeek.fromDate;
                                            this.todate = filter.selectedWeek.toDate;
                                            if (filter.chartSection != "BarStatusChart") {
                                                filter.selectedWeek.fromDate = this.category;
                                                filter.selectedWeek.toDate = this.category;
                                            }
                                            this.type = type;

                                            var chartParam = {
                                                type: this.type,
                                                status: this.series.name,
                                                yaxis: this.y,
                                                fromdate: this.fromdate,
                                                todate: this.todate,
                                                chartfilter: filter
                                            };

                                            if (filter.selectedWeek.fromDate == "") {
                                                filter.selectedWeek.fromDate = this.fromdate;
                                                filter.selectedWeek.toDate = this.todate;
                                            }

                                            scope.statepath({ args: chartParam });
                                        }
                                    }
                                }
                            }
                        }
                    },
                    colors: colorArray,
                    labels: {
                        items: [{
                            style: {
                                left: '40px',
                                top: '8px',
                                color: 'black'
                            }
                        }]
                    },
                    series: comboSeries,
                    tooltip: {
                        formatter: function () {
                            var s;
                            if (this.point.name) { // the pie chart
                                s = '' + this.point.name + ': ' + this.y;
                            } else {
                                s = this.x +'<br/>' + this.series.name + ': ' + this.y;
                            }
                            return s;
                        }
                    }
                }

                function formatter(arg) {
                    return arg.y > 0 ? arg.y : null;
                }

                $(element).highcharts(chartConfig);
            });
        }
    }
}

export default angular.module('directives.hcBarChart', [])
    .directive('hcBarChart', hcBarChart);
*/