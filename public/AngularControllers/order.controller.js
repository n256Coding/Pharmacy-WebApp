/**
 * Created by Nishan on 6/28/2017.
 */
'use strict';

appModule.controller('OrderController', ['$scope', 'OrderInvoiceService',
    function ($scope, OrderInvoiceService) {
        $scope.orderDate = '';
        OrderInvoiceService.getAllOrders().then(function (orders) {
            $scope.orders = orders;
        });
        $scope.clearDate = function () {
            $scope.orderdate = '';
        };

        $scope.generatePdf = function () {
            /*var pdf = new jsPDF('p', 'pt', 'a4');
            pdf.canvas.height = 72 * 11;
            pdf.canvas.width = 72 * 8.5;
            html2pdf(document.getElementById('orderListTable'), pdf, function(pdf){
                pdf.output('dataurlnewwindow');
            });*/

            var pdf = new jsPDF(),
                source = document.getElementById('orderListTable');

            /*pdf.addHTML(
                source, 0, 0, {
                    pagesplit: true
                },
                function(dispose){
                    //pdf.save('orderList.pdf');
                    pdf.output('dataurlnewwindow');
                }
            );*/

            pdf.addHTML(source, {pagesplit: true}, function(dispose){
                    //pdf.save('orderList.pdf');
                    pdf.output('dataurlnewwindow');
                }
            );
        };

        $scope.printableView = function(divId) {
            var printContents = document.getElementById(divId).outerHTML;
            var popupWin = window.open('', '_blank', 'width=500,height=600');
            popupWin.document.open();
            popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="Styles/printFriendlyView.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
            popupWin.document.close();
        };


        $scope.exportAction = function (option) {
            switch (option) {
                case 'pdf': $scope.$broadcast('export-pdf', {});
                    break;
                case 'excel': $scope.$broadcast('export-excel', {});
                    break;
                case 'doc': $scope.$broadcast('export-doc', {});
                    break;
                case 'csv': $scope.$broadcast('export-csv', {});
                    break;
                default: console.log('no event caught');
            }
        };



        $scope.exportPDF = function () {
            return kendo.drawing.drawDOM($("#temp-container"),{

                paperSize: "A4",
                multiPage: true,
                margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "1cm" }
            })
                .then(function (group) {
                    // Render the result as a PDF file
                    return kendo.drawing.exportPDF(group);
                })
                .done(function (data) {
                    // Save the PDF file
                    kendo.saveAs({
                        dataURI: data,
                        fileName: "HR-Dashboard.pdf"
                    });
                });
        }

}]);


appModule.directive('exportTable', function(){
    var link = function ($scope, elm, attr) {
        $scope.$on('export-pdf', function (e, d) {
            elm.tableExport({ type: 'pdf', escape: false });
        });
        $scope.$on('export-excel', function (e, d) {
            elm.tableExport({ type: 'excel', escape: false });
        });
        $scope.$on('export-doc', function (e, d) {
            elm.tableExport({ type: 'doc', escape: false });
        });
        $scope.$on('export-csv', function (e, d) {
            elm.tableExport({ type: 'csv', escape: false });
        });
    };
    return {
        restrict: 'C',
        link: link
    }
});