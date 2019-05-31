//Opening connection
let contDiv = document.querySelector(".parent");


var requestBooks = new XMLHttpRequest();
requestBooks.open('GET','https://www.googleapis.com/books/v1/volumes?q=potter',true);

requestBooks.onload = function(){
  var data = JSON.parse(this.response);
	console.log(data); 



if(requestBooks.status >=200 && requestBooks.status<400){

data.items.forEach(bookItems=>{

const bookCover = document.createElement('div');
const bookCoverImg = document.createElement('img');
bookCoverImg.src=bookItems.volumeInfo.imageLinks.thumbnail;

bookCover.setAttribute('class','book-cover');
bookCover.appendChild(bookCoverImg)



const bookDetails = document.createElement('div');
bookDetails.setAttribute('class','book-details');

const h3 = document.createElement('h3');
h3.textContent = bookItems.volumeInfo.title;
bookDetails.appendChild(h3);


const desc = document.createElement('p');
desc.textContent = bookItems.volumeInfo.description;
bookDetails.appendChild(desc);





let bookDetailsCont = document.createElement('div');
bookDetailsCont.setAttribute('class','book-details-cont');
contDiv.appendChild(bookDetailsCont);
 
 bookDetailsCont.appendChild(bookCover);
 bookDetailsCont.appendChild(bookDetails);
 
 
     

})

		 
 
      


}
else{
console.log("My God! Its an Error")
}
	
}

requestBooks.send();
