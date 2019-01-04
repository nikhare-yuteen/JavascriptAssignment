var data = [
              {
                "id": 1,
                "first_name": "Hermie",
                "last_name": "Jayes",
                "email": "hjayes0@vistaprint.com",
                "gender": "Male",
                "ip_address": "169.203.15.127"
              },
              {
                "id": 2,
                "first_name": "Abbie",
                "last_name": "MacCarter",
                "email": "amaccarter1@jimdo.com",
                "gender": "Male",
                "ip_address": "119.175.23.82"
              },
              {
                "id": 3,
                "first_name": "Veda",
                "last_name": "Rowbrey",
                "email": "vrowbrey2@reuters.com",
                "gender": "Female",
                "ip_address": "230.19.88.209"
              },
              {
                "id": 4,
                "first_name": "Allyce",
                "last_name": "Antham",
                "email": "aantham3@usnews.com",
                "gender": "Female",
                "ip_address": "176.52.143.78"
              },
              {
                "id": 5,
                "first_name": "Dunstan",
                "last_name": "Tims",
                "email": "dtims4@wordpress.org",
                "gender": "Male",
                "ip_address": "69.204.9.113"
              },
              {
                "id": 6,
                "first_name": "Tait",
                "last_name": "Gove",
                "email": "tgove5@parallels.com",
                "gender": "Male",
                "ip_address": "178.136.69.74"
              },
              {
                "id": 7,
                "first_name": "Ax",
                "last_name": "Pratton",
                "email": "apratton6@typepad.com",
                "gender": "Male",
                "ip_address": "30.150.113.66"
              },
              {
                "id": 8,
                "first_name": "Alyssa",
                "last_name": "Forster",
                "email": "aforster7@google.cn",
                "gender": "Female",
                "ip_address": "62.52.210.139"
              },
              {
                "id": 9,
                "first_name": "Leontyne",
                "last_name": "Kee",
                "email": "lkee8@desdev.cn",
                "gender": "Female",
                "ip_address": "15.193.192.118"
              },
              {
                "id": 10,
                "first_name": "Cash",
                "last_name": "Geal",
                "email": "cgeal9@xinhuanet.com",
                "gender": "Male",
                "ip_address": "118.138.206.200"
              }
          ];
  function load() {
       // var mydata = JSON.parse(data);
       console.log(data);
       // alert(data.length);
       var list = document.getElementById('data');
       var dropper = document.getElementById('dropper');
       for(var i = 0;i < data.length; i++)
       {
          list.innerHTML = list.innerHTML + "<div class='inner' draggable='true' ondragstart='drag(event)' id="+data[i].id+">"+ data[i].first_name +" "+data[i].last_name +"</div>";
          dropper.innerHTML = dropper.innerHTML + "<div class='drag' ondragover='allowDrop(event)' ondrop='drop(event)' ondragleave='removeStyle(event)'' id="+data[i].id+"></div>";
       }
   }
   function drag(e){
      e.dataTransfer.setData("text", e.target.id);

      // var drag = document.querySelector('.drag');
      // console.log(drop.getElementsByClassName('drag'));
      // if (e.target.hasChildNodes()) {
      //   return false;
      // }
      // else{
      //
      // }
   }
   function allowDrop(e) {
      e.preventDefault();
      e.target.style.background = '#DAC78F';
      // e.target.css('background-color','#F00');
      // $(ev.target).css('background-color','#F00');
   }
   function drop(e) {
     if (e.target.hasChildNodes()) {
       return false;
     }
     else{
       // e.preventDefault();
       var data = e.dataTransfer.getData("text");
       var paragraph = document.createElement("p");
       paragraph.className = 'close';
       paragraph.setAttribute('onclick','remove(event);');
       var text = document.createTextNode("X");
       var close = paragraph.appendChild(text);

       // console.log(document.getElementById(data).innerHTML);
       document.getElementById(data).classList.remove ("inner");
       document.getElementById(data).classList.add("text");
       // document.getElementById(data).appendChild(close);
       e.target.appendChild(document.getElementById(data));
       e.target.appendChild(paragraph);
       // e.target.appendTextNode(document.getElementById(data));
     }
    }
    function removeStyle(e){
        e.target.removeAttribute('style');
    }
    function remove(e){
      // alert("hi");
      var list = document.getElementById('data');
      var node = e.target.parentElement;
      var child = node.firstElementChild.getAttribute('id');
      child = child - 1;
      // console.log(child);
      while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
      }
      // node.removeChild(node.childNodes[0]);
      // node.removeChild(node.childNodes[1]);
      // console.log();
      list.innerHTML = list.innerHTML + "<div class='inner' draggable='true' ondragstart='drag(event)' id="+data[child].id+">"+ data[child].first_name +" "+data[child].last_name +"</div>";;
      node.removeAttribute('style');
    }
