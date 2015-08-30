var switcher=function(node_list){
	var boxes=node_list;
	for (var i=0;i <boxes.length;i++){
		foo(boxes[i]);
	}
	function foo(box){
		var tabs=box.querySelectorAll(".menu li"),
		    contents=box.querySelectorAll(".content .item");
		for (var i=0;i<tabs.length;i++){
			(function(j){
				tabs[j].addEventListener("mouseover" , function(){
					for (var k=0;k< tabs.length;k++){
					tabs[k].className="title_base";
					contents[k].style.display="none";
				}
					tabs[j].className="title_over";
					contents[j].style.display="block";
				})
			})(i)
		}
	}
}
var node_list=document.querySelectorAll(".left-box");
switcher(node_list);
