'use strict';

$(document).ready(function() {
  initializePage();
})

function initializePage(){
  $(".version_B_sessions").click(funcion(){ 
    woopra.track("version_B_sessions_click");
  })
  $(".version_B_course").click(funcion(){ 
    woopra.track("version_B_course"); 
  })
  $(".version_B_help").click(funcion(){
   woopra.track("version_B_help"); 
  })
  $(".version_B_map").click(funcion(){ 
    woopra.track("version_B_map"); 
  })
}
