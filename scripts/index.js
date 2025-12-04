const editProfileBtn  = docuument.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editCloseBtn= editProfileModal.querySelector("modal__close-btn");

const newPostBtn  = docuument.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-profile-modal");
const newCloseBtn= newPostModal.querySelector("modal__close-btn");

editProfileBtn.addEventListener("click", function(){
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