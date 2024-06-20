window.addEventListener("load", solve);

function solve() {


  // find all elements

  let mainElement = document.getElementById('hero');
  let backgroundImg = document.getElementById('back-img');
  let snowmanPreviewUL = document.querySelector('.snowman-preview');
  let snowListUl = document.querySelector('.snow-list');

  //snowman ifno
  let snowmanName = document.getElementById('snowman-name');
  let snowmanHeight = document.getElementById('snowman-height');
  let snowmanLocation = document.getElementById('location');
  let snowmanCreator = document.getElementById('creator-name');
  let snowmanSpecialAttribute = document.getElementById('special-attribute');
  let addBtn = document.querySelector('.add-btn');

  //create empty snowman object
  let snowman = {};

  addBtn.addEventListener('click', addFunction);

  function addFunction(event) {
    event.preventDefault();

    if (snowmanName.value === '' ||
      snowmanHeight.value === '' ||
      snowmanLocation.value === '' ||
      snowmanCreator.value === '' ||
      snowmanSpecialAttribute === '') {
      return;
    }

    debugger;
    // fill the snowman object with data
    snowman.name = snowmanName.value;
    snowman.height = snowmanHeight.value;
    snowman.location = snowmanLocation.value;
    snowman.creator = snowmanCreator.value;
    snowman.specialAttribute = snowmanSpecialAttribute.value;
    
   
    // create article container

    let snowmanInfoLi = document.createElement('li');
    let snowmanInfoArticle = document.createElement('article');
    //fill the article with the snowman data

    let nameParagraph = document.createElement('p');
    nameParagraph.textContent = `Name: ${snowman.name}`;
    snowmanInfoArticle.append(nameParagraph);
    let heightParagraph = document.createElement('p');
    heightParagraph.textContent = `Height: ${snowman.height}`;
    snowmanInfoArticle.append(heightParagraph);
    let locationParagraph = document.createElement('p');
    locationParagraph.textContent = `Location: ${snowman.location}`;
    snowmanInfoArticle.append(locationParagraph);
    let creatorParagraph = document.createElement('p');
    creatorParagraph.textContent = `Creator: ${snowman.creator}`;
    snowmanInfoArticle.append(creatorParagraph);
    let attributeParagraph = document.createElement('p');
    attributeParagraph.textContent = `Attribute: ${snowman.specialAttribute}`;
    snowmanInfoArticle.append(attributeParagraph);
    snowmanInfoLi.append(snowmanInfoArticle);
    

    // create btns container
    let btnContainer = document.createElement('div');
    let btnEdit = document.createElement('button');
    btn.setAttribute('class', 'edit-button');
    btnEdit.textContent = 'Edit';

    let btnNext = document.createElement('button');
    btnNext.setAttribute('class', 'next-button');
    btnNext.textContent = 'Next';

    btnContainer.append(btnEdit);
    btnContainer.append(btnNext);
    snowmanInfoLi.append(btnContainer);
    snowmanPreviewUL.append(snowmanInfoLi);

    // clear all formData from 

    snowmanName.value = '';
    snowmanHeight.value = '';
    snowmanLocation.value = '';
    snowmanCreator.value = '';
    snowmanSpecialAttribute.value = '';

    // disable add btn
    addBtn.disabled = 'true';


    // write Edit btn functionality

    btnEdit.addEventListener('click', editFunction);

    function editFunction() {
      // remove the li paragraph from the ul

      snowmanPreviewUL.removeChild(snowmanInfoLi);
      addBtn.disabled = false;

      snowmanName.value = snowman.name;
      snowmanHeight.value = snowman.height;
      snowmanLocation.value = snowman.location;
      snowmanCreator.value = snowman.creator
      snowmanSpecialAttribute.value = snowman.specialAttribute;
    }

    // write Next button functionality
    btnNext.addEventListener('click', nextFunction);
    
    function nextFunction() {
      //delete li element from snowman preview
      snowmanPreviewUL.removeChild(snowmanInfoLi);

      // create article container

    let snowmanListLi = document.createElement('li');
    let snowmanListArticle = document.createElement('article');
    //fill the article with the snowman data

    let nameParagraph = document.createElement('p');
    nameParagraph.textContent = `Name: ${snowman.name}`;
    snowmanListArticle.append(nameParagraph);
    let heightParagraph = document.createElement('p');
    heightParagraph.textContent = `Height: ${snowman.height}`;
    snowmanListArticle.append(heightParagraph);
    let locationParagraph = document.createElement('p');
    locationParagraph.textContent = `Location: ${snowman.location}`;
    snowmanListArticle.append(locationParagraph);
    let creatorParagraph = document.createElement('p');
    creatorParagraph.textContent = `Creator: ${snowman.creator}`;
    snowmanListArticle.append(creatorParagraph);
    let attributeParagraph = document.createElement('p');
    attributeParagraph.textContent = `Attribute: ${snowman.specialAttribute}`;
    snowmanListArticle.append(attributeParagraph);
    snowmanListLi.append(snowmanListArticle);
    let sendBtn = document.createElement('button');
    sendBtn.setAttribute('class', 'send-btn');


    }
  }
}



