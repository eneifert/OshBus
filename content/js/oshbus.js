(function($) {

var stops = [
        { left:1720, top:759, name:'Solomonto' }, 
        { left:1729, top:804, name:'Osh Muu' }, 
        { left:1736, top:850, name:'Arbanski - Kurmanjandatka' }, 
        { left:1707, top:824, name:'Arbanski - Aider Ata' },
        { left:1774, top:924, name:'Gorbanitsa' },
        { left:1920, top:1078, name:'Old Bridge' },
        { left:2024, top:1082, name:'Osh Tataan' },
      ];

  var route = {start: null, end: null};

  function showRoute(routes){
    if($('.bus-101').length == 0 && routes.start && routes.end){
      $('#OshMap').append($('<div>').addClass('bus-101'));
    }
  
  }

  function busStopClicked(busstop, route){
    if(!route.start){
      route.start = busstop;
      busstop.addClass('start');
    }
    else if(!route.end){
      route.end = busstop;
      busstop.addClass('end');      
    }
    
    showRoute(route);    
  }

  function addBusStops(){
    $.each(stops, function(i, el){
        $('#OshMap').append(  $('<div>')          
          .css({top: el.top + 'px', left: el.left + 'px'})
          .addClass('busstop-container')
          .append($('<div>')
            .addClass('busstop')
            .click(function(){ busStopClicked($(this), route)}))
          );                    
      });
  }

  //doc ready
  $(function() {
    

    // jQuery('#OshMap').draggable({ containment: [left, top, right, bottom] });
    $('#OshMap')
      .draggable({
        containment: [-1500, -1000, 0, 0]
      })      
      // .mousedown(function(e) {
      //   if (e.button == 2) {
      //     alert(e.offsetX + ' ' + e.offsetY);
      //     return false;
      //   }
      //   return true;
      // })
      ;

      addBusStops();
          
  });

}(jQuery));


