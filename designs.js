function makeGrid() {
  var table=document.getElementById('GridID');
  table.innerHTML="";
  var rows=document.getElementById('HeightID').value;
  var cols=document.getElementById('WidthID').value;
  var tabledata='';
  for(var i=0;i<rows;i++){
      tabledata+='<tr>';
      for(var x=0;x<cols;x++){
          tabledata+='<td></td>'
          }
        tabledata+='</tr>';
      }
    table.innerHTML=tabledata; 
    AddEventForTD(); 
  }

function AddEventForTD(){
    var tds=document.getElementsByTagName('td');
    for(var i=0;i<tds.length;i++){
        tds[i].addEventListener("click",function(event){
            var currenttd=event.target;
            currenttd.style.backgroundColor=document.getElementById('ColorID').value;
            
        })
    } 
}

document.addEventListener('DOMContentloaded',function(){
    AddEventForTD()
})
 
  
  