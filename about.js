function aboutscroll(){
    var elmt=document.getElementById("aboutt");
    elmt.scrollIntoView();
    console.log("scrolling works so");
    run();
}

function run(){
    document.getElementsByClassName("knowl").hide;
    var lisst=[ "/root/about~$  getinfo.txt","/root/about~$    Name - Imon Kalyan Roy","/root/about~$  Age - 19",
    "/root/about~$    Currently - Studying","/root/about~$      College- Netaji Subhash Engineering College",
    "/root/about~$******************************************","/root/about~$******************************************"];
    for (i = 0; i < lisst.length; i++) {
        setTimeout(addElement(lisst[i]), 2000);
      }
}
function addElement (text) {
    console.log("all fine chief!");
    // create a new div element
    const newDiv = document.createElement("div");
    console.log(text);
    const newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);
    console.log("still okay?");
    var currentDiv = document.getElementById("aboutt");
currentDiv.appendChild(newDiv);
    console.log("victory");
  }
  