var id;
var text;
var inner_div_id;
var counter=0;
var result;

$(document).ready(function() {

  
   $( "#AC" ).click(function() {
  $("#input").empty();
});

 $(".keys").click(function() {
     id=$(this).attr('id');

     if(id==="AC"){
        $('#input').empty();
     }
      else if(id==='CE'){
        var temp_arr=[];
        text=document.getElementById('input').innerHTML;
        temp_arr.push(text.lastIndexOf('%'));
        temp_arr.push(text.lastIndexOf('/'));
        temp_arr.push(text.lastIndexOf('*'));
        temp_arr.push(text.lastIndexOf('+'));
        temp_arr.push(text.lastIndexOf('-'));

        var max=Math.max.apply(Math, temp_arr);

         text=text.slice(0,max);
         document.getElementById('input').innerHTML=text;
     }
     else if(id==="="){

        text=document.getElementById('input').innerHTML;
        var i=text.search(/[\+\/\-\*\%]/gi);
        alert(i);
        while(text.length>0){

        }
       
     }

     
     else if(((Number(id)>=0)&&(Number(id)<=9))||(id==='+')||(id==='-')||(id==='*')||(id==='/')||(id==='%')){
        counter+=1;
        if( counter===1){
            document.getElementById('input').innerHTML=id;

        }
        else if(counter>=1){
            text=document.getElementById('input').innerHTML;
            text+=id;
            document.getElementById('input').innerHTML=text;
        }
     }
     else if(id==='dot'){
        counter+=1;
        if( counter===1){
            document.getElementById('input').innerHTML='.';

        }
        else if(counter>=1){
            text=document.getElementById('input').innerHTML;
            text+='.';
            document.getElementById('input').innerHTML=text;
        }
     }

});

});