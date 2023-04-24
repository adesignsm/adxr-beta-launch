import React from 'react';
import "./DarkMode.css";
import $ from "jquery";
import "jquery-ui-bundle";


const DarkMode = () => {

  $( ".change" ).on("click", function() { 
    if( $( "#logo-canvas canvas" ).hasClass( "dark" )) { 
        $( "#logo-canvas canvas" ).removeClass( "dark" ); 
        $( ".change" ).text( "OFF" ); 
    } else { 
        $( "#logo-canvas canvas" ).addClass( "dark" ); 
        $( ".change" ).text( "ON" ); 
    } 
}); 
  
  return (
    <>
      <button className="change">
        Dark Mode
      </button>
    </>
  )
}

export default DarkMode;

