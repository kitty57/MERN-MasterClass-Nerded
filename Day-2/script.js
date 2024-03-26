function addDetails() {
    const name = document.getElementById("input-box1").value;
    const contact = document.getElementById("input-box2").value;
    const membership = document.getElementById("input-box3").value;
    
    const container = document.getElementById("div-container");

    var div = document.createElement('div');
    div.classList.add('registration-details');
    
    let nameItem = document.createElement('p');
    nameItem.textContent = 'Name: ' + name; 
    let contactItem = document.createElement('p');
    contactItem.textContent = 'Contact: ' + contact;
    let membershipItem = document.createElement('p');
    membershipItem.textContent = 'Membership: ' + membership;
    let btn=document.createElement('button');
    btn.textContent='Delete';
    btn.addEventListener('click', function() {
        container.removeChild(div);
    });
    div.appendChild(nameItem);
    div.appendChild(contactItem);
    div.appendChild(membershipItem);
    div.appendChild(btn);
    container.appendChild(div);
    document.getElementById("input-box1").value='';
    document.getElementById("input-box2").value='';
    document.getElementById("input-box3").value='';  
}

