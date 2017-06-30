/**
 * Created by Nishan on 5/20/2017.
 */
'use strict';

angular.module('mainModule').controller('drugRequestController', ['$scope', '$http', 'EmailDataStore', 'OrderInvoiceService',
    function ($scope, $http, EmailDataStore, OrderInvoiceService) {
        $http.get('/drugRequests/approved').then(function (data) {
            $scope.drugRequests = data.data;
            if($scope.drugRequests.length == 0){
                $scope.showSuccessMessage = true;
            }
        });

        $http.get('/drugs').then(function (data) {
            $scope.drugs = data.data;
        });

        $scope.supplierRequestList = [];
        $scope.addToSupplierRequest = function (drugRequest) {
            $scope.supplierRequestList.push(drugRequest);
            var indexOfDrugRequest = $scope.drugRequests.indexOf(drugRequest);
            $scope.drugRequests.splice(indexOfDrugRequest, 1);
        };

        $scope.removeFromSupplierRequest = function (drugRequest) {
            $scope.drugRequests.push(drugRequest);
            var indexOfDrugRequest = $scope.supplierRequestList.indexOf(drugRequest);
            $scope.supplierRequestList.splice(indexOfDrugRequest, 1);
        };

        $scope.setupEmailPage = function (emailData) {
            EmailDataStore.set(emailData);
            var invoice = {};
            invoice.supplier = $scope.supplierToSend.provider;

            var invoiceLineItems = [];
            for(var i=0; i<$scope.supplierRequestList.length; i++){
                invoiceLineItems.push({'drug_id':$scope.supplierRequestList[i].drug_id,
                    'drug_name':$scope.supplierRequestList[i].drug_name,
                    'qty':$scope.supplierRequestList[i].approved_quantity,
                    'drug_type':$scope.supplierRequestList[i].drug_type});
            }

            OrderInvoiceService.setOrder(invoice, invoiceLineItems);
        };
}]);