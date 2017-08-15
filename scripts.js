window.addEventListener("load", function(){

var like = document.getElementsByClassName('like')[0];
var unlike = document.getElementsByClassName("unlike")[0];
var likeCount = document.getElementsByClassName("like_count")[0].getAttribute("data-likes");
likeCount = Number(likeCount);
var replies_link = document.getElementsByClassName('replies_link')[0];


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

replies_link.addEventListener('click', function(){
		
		document.getElementsByClassName('replies')[0].style.display = "inline";
		
		
});




});