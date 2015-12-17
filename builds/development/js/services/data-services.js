/**
 * Created by hongbojing on 12/17/15.
 */
(function () {
    'use strict';

    angular
        .module('gemStore')
        .factory('productData', productData);

    productData.$inject = ['$http'];

    function productData($http) {
        return {
            getProductData: function() {
                return $http.get('data.json')
                    .success(function (results) {
                    })
                    .error(function (){
                        console.error('error from data-service file');
                    });
            }
        };
    }

})();
