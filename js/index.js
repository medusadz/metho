	function openList(n) {
	var list1 = document.getElementById("list1");
	var list2 = document.getElementById("list2");
	var list3 = document.getElementById("list3");
    list1.style.display = "none";
	list2.style.display = "none";
	list3.style.display = "none";
switch(n) {
    case '1':
      var list = list1;
        break;
    case '2':
      var list = list2;
        break;
    case '3':
      var list = list3;
        break;
}
    if (list.style.display == "none"){

        list.style.display = "block";
		
    }
	else{
        list.style.display = "none";
    }

}