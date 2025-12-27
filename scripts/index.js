const modal= document.querySelectorAll(".modal")

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

function openModal(modal){
    modal.classList.add("modal_is-opened");
}

function closeModal(modal){
    modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function(){
    editProfileNameInput.value = profileNameEl.textContent;
    /*the text content of the [profileNameEl] will now be filled with the value of the [editProfileNameEl] element*/
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    openModal(editProfileModal);
});

editCloseBtn.addEventListener("click",function(){
    closeModal(editProfileModal);
   

});

newPostBtn.addEventListener("click", function(){
  openModal(newPostModal);
});

newCloseBtn.addEventListener("click",function(){
    closeModal(newPostModal);
});
function handleEditProfileSubmit(evt){
    evt.preventDefault();
    profileNameEl.textContent=editProfileNameInput.value ;
   profileDescriptionEl.textContent=editProfileDescriptionInput.value; 
   closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit",handleEditProfileSubmit);

function handleNewPostSubmit(evt){
    evt.preventDefault();
    console.log(newPostImageInput.value);
    console.log(newPostCaptionInput.value);
    closeModal(newPostModal);
}

newPostForm.addEventListener("submit",handleNewPostSubmit);