/* hover on the showcase2 icons*/
var fig1= document.querySelector(".showcase2 .c1");
var fig2= document.querySelector(".showcase2 .c2");
var fig3= document.querySelector(".showcase2 .c3");
var fig4= document.querySelector(".showcase2 .c4");

fig1.addEventListener('mouseover', function(e){
		var child_parent = fig1.getElementsByTagName("figure");
			var child = child_parent[0].getElementsByTagName("img");
			child[0].setAttribute("src","images/cup1+.png");
});

fig1.addEventListener('mouseout', function(e){
		var child_parent = fig1.getElementsByTagName("figure");
			var child = child_parent[0].getElementsByTagName("img");
			child[0].setAttribute("src","images/cup1.png");
});
/*********/
fig2.addEventListener('mouseover', function(e){
		var child_parent = fig2.getElementsByTagName("figure");
			var child = child_parent[0].getElementsByTagName("img");
			child[0].setAttribute("src","images/cup2+.png");
});

fig2.addEventListener('mouseout', function(e){
		var child_parent = fig2.getElementsByTagName("figure");
			var child = child_parent[0].getElementsByTagName("img");
			child[0].setAttribute("src","images/cup2.png");
});
/*********/
fig3.addEventListener('mouseover', function(e){
		var child_parent = fig3.getElementsByTagName("figure");
			var child = child_parent[0].getElementsByTagName("img");
			child[0].setAttribute("src","images/cup3+.png");
});

fig3.addEventListener('mouseout', function(e){
		var child_parent = fig3.getElementsByTagName("figure");
			var child = child_parent[0].getElementsByTagName("img");
			child[0].setAttribute("src","images/cup3.png");
});
/*********/
fig4.addEventListener('mouseover', function(e){
		var child_parent = fig4.getElementsByTagName("figure");
			var child = child_parent[0].getElementsByTagName("img");
			child[0].setAttribute("src","images/cup4+.png");
});

fig4.addEventListener('mouseout', function(e){
		var child_parent = fig4.getElementsByTagName("figure");
			var child = child_parent[0].getElementsByTagName("img");
			child[0].setAttribute("src","images/cup4.png");
});