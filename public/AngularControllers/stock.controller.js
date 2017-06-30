/**
 * Created by Nishan on 4/29/2017.
 */
angular.module('mainModule').controller('stockController', ['$scope', '$http', 'EmailDataStore', '$window',
    function ($scope, $http, EmailDataStore, $window) {

        $http.get('/stocks').then(function(stocks){
            $scope.stocks = stocks.data;
            //console.log(JSON.stringify(stocks.data));
        });

        $scope.getPDFView = function(){
            $http.get('/stocks/pdf', '', {responseType:'arraybuffer'}).then(function(pdfDoc){
            var pdfUrl = pdfDoc;
            window.open(pdfUrl);
            });
        }

        $scope.setEmailData = function (stock) {
            EmailDataStore.set(stock);
        }

        $scope.showPDF = function () {
            $window.open('AngularViews/pdfViewer.html');
        }
    }
]);