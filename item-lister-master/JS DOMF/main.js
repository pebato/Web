let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

//addItem function
function addItem(e){
    e.preventDefault();
    
    let newItem = document.getElementById('item').value;
    
    let li = document.createElement('li');
    
    li.className = 'list-group-item';
    
    li.appendChild(document.createTextNode(newItem));

    let delbutton = document.createElement('button');

    delbutton.className = 'btn btn-danger btn-sm float-right delete';

    delbutton.appendChild(document.createTextNode('X'));

    li.appendChild(delbutton);

    itemList.appendChild(li);
}

//removeItem function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to delete this item?')){
            let li = e.target.parentElement;
            itemList.removeChild(li)   ;
        }
    }
}

//filterItems function
function filterItems(e){
    let text = e.target.value.toLowerCase();

    let items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        let itemName =  item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}
