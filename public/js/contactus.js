'use strict';

// Shortcuts to DOM Elements.
var messageForm = document.getElementById('message-form');
var titleInput = document.getElementById('new-post-title');

var newsletter_me = document.getElementById('newsletter_me');
var newsletter_result = document.getElementById('newsletter_result');

var contactusForm = document.getElementById('contactus-form');
var contactName = document.getElementById('contact_name');
var contactEmail = document.getElementById('contact_email');
var contactMessage = document.getElementById('contact_message');

var contact_me = document.getElementById('contact_me');
var contact_result = document.getElementById('contact_result');
/**
 * Saves a new post to the Firebase DB.
 */
// [START write_fan_out]
function subscribeMe( email) {
  // A post entry.
  var postData = {
    email: email
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('subcribeme').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/subcribeme/' + newPostKey] = postData;
 // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

function contactUs( username, email, message) {
  // A post entry.
  var postData = {
    username: username,
    email: email ,
    message: message
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('message').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/message/' + newPostKey] = postData;
  // updates['/user-message/' + email + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

// Bindings on load.
window.addEventListener('load', function() {

  // Saves message on form submit.
  messageForm.onsubmit = function(e) {
    e.preventDefault();
    if (titleInput.value) {

      subscribeMe(titleInput.value).then(function() {
    		newsletter_me.style.display = 'none';
    		newsletter_result.style.display = 'block';
      });
    }
  };

    // Saves message on form submit.
  contactusForm.onsubmit = function(e) {
    e.preventDefault();
    if (contactEmail.value && contactMessage.value) {
      var messageText = contactMessage.value;
      contactMessage.value = '';

      contactUs( contactName.value, contactEmail.value, messageText).then(function() {
        contact_me.style.display = 'none';
        contact_result.style.display = 'block';
      });
    }
  };
  
}, false);
