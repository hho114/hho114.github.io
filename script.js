

const nav = document.querySelector('#navigation');
const navTop = nav.offsetTop;

function stickyNavigation() {
  console.log('navTop = ' + navTop);
  console.log('scrollY = ' + window.scrollY);

  if (window.scrollY >= navTop) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed');
  }
}

window.addEventListener('scroll', stickyNavigation);


// $(document).ready(function()
// {	
// 	$('.navbar-nav li a').click(function(event) 
// 	{
// 		$('.navbar-collapse').removeClass('in').addClass('collapse');
//   });
// });
