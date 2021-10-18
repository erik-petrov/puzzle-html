function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    if (ev.target.tagName == "IMG"){ return false; }
    ev.preventDefault();
    var node = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(node));
    if(checkWin()){
        if (confirm("You've won.")){
            //тут мануально перезагружается страница. я так хочу.
            document.location.reload(true);
        } 
    }
}

function checkWin(){
    //берем все места для картинок
    var elements = document.getElementsByClassName("pic-placeholder");
    for (let i=0; i<12; i++){
        //если место нужное, то идем дальше, иначе либо ловим ошибку, либо неправильный слот.
        try{
            if (elements[i].firstChild.id == "img"+(i+1)){
                continue;
            } else { return false; }
        } catch (TypeError){
            return false;
        }
    }
    return true;
}