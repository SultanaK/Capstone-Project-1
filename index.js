function getRecipe (searchTerm, count){
    const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
    const key = '9328328330da4dab967724501085f7f6'
    const url = baseUrl + '?query=' +searchTerm + '&number=' + count + '&instructionsRequired=true&apiKey=' + key; 
    // instructionsRequired
    console.clear()
    fetch(url)
    .then(response => response.json())
    .then(jsonresponse => console.log(jsonresponse))
}

function handleSubmitBtn(ev){
   ev.preventDefault();
   const searchTerm =  $('#search-term').val().trim();
   getRecipe_2(searchTerm)
}

function getRecipe_2 (searchTerm){
    const baseUrl = 'https://api.edamam.com/search'
    const applicationkey = 'cdecd570b00529d296181c80bc766e9d'
    const applicationId ='88821b3c'
    const url = baseUrl + '?q=' +searchTerm + '&app_id=' + applicationId +'&app_key=' + applicationkey +'&from=0&to=10'
    // "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
    // instructionsRequired
    console.clear()
    fetch(url)
    .then(response => response.json())
    .then(jsonresponse => console.log(jsonresponse))
}