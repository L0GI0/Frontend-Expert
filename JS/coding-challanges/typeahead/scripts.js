const BASE_URL = 'https://api.frontendexpert.io/api/fe/glossary-suggestions';
const typeAheadInput = document.getElementById('typeahead');
const suggestionsList = document.getElementById('suggestions-list');

let fetchTimeoutId = null;

// Write your code here.
async function fetchData (text) {

  const url = new URL(BASE_URL);

  url.searchParams.set('text', text);
  
  const data = await fetch(url).then((data) => {
    return data.json();
  }).catch((error) => {
    console.log(`Fetch failed due to ${error}`)
  })

  return data;
}

typeAheadInput.addEventListener('input', async (event) => {

  if(event.target.value.length === 0) {
    clearSuggestions();
    return;
  }
  
  if(fetchTimeoutId)
    clearTimeout(fetchTimeoutId);
  
  fetchTimeoutId = setTimeout(async () => {
    console.log(`fetching data`);
    const typeAheadData = await fetchData(event.target.value);
    console.log(`Type ahead data = ${JSON.stringify(typeAheadData)}`)
    addTypeAhead(typeAheadData)
  }, 500)
  
})

function addTypeAhead(typeAheadData) {
  
  clearSuggestions();
  
  if(typeAheadData.length === 0) {
    return;
  }

  typeAheadData.forEach((typeAheadText) => {
    const typeAhead = document.createElement('li')
    typeAhead.innerText = typeAheadText;
    typeAhead.addEventListener('click', (event) => {
      typeAheadInput.value = event.target.innerText;
      clearSuggestions();
    })
    suggestionsList.appendChild(typeAhead);
  })
}

function clearSuggestions() {
  clearTimeout(fetchTimeoutId);
  suggestionsList.innerHTML = '';
}
