/**
 * Created by Nishan on 6/28/2017.
 */
appModule.factory('SupplierService', ['$http', function ($http) {
    function getSuppliers() {
        $http.get('suppliers/').then(function (output) {
            return output.data;
        });
    }
    return{
        getSuppliers : getSuppliers
    }
}]);