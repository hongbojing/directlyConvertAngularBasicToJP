/**
 * Created by hongbojing on 12/16/15.
 */
(function() {
    'use strict';

angular
    .module('gemStore')
    .controller('ReviewController', ReviewController);

function ReviewController() {
    var vm = this;
    vm.review = {};
    vm.addReview = function(product){
        vm.review.createdOn = Date.now();
        product.reviews.push(vm.review);
        vm.review = {};
    };
}

})();

