'use strict';

/**
 * @ngdoc service
 * @name blipparApp.domEvents
 * @description
 * # domEvents
 * Factory in the blipparApp.
 */
angular.module('blipparApp')
  .factory('DomEvents', function(){
    return {
      trigger: function (element, eventName, bubbles, cancelable){
        var eventToTrigger;

        if (angular.isUndefined(bubbles)){
          bubbles = false;
        }

        if (angular.isUndefined(cancelable)){
          cancelable = false;
        }

        if(document.createEvent){
          ///TODO: very-very-very durty. REMAKE!!!
          try{
            eventToTrigger = new MouseEvent(eventName, {
              'view': window,
              'bubbles': bubbles,
              'cancelable': cancelable
            });
          } catch(e){
            eventToTrigger = document.createEvent('HTMLEvents');
            eventToTrigger.initEvent(eventName, bubbles, cancelable);
          }
        } else if(document.createEventObject){
          eventToTrigger = document.createEventObject();
          eventToTrigger.eventType = eventName;
        }

        eventToTrigger.eventName = eventName;
        if(element.dispatchEvent){
          element.dispatchEvent(eventToTrigger);
        } else if(element.fireEvent){
          element.fireEvent('on' + eventToTrigger.eventType, eventToTrigger);
        }
      }
    };
  });
