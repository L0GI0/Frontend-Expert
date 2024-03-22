const API_BASE_URL = 'https://api.frontendexpert.io/api/fe/testimonials';

// Write your code here.

let canFetchTestimonials = true;
const FETCH_LIMIT = 5;

let after = null;

const testimonialsContainer = document.getElementById('testimonial-container');

testimonialsContainer.addEventListener('scroll', handleScroll);

function handleScroll() {
  if(!canFetchTestimonials) return;

  const bottomSpaceLeftToScroll = this.scrollHeight - this.scrollTop - this.clientHeight;
  if(bottomSpaceLeftToScroll > 0) return;
    fetchData()
}

async function fetchData() {

  canFetchTestimonials = false;
  
  const apiURL = new URL(API_BASE_URL);

  apiURL.searchParams.set('limit', FETCH_LIMIT);
  
  if(after != null)
    apiURL.searchParams.set('after', after);

  const newTestimonials = await fetch(apiURL).then((data) => {
      return data.json();
  }).catch((error) => {
    console.log(`Failed to fetch due to ${error}`)
  });

  const hasNext = newTestimonials.hasNext;
  
  if(hasNext)
    after = newTestimonials.testimonials[FETCH_LIMIT - 1].id;
  else {
    testimonialsContainer.removeEventListener('scroll', handleScroll);
  }

  appendTestimonials(newTestimonials.testimonials);

  canFetchTestimonials = true;
}

function appendTestimonials(testimonials) {

  testimonials.forEach((testimonial) => {

    const testimonialElement = document.createElement('p');
    
    const testimonialMessage = document.createTextNode(testimonial.message);

    testimonialElement.appendChild(testimonialMessage);
    testimonialElement.classList.add('testimonial');
    
    
    testimonialsContainer.appendChild(testimonialElement);
  })
}
  

const testimonials = fetchData();
