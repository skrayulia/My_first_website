var count = 0;
document.getElementById("myButton").onclick = function () 
{
    count++;
	if (count % 2 == 0) { //проверка на четность
		document.getElemetnById("demo").innerHTML = "" 
	} else {
		var img = document.createElement("img");
        img.src = "https://static.foxnews.com/foxnews.com/content/uploads/2018/09/puppypresent.jpg";
        document.getElementById("demo").appendChild(img);

	}
}
