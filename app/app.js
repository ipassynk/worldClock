
  angular.module('myApp', [])
      .factory('wcClockService', wcClockService)
      .controller('wcClockCtrl', wcClockCtrl);

  function wcClockCtrl(wcClockService) {
    var vm = this;

    vm.clock = wcClockService.clock;
    vm.cities = wcClockService.cities;
    vm.getClockOffset = wcClockService.getClockOffset;
    vm.city = wcClockService.city;

    vm.setTorontoTime = function () {
      if (vm.newClock) {
        var s = vm.newClock.split(':');
        var d = new Date();
        d.setHours(s[0]);
        d.setMinutes(s[1]);
        d.setSeconds(s[2]);
        wcClockService.setClock(d);
        vm.clock = d;
      }
    };
  };

  function wcClockService($interval) {
    var tickInterval = 5000;
    var cities = [{name: "London", offset: -6}, {name: "Sydney", offset: -13}];
    var interval;

    function setClock(clock) {
      service.clock = clock;
      start();
    };

    function getClockOffset(offset) {
      var tm = new Date(service.clock);
      tm.setHours(tm.getHours() + offset);
      return tm;
    };

    function start() {
      var tick = function () {
        var tm = service.clock;
        tm.setSeconds(tm.getSeconds() + tickInterval / 1000);
      };

      if (interval) {
        $interval.cancel(interval);
        interval = null;
      }
      interval = $interval(tick, tickInterval);
    };

    var service = {
      city: "Toronto",
      clock: new Date(),
      cities: cities,
      getClockOffset: getClockOffset,
      setClock: setClock
    };

    start();
    return service;
  };



