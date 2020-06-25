
let myLibrary = [];

function Book(title,author,pages,status)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function removeCard(e)
{
    let myCard = e.target.parentNode.parentNode.parentNode;
    myCard.remove();
}

function toggleState(e)
{
    let btn = e.target;
    if(btn.innerHTML === "Yes")
    {
        btn.innerHTML = "No";
        btn.style.backgroundColor = "red";
    }
    else
    {
        btn.innerHTML = "Yes";
        btn.style.backgroundColor = "rgb(39, 161, 39)";
    }
}

function closeModal()
{
    let closeButtton = document.querySelector('.modal-footer .btn-secondary');
    closeButtton.click();
}

function insertBefore(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode);
}

function fillCard(title,author,pages,status)
{
    let new_card = document.querySelector(".template").cloneNode(true);
    let library_container = document.querySelector('.library-container');
    let last_card = document.querySelector(".last-card");


    new_card.querySelector("h5").innerHTML = title;
    new_card.querySelector(".author-name").innerHTML = author;
    new_card.querySelector(".pages-count").innerHTML = pages+" pages book";
    new_card.querySelector(".toggle-state").innerHTML = status;

    let statusButton = new_card.querySelector(".toggle-state");
    if(status === "No")
    {
        statusButton.style.backgroundColor = "red";
    }

    statusButton.addEventListener('click',toggleState);

    let removeButton = new_card.querySelector('.remove-btn');
    removeButton.addEventListener('click',removeCard);

    new_card.classList.remove('template');

    insertBefore(new_card,last_card);

}

function formValidation()
{   
    let valid = true;

    let title = document.querySelector('#title').value;
    
    let emptyArea = document.querySelector('#empty-title');
    if(title === "")
    {   
        emptyArea.innerHTML = "Please enter the title";
        emptyArea.style.color = "red";
        valid = false;
        return valid;
    }
    else
    {
        emptyArea.innerHTML = "";
    }

    let author = document.querySelector('#author').value;
    
    emptyArea = document.querySelector('#empty-author');
    if(author === "")
    {   
        emptyArea.innerHTML = "Please enter name of the author";
        emptyArea.style.color = "red";
        valid = false;
        return valid;
    }
    else
    {
        emptyArea.innerHTML = "";
    }

    let pages = document.querySelector('#pages').value;
    emptyArea = document.querySelector('#empty-pages');
    if(pages === "")
    {   
        emptyArea.innerHTML = "Please enter a valid number";
        emptyArea.style.color = "red";
        valid = false;
        return valid;
    }
    else
    {
        emptyArea.innerHTML = "";
    }

    return valid;
}
function submit(e)
{   
    let formValid = formValidation();
    console.log(formValid)
    if(formValid === false)
    {
        return;
    }

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let status = "No";
    /*
        Check if book is already read.If user doesn't answer this 
        field, then default value of not read will be assigned.
    */

    let radioButtons = document.getElementsByName('status');

    for(i = 0; i < radioButtons.length; i++) 
    { 
        if(radioButtons[i].checked) 
        {
            status = radioButtons[i].value;
        }
    } 

    fillCard(title,author,pages,status);

    closeModal();

}


let submitButton = document.querySelector(".submitBtn");
submitButton.addEventListener('click',submit);

let statusButtons = document.querySelectorAll(".toggle-state");
statusButtons.forEach((btn) => {
    btn.addEventListener('click',toggleState);
}
);

let removeButtons = document.querySelectorAll(".remove-btn");
removeButtons.forEach((btn) => {
    btn.addEventListener('click',removeCard);
}
);
