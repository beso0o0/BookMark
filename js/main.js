var bookMark = document.getElementById("siteNameInput");
var Website = document.getElementById("siteUrlInput");

var addNewBtn = document.getElementById('addnewbtn');
var fixedLayer = document.getElementById('fixedlayer');

var bookmarkList;

if (localStorage.getItem("listOfBookMarks") == null)
{
    bookmarkList = [];
}else{

    bookmarkList = JSON.parse(localStorage.getItem("listOfBookMarks"));

    displayBookMarks()
}

addNewBtn.addEventListener('click', function () {
  fixedLayer.style.bottom = 0;
  // if (submitBtn.innerHTML == "Edit") {
  //     submitBtn.innerHTML = "Submit";
  // }
})

btnClose.addEventListener('click', closeLayer)

function closeLayer() {
    fixedLayer.style.bottom = `100%`;
    cleanForm();
    ubdateArrs();
}

function addBookMarks() {
  var userInputs = { bookmarkName: bookMark.value, websiteUrl: Website.value };
 

  if ( bookMark.value == 0)
  {
      alert("Name is required")
  }else if(Website.value== 0)
  {

    alert("url is required")
  }
  else{
    bookmarkList.push(userInputs);

    localStorage.setItem("listOfBookMarks", JSON.stringify(bookmarkList));
    clear();
    displayBookMarks();
    closeLayer();
  }

  
}


function displayBookMarks() {
   

    var allPages = ``;
    for (var i = 0; i < bookmarkList.length; i++) {
      allPages += `
      <div class="page2 mb-5 mt-3 container">
      <div class="row">
      <div class="col-md-6 col-xs-12 ">
  <h2>${bookmarkList[i].bookmarkName}</h2>
  </div>
  <div class="col">
    <a href="${bookmarkList[i].websiteUrl}" target="_blank" class="btn btn-primary ">Visit</a>
    
    <button onclick="deletebookMark(${i})" class="btn btn-danger ">Delete</button>
  </div>
  
  </div>
  </div>
      
      `;
    }
  
    document.getElementById("addPages").innerHTML = allPages;
}

function clear()
{
    bookMark.value = ""
    Website.value = ""
}

function deletebookMark(index)
{
bookmarkList.splice(index,1);
displayBookMarks();
localStorage.setItem("listOfBookMarks", JSON.stringify(bookmarkList));

}



