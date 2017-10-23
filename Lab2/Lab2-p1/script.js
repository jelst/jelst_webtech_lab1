var fruitArray = ["Apple", "Banana", "Orange", "Peach", "Plum"];

for (var i = 0; i < fruitArray.length; i++) {
    
    var node = document.createElement("LI");
    var text = document.createTextNode(fruitArray[i]);
    
    node.appendChild(text);
    
    document.getElementById("fruits").appendChild(node);
}