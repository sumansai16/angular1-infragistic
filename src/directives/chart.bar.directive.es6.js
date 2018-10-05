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
                
                var lastFiveYears = [{
                        "org2": "Chemical",
                        "Member_Only": 0,
                        "Leadership_Role": 1,
                        "Committee_Member": 10,
                    },
                    {
                        "org2": "Fuels_Lubricants",
                        "Member_Only": 0,
                        "Leadership_Role": 4,
                        "Committee_Member": 0,
                    },
                    {
                        "org2": "Refining_Supply",
                        "Member_Only": 2,
                        "Leadership_Role": 207,
                        "Committee_Member": 423,
                    },
                    {
                        "org2": "IOL",
                        "Member_Only": 0,
                        "Leadership_Role": 13,
                        "Committee_Member": 17,
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
                            name: "org2",
                            type: "categoryX",
                            label: "org2",
                            title: "org2",
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
                            xAxis: "org2",
                            yAxis: "Volume",
                            type: "stackedColumn",
                            outline: "transparent",
                            series: [{
                                name: "Member_Only",
                                title: "Member_Only",
                                type: "stackedFragment",
                                showTooltip: true,
                                tooltipTemplate: "Member_Only",
                                valueMemberPath: "Member_Only"
                            }, {
                                name: "Leadership_Role",
                                title: "Leadership_Role",
                                type: "stackedFragment",
                                showTooltip: true,
                                tooltipTemplate: "Leadership_Role",
                                valueMemberPath: "Leadership_Role"
                            }, {
                                name: "Committee_Member",
                                title: "Committee_Member",
                                showTooltip: true,
                                tooltipTemplate: "Committee_Member",
                                type: "stackedFragment",
                                valueMemberPath: "Committee_Member"
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