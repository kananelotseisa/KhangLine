const shareDirectorBtn = document.getElementById('shareDirectorBtn');

shareDirectorBtn.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
        title:'Tieho Khang: Digital Business Card',
        text: 'Working is managing director, contact me today!',
        url: 'https:khangline.co.ls/members/tiehokhang.html'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
