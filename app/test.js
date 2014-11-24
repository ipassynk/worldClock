'use strict';

describe('worldClock', function() {
  beforeEach(function() { module('myApp'); });

  describe('world clock controller', function(){
    it('should', inject(function($controller) {
      var view1Ctrl = $controller('wcClockCtrl');
      expect(view1Ctrl).toBeDefined();
    }));
  });

  describe('getClockOffset', function(){
    it('should returns date', inject(function(wcClockService) {
      var d = wcClockService.getClockOffset(0);
      expect(d).not.toBeNull();
    }));

    it('should zero offset returns the same hours', inject(function(wcClockService) {
      wcClockService.setClock(new Date('2014-11-11'));
      var d = wcClockService.getClockOffset(0);
      expect(d.getHours()).toBe(wcClockService.clock.getHours());
    }));

    it('should 1 offset returns one hour difference', inject(function(wcClockService) {
      wcClockService.setClock(new Date('2014-11-11'));
      var d = wcClockService.getClockOffset(1);
      expect(d.getHours()).toBe(wcClockService.clock.getHours() + 1);
    }));
  });
});