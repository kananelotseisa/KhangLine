const shareFinanceBtn = document.getElementById('shareFinanceBtn');

shareFinanceBtn.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
        title:'Makatleho Khang: Digital Business Card',
        text: 'Working as finance officer, contact me today!',
        url: 'https:khangline.co.ls/members/makatlehokhang.html'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
