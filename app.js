function getCharacters() {
	var xhr = new XMLHttpRequest();
	var url = "superheroes.php";
	xhr.open("POST", url, true);

	var searchQuery = document.getElementbyId("character-search").value;
	//console.log(search query);

	xhr.send(searchQuery);

	xhr.onreadystatechange = function () {
	  if(xhr.readyState == 4){
	    if (xhr.status == 200){
	     var response = xhr.responseText;
	     var resultDiv = document.get ElemenyById("result");

	     var resultString = "<br>" + "<br>" + "<br>" + "RESULT" + "<br>" + "<hr>" + "<br>";
	     resultDiv.innerHTML = "<p>" + resultString + "</p>" + response;

	   } else{
	     console("An error was detected")
	   }
	}
  }
}