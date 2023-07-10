const swiper = new Swiper('.swiper', {
	// Optional parameters
	autoplay: {
        delay: 3000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay even if user interacts with the swiper
      },
	loop: true,
  
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	  }, 
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });

const swipermain = new Swiper(".mySwiper",{

	autoplay: {
        delay: 3000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay even if user interacts with the swiper
      },
	slidesPerView:3,
	loop:true,
});


const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function displayDealTime()
{
	seconds.innerText = parseInt(seconds.innerText) - 1;
	if(parseInt(seconds.innerText) < 10) 
	{
		seconds.innerText = 0 + seconds.innerText;
	}
	if(parseInt(minutes.innerText) < 10) 
	{
		minutes.innerText = 0 + minutes.innerText;
	}
	if(parseInt(seconds.innerText) == 0)
	{
		seconds.innerText = 60;
		minutes.innerText = parseInt(minutes.innerText) - 1;
	}
	if(parseInt(minutes.innerText) == 0)
	{
		hours.innerText = parseInt(hours.innerText) - 1;
		minutes.innerText = 60;
		seconds.innerText = 60;
	}
}

setInterval(displayDealTime,1000);