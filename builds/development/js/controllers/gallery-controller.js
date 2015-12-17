/**
 * Created by hongbojing on 12/16/15.
 */
(function() {
    'use strict';

angular
    .module('gemStore')
    .controller('GalleryController', GalleryController);

function GalleryController() {
    var vm = this;
    vm.current = 0;
    vm.setCurrent = function(param){
        if(param){
            vm.current = param;
        }else{
            vm.current = 0;
        }
    };
}

})();
