const shareAssistantBtn = document.getElementById('shareAssistantBtn');

shareAssistantBtn.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
        title:'Hape Mofoka: Digital Business Card',
        text: 'Working as assistant officer, contact me today!',
        url: 'https:khangline.co.ls/members/hapemofoka.html'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
