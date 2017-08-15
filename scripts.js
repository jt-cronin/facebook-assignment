window.addEventListener("load", function(){

var like = document.getElementsByClassName('like')[0];
var unlike = document.getElementsByClassName("unlike")[0];
var likeCount = document.getElementsByClassName("like_count")[0].getAttribute("data-likes");
likeCount = Number(likeCount);
var replies_link = document.getElementsByClassName('replies_link');



like.addEventListener("click", function(){
		like.style.display = "none";
		unlike.style.display = "inline";
		likeCount = likeCount + 1;
		document.getElementsByClassName("like_count")[0].innerHTML = "" + likeCount + " likes"
});

unlike.addEventListener("click", function(){
		unlike.style.display = "none";
		like.style.display = "inline";
		likeCount = likeCount - 1;
		document.getElementsByClassName("like_count")[0].innerHTML = "" + likeCount + " likes";
});

for(var i = 0; i<replies_link.length; i++){
replies_link[i].addEventListener('click', function(){
		if (this.parentNode.nextElementSibling.style.display == "inline") {
		this.parentNode.nextElementSibling.style.display = "none";
		}
		else {
		this.parentNode.nextElementSibling.style.display = "inline";
		}
});
}



});