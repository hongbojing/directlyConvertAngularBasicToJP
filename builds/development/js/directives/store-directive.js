/**
 * Created by hongbojing on 12/16/15.
 */
(function() {
    'use strict';

angular
    .module('gemStore')
    .directive('productGallery', productGallery)
    .directive('productTabs', productTabs)
    .directive('productDescription', productDescription)
    .directive('productSpecs', productSpecs)
    .directive('productReviews', productReviews)
;

function productGallery() {
    return {
        restrict: 'E',
        templateUrl:'partials/directives/product-gallery.html',
        controller: 'GalleryController',
        controllerAs:'galleryCtrl'
    }
}

function productTabs() {
    return {
        restrict: 'E',
        templateUrl:'partials/directives/product-tabs.html',
        controller: 'TabController',
        controllerAs:'tabCtrl'
    }
}

function productDescription() {
    return {
        restrict: 'E',
        templateUrl:'partials/directives/product-description.html'
    };
}

function productSpecs() {
    return {
        restrict: 'E',
        templateUrl:'partials/directives/product-specs.html'
    };
}

function productReviews() {
    return {
        restrict: 'E',
        templateUrl:'partials/directives/product-reviews.html'
    };
}

})();
