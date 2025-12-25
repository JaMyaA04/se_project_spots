const editProfileBtn  = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editCloseBtn= editProfileModal.querySelector(".modal__close-btn");
const editProfileForm= editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostBtn  = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newCloseBtn= newPostModal.querySelector(".modal__close-btn");
const newPostForm= newPostModal.querySelector(".modal__form");
const newPostImageInput=newPostModal.querySelector("#card-image-input");
const newPostCaptionInput=newPostModal.querySelector("#card-image-caption");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function(){
    editProfileNameInput.value = profileNameEl.textContent;
    /*the text content of the [profileNameEl] will now be filled with the value of the [editProfileNameEl] element*/
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    editProfileModal.classList.add ("modal_is-opened");
});

editCloseBtn.addEventListener("click",function(){
    editProfileModal.classList.remove("modal_is-opened");
   

});

newPostBtn.addEventListener("click", function(){
   newPostModal.classList.add ("modal_is-opened");
});

newCloseBtn.addEventListener("click",function(){
    newPostModal.classList.remove("modal_is-opened");
});
function handleEditProfileSubmit(evt){
    evt.preventDefault();
    profileNameEl.textContent=editProfileNameInput.value ;
   profileDescriptionEl.textContent=editProfileDescriptionInput.value; 
   editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("sumbit",handleEditProfileSubmit);

function handleNewPostSubmit(evt){
    evt.preventDefault();
    console.log(newPostImageInput);
    console.log(newPostCaptionInput);
    newPostModal.classList.remove("modal_is-opened");
}

newPostForm.addEventListener("submit",handleNewPostSubmit);