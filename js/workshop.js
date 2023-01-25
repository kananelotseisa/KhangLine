
const shareWorkshopBtn = document.getElementById('shareWorkshopBtn');

shareWorkshopBtn.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
        title:'Mohale Khang: Digital Business Card',
        text: 'Working is workshop manager, contact me today!',
        url: 'https:khangline.co.ls/members/mohalekhang.html'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});