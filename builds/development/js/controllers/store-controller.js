/**
 * Created by hongbojing on 12/15/15.
 */
(function() {
    'use strict';

angular
    .module('gemStore')
    .controller('StoreController', StoreController);

StoreController.$inject = ['productData'];

function StoreController(productData) {
    var vm = this;
    vm.productData = productData;
    vm.products = [];

    activeApp();

    function activeApp() {
        return getProductsData().then(function() {
            console.info('get the data for the products');
        });
    }

    function getProductsData() {
        return productData.getProductData()
            .then(function(results){
                vm.products = results.data;
                return vm.products;
            });
    }

}

})();
