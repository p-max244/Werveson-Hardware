// Minimal JS for mobile nav toggle and simple contact form validation
document.addEventListener('DOMContentLoaded',function(){
  var navToggle=document.getElementById('navToggle');
  var siteNav=document.getElementById('siteNav');
  if(navToggle){navToggle.addEventListener('click',function(){siteNav.classList.toggle('open');});}

  var contactForm=document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit',function(e){
      e.preventDefault();
      var name=document.getElementById('name').value.trim();
      var email=document.getElementById('email').value.trim();
      var message=document.getElementById('message').value.trim();
      if(!name||!email||!message){
        alert('Please complete all fields.');
        return;
      }
      // In production, send data to backend. For now, show a demo message.
      alert('Thanks, ' + name + '! Your message was sent (demo).');
      contactForm.reset();
    });
  }
});