window.addEventListener("load", function(){

var like = document.getElementsByClassName('like')[0];
var unlike = document.getElementsByClassName("unlike")[0];
var comment = document.getElementsByClassName('comment')[0];
var likeCount = document.getElementsByClassName("like_count")[0].getAttribute("data-likes");
likeCount = Number(likeCount);
var replies_link = document.getElementsByClassName('replies_link');
var comment_info = document.getElementsByClassName('comment__info');
var prof = document.getElementsByClassName('profName');
var modal = document.getElementsByClassName('modal')[0];
var share = document.getElementsByClassName('share')[0];
var submit = document.querySelector('button');

//Main like and Unlike Buttons
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

//Moves focus to textarea
comment.addEventListener('click', function(e){
	document.querySelector('.commentMain').focus();
	e.preventDefault();
});


//Shows the modal with profile

for(var i = 0; i<prof.length; i++){
	prof[i].addEventListener('click', function(){
		var friends = 0;
		if (event.target.tagName != "FORM"){
		document.getElementsByClassName("modal__title")[0].innerHTML = "" + event.target.text + "";
		document.getElementsByClassName("modal__body")[0].innerHTML = "" + event.target.text + " has " + friends + " friends.";
		modal.style.display = "block";
	}
	});
}

//Shows the modal with share info
share.addEventListener('click', function(event){
	var title = event.target.parentNode.previousElementSibling.childNodes[1].innerHTML;
	var body = event.target.parentNode.previousElementSibling.previousElementSibling.childNodes[3].childNodes[1].innerHTML;
	document.getElementsByClassName("modal__title")[0].innerHTML = "Share " + body + "'s post";
	document.getElementsByClassName("modal__body")[0].innerHTML = " " + title + " ";
	modal.style.display = "block";
});



//Closes the modal
document.getElementsByClassName("modal__close")[0].addEventListener('click', function(){
	modal.style.display = "none";
});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};



//Show Comments
for(var i = 0; i<comment_info.length; i++){
	comment_info[i].childNodes[1].addEventListener('click', function(e){
		if (this.innerHTML == "Unlike"){
			this.parentNode.childNodes[5].innerHTML = "2 likes";
			this.innerHTML = "Like";
		}
		else {
			this.parentNode.childNodes[5].innerHTML = "3 likes";
			this.innerHTML = "Unlike";
		}
		e.preventDefault();
	});
	
}

// Show Replies
for(var i = 0; i<replies_link.length; i++){
	replies_link[i].addEventListener('click', function(e){
		if (this.parentNode.nextElementSibling.style.display == "inline") {
		this.parentNode.nextElementSibling.style.display = "none";
		}
		else {
		this.parentNode.nextElementSibling.style.display = "inline";
		}
	e.preventDefault();
	});
}
//Checks if form entry is empty or not
submit.addEventListener('click', function(event){
	var x = document.getElementsByClassName('commentMain').value;
	x.submit();
    if (x == undefined) {
        alert("Comment box must be filled out");
        event.preventDefault();
    }
    else {
    	alert(x);
    }

});

// Adds new form.
/*for (var i = 0; i<submit.length; i++){
	submit[i].addEventListener('click', function(event){
		if (event.target.previousElementSibling.text = ""{
			alert("You must type in a comment!");
		}

	});
}

When we hit the submit button, we want to add the text that is in the textarea box and
var postComments = document.getElementsByClassName('post__comments')[0];
postComments.appendChild();
and we want it to be in form of 
<div class="comment media">
        <img src="images/user.png" class="profilePhoto">
        <div class="media__info">
          <a href="#">Name 1</a>
Here goes the text that we are pulling from the post, so what was submitted     
          <div class="comment__info">
            <a href="#">Like</a>
            <a href="#">Reply</a>
            <span>2 likes</span>
            Yesterday at 10:00am
          </div>
        </div>

*/

});