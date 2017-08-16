window.addEventListener("load", function(){

var like = document.getElementsByClassName('like')[0];
var unlike = document.getElementsByClassName("unlike")[0];
var comment = document.getElementsByClassName('comment')[0];
var likeCount = document.getElementsByClassName("like_count")[0].getAttribute("data-likes");
likeCount = Number(likeCount);
var replies_link = document.getElementsByClassName('replies_link');
var comment_info = document.getElementsByClassName('comment__info');
var prof = document.getElementsByClassName('media__info');
var modal = document.getElementsByClassName('modal')[0];

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

//Closes the modal
document.getElementsByClassName("modal__close")[0].addEventListener('click', function(){
	modal.style.display = "none";
});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Moves focus to textarea
comment.onclick = function(event){
	if (event.target == comment){
		document.querySelector('textarea').focus();
	}
};

//Shows the modal
for(var i = 0; i<prof.length; i++)
prof[i].childNodes[1].addEventListener('click', function(){
		var friends = 0
		document.getElementsByClassName("modal__title")[0].innerHTML = "" + prof[i].childNodes[1].innerHTML + "";
		document.getElementsByClassName("modal__body")[0].innerHTML = "" + prof[i].childNodes[1].innerHTML + " has " + friends + " friends.";
		modal.style.display = "block";
});

//Show Comments
for(var i = 0; i<comment_info.length; i++){
	comment_info[i].childNodes[1].addEventListener('click', function(){
		if (this.innerHTML == "Unlike"){
			this.parentNode.childNodes[5].innerHTML = "2 likes";
			this.innerHTML = "Like";
		}
		else {
			this.parentNode.childNodes[5].innerHTML = "3 likes";
			this.innerHTML = "Unlike";
		}
	});
	
}

// Show Replies
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