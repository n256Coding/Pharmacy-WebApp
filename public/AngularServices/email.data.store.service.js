/**
 * Created by Nishan on 5/1/2017.
 */
angular.module('mainModule').factory('EmailDataStore', function () {
    var stockData = [];
    function setData(stock) {
        stockData = stock;
    }
    function getData() {
        return stockData;
    }

    return{
        set: setData,
        get: getData
    }
});