var projecstdiv=document.getElementById("project");
for(let i=0 ;i<project.length ;i++){
    var currentpro =project[i];
    //div
    var projectdiv = document.createElement("div");
    var divstyle =document.createAttribute("style");
    divstyle.value="display: inline-block; width:300px; margin:10px; ";
    projectdiv.setAttributeNode(divstyle);
    //h3
    var title = document.createElement("h3");
   var titlenode= document.createTextNode(currentpro.title);
   title.appendChild(titlenode);


   //img
   var image = document.createElement("img");
   var source =document.createAttribute("src");
   source.value="./image/" + currentpro.img;
   image.setAttributeNode(source);
   var imgstyle =document.createAttribute("style");
   imgstyle.value="width:180px; height:200px;";
   image.setAttributeNode(imgstyle);


   //p
   var p = document.createElement("p");
   var pnode= document.createTextNode(currentpro.description);
   p.appendChild(pnode);

   projectdiv.appendChild(title);
   projectdiv.appendChild(image);
   projectdiv.appendChild(p);


   projecstdiv.appendChild(projectdiv);
}