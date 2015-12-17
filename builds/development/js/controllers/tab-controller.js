/**
 * Created by hongbojing on 12/15/15.
 */
(function() {
    'use strict';

angular
    .module('gemStore')
    .controller('TabController', TabController);

function TabController() {
    /* define defaults */
    var vm = this;
    vm.tab = 1;

    /* define functions */
    vm.setTab = setTab;
    vm.isSet = isSet;

    function setTab(param) {
        vm.tab = param;
    }

    function isSet(param) {
        return vm.tab === param;
    }
}

})();
