function textEntered(event) {
    
    if (event.which == 13 || event.keyCode == 13) {
        
        for (var i = 0; i < document.getElementById("fruits").getElementsByTagName("LI").length; i++) {
            if (document.getElementById("fruits").getElementsByTagName("LI")[i].textContent == document.getElementById("newfruit").value) {
                document.getElementById("fruits").removeChild(document.getElementById("fruits").getElementsByTagName("LI")[i]);
                var isOk = true;
                break;
            }
        }
        if (isOk) {
            var node = document.createElement("LI");
            var textNode = document.createTextNode(document.getElementById("newfruit").value);
            node.appendChild(textNode);
            document.getElementById("basket").appendChild(node);
        }
    }
}