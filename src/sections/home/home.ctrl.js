'use strict';
angular
    .module('app.core', ['ui.bootstrap'])
    .controller('HomeController', function ($scope, $uibModal, PageValues) {
        //Set page title and description
        PageValues.title = "HOME";
        PageValues.description = "Learn AngularJS using best practice real world examples.";
        //Setup view model object
        var vm = this;
        $scope.showdetail = function (args) {
            console.log(args);
            var modalInstance = $uibModal.open({
                templateUrl: 'sections/home/modal.tpl.html',
                scope: $scope, //passed current scope to the modal
                controller: 'ChartDrilController', //passed current scope to the modal
                size: 'lg'
            });
        }

        $scope.showdetailpie = function (args) {
            console.log(args);
        }

        $scope.data1 = {
            data: [{
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
            ],
            title: "Refining & Supply (Org Lvl 1) Participation by Org Lvl 2 - 6",
            subtitle: "(With Participation Type Detail)",
            axes: [{
                    name: "org2",
                    type: "categoryX",
                    label: "org2",
                    title: "Emp Org2",
                    gap: 0.3,
                },
                {
                    name: "Volume",
                    type: "numericY",
                    title: "Count of ID"
                }
            ],
            series: [{
                name: "Member_Only",
                title: "Member Only",
                type: "stackedFragment",
                showTooltip: true,
                tooltipTemplate: "Member Only",
                valueMemberPath: "Member_Only"
            }, {
                name: "Leadership_Role",
                title: "Leadership Role",
                type: "stackedFragment",
                showTooltip: true,
                tooltipTemplate: "Leadership Role",
                valueMemberPath: "Leadership_Role"
            }, {
                name: "Committee Member",
                title: "Committee Member",
                showTooltip: true,
                tooltipTemplate: "Committee Member",
                type: "stackedFragment",
                valueMemberPath: "Committee_Member"
            }],
            name: "parent",
            xAxis: "org2",
            yAxis: "Volume",
            legend: "legend0"
        };

        $scope.data2 = {
            data: [{
                    "org2": "KEEP", //Chemical
                    "Member_Only": 2,
                    "Leadership_Role": 189,
                    "Committee_Member": 359,
                },
                {
                    "org2": "NEW", //Fuels_Lubricants
                    "Member_Only": 0,
                    "Leadership_Role": 56,
                    "Committee_Member": 87,
                },
                {
                    "org2": "NEW_ROLE", //Refining_Supply
                    "Member_Only": 0,
                    "Leadership_Role": 0,
                    "Committee_Member": 10,
                },
                {
                    "org2": "Reject", //Refining_Supply
                    "Member_Only": 0,
                    "Leadership_Role": 0,
                    "Committee_Member": 1,
                },
                {
                    "org2": "Remove", //Refining_Supply
                    "Member_Only": 0,
                    "Leadership_Role": 0,
                    "Committee_Member": 0,
                },
                {
                    "org2": "Review", //Refining_Supply
                    "Member_Only": 0,
                    "Leadership_Role": 0,
                    "Committee_Member": 0,
                },
            ],
            title: "Refining & Supply (Org Lvl 1) by Request Type",
            subtitle: "(With Participation Type Detail)",
            axes: [{
                    name: "org2",
                    type: "categoryX",
                    label: "org2",
                    title: "pAction",
                    gap: 1,
                },
                {
                    name: "Volume",
                    type: "numericY",
                    title: "Count of ID"
                }
            ],
            series: [{
                name: "Member_Only",
                title: "Member Only",
                type: "stackedFragment",
                showTooltip: true,
                tooltipTemplate: "Member Only",
                valueMemberPath: "Member_Only"
            }, {
                name: "Leadership_Role",
                title: "Leadership Role",
                type: "stackedFragment",
                showTooltip: true,
                tooltipTemplate: "Leadership Role",
                valueMemberPath: "Leadership_Role"
            }, {
                name: "Committee Member",
                title: "Committee Member",
                showTooltip: true,
                tooltipTemplate: "Committee Member",
                type: "stackedFragment",
                valueMemberPath: "Committee_Member"
            }],
            name: "parent",
            xAxis: "org2",
            yAxis: "Volume",
            legend: "legend1"
        };

        $scope.data3 = {
            data: [{
                    "country": "Norway",
                    "Member_Only": 0,
                    "Leadership_Role": 0,
                    "Committee_Member": 2,
                },
                {
                    "country": "Singapore",
                    "Member_Only": 2,
                    "Leadership_Role": 4,
                    "Committee_Member": 7,
                },
                {
                    "country": "Thailand",
                    "Committee_Member": 5,
                    "Leadership_Role": 0,
                    "Member_Only": 0,
                },
                {
                    "country": "The_Netherlands",
                    "Committee_Member": 2,
                    "Leadership_Role": 1,
                    "Member_Only": 0,
                },
                {
                    "country": "Turkey",
                    "Committee_Member": 3,
                    "Leadership_Role": 1,
                    "Member_Only": 0,
                },
                {
                    "country": "Egypt",
                    "Committee_Member": 20,
                    "Leadership_Role": 1,
                    "Member_Only": 0,
                },
                {
                    "country": "Europe",
                    "Committee_Member": 9,
                    "Leadership_Role": 0,
                    "Member_Only": 0,
                },
                {
                    "country": "France",
                    "Committee_Member": 4,
                    "Leadership_Role": 2,
                    "Member_Only": 0,
                },
                {
                    "country": "Germany",
                    "Committee_Member": 9,
                    "Leadership_Role": 0,
                    "Member_Only": 0,
                },
                {
                    "country": "Italy",
                    "Committee_Member": 1,
                    "Leadership_Role": 1,
                    "Member_Only": 0,
                },
                {
                    "country": "Netherlands",
                    "Committee_Member": 2,
                    "Leadership_Role": 1,
                    "Member_Only": 0,
                },
                {
                    "country": "New_Zealand",
                    "Committee_Member": 1,
                    "Leadership_Role": 0,
                    "Member_Only": 0,
                },
                {
                    "country": "Australia",
                    "Committee_Member": 2,
                    "Leadership_Role": 4,
                    "Member_Only": 0,
                },
                {
                    "country": "Belgium",
                    "Committee_Member": 7,
                    "Leadership_Role": 2,
                    "Member_Only": 0,
                },
                {
                    "country": "CA",
                    "Committee_Member": 0,
                    "Leadership_Role": 2,
                    "Member_Only": 0,
                },
                {
                    "country": "Canada",
                    "Committee_Member": 13,
                    "Leadership_Role": 12,
                    "Member_Only": 0,
                },
                {
                    "country": "China",
                    "Committee_Member": 1,
                    "Leadership_Role": 0,
                    "Member_Only": 0,
                },
                {
                    "country": "Dubai",
                    "Committee_Member": 1,
                    "Leadership_Role": 0,
                    "Member_Only": 0,
                },
                {
                    "country": "United_Kingdom",
                    "Member_Only": 0,
                    "Leadership_Role": 0,
                    "Committee_Member": 18,
                },
                {
                    "country": "United_States",
                    "Member_Only": 0,
                    "Leadership_Role": 22,
                    "Committee_Member": 63,
                },
                {
                    "country": "USA",
                    "Member_Only": 0,
                    "Leadership_Role": 2,
                    "Committee_Member": 3,
                },
                {
                    "country": "blank",
                    "Member_Only": 0,
                    "Leadership_Role": 188,
                    "Committee_Member": 293,
                },
            ],
            title: "Refining & Supply(Org Lvl 1) TAIG Geographical Profile",
            // subtitle: "The top five Total Primary Energy producers",
            axes: [{
                name: "country",
                type: "categoryY",
                label: "country",
                title: "Country",
                gap: 1,
                labelMargin: 0,
                interval: 1

            }, {
                name: "Volume",
                type: "numericX",
                title: "pRole"
            }],
            // axes: [{
            //         name: "org2",
            //         type: "categoryX",
            //         label: "org2",
            //         title: "org2",
            //         gap: 1,
            //     },
            //     {
            //         name: "Volume",
            //         type: "numericY",
            //         title: "Quadrillion Btu"
            //     }
            // ],
            series: [{
                name: "Member_Only",
                title: "Member Only",
                type: "stackedFragment",
                showTooltip: true,
                tooltipTemplate: "Member Only",
                valueMemberPath: "Member_Only"
            }, {
                name: "Leadership_Role",
                title: "Leadership Role",
                type: "stackedFragment",
                showTooltip: true,
                tooltipTemplate: "Leadership Role",
                valueMemberPath: "Leadership_Role"
            }, {
                name: "Committee Member",
                title: "Committee Member",
                showTooltip: true,
                tooltipTemplate: "Committee Member",
                type: "stackedFragment",
                valueMemberPath: "Committee_Member"
            }],
            name: "parent",
            xAxis: "Volume",
            yAxis: "country",
            legend: "legend2"
        };

        $scope.data4 = {
            data: [{
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
            ],
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
                name: "Committee Member",
                title: "Committee Member",
                showTooltip: true,
                tooltipTemplate: "Committee Member",
                type: "stackedFragment",
                valueMemberPath: "Committee_Member"
            }],
            name: "parent",
            xAxis: "org2",
            yAxis: "Volume",
            legend: "legend3"
        };
    });