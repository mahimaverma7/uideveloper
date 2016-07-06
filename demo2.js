

function addText()
{
    var input1 = document.getElementById('inputTask').value;
    var input2 = document.getElementById('inputtime').value;
    var input3 = document.getElementById('inputdate').value;
    var input4 = document.getElementById('inputcolor').value;

    var node=document.createElement("p");
    var textnode=document.createTextNode(input1 + input2 + input3 + input4);

    node.appendChild(textnode);
    document.getElementById('addTask').appendChild(node);

    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    node.appendChild(removeTask);

    removeTask.addEventListener('click', function(e)
        {node.parentNode.removeChild(node);
                                         });


}
