'use strict';

$(document).ready(function() {
  initializePage();
})

function initializePage(){
  $("a.version_B_sessions").click(funcion(){ 
    woopra.track("version_B_sessions_click");
  })
  $("a.version_B_course").click(funcion(){ 
    woopra.track("version_B_course"); 
  })
  $("a.version_B_help").click(funcion(){
   woopra.track("version_B_help"); 
  })
  $("a.version_B_map").click(funcion(){ 
    woopra.track("version_B_map"); 
  })
}
