let gallary=document.getElementById("gallary")
const API_KEY = "NjTYo27oZmII-d8l6cYb1Nr7baUfvW8SEX6rOixCJas";

const API_SECRET = "Dl-qyHh23C7FugnmKlQlNe9kgF57c0SgtGK5epoXNME";
let input = document.getElementsByTagName("input")[0];
input.addEventListener("input", ()=>{
gallary.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${input.value}&per_page=30`)
    .then(function(res) {
        return res.json();
    })
    // .then(function(res) {
    //     console.log(res.results.length);
    //     for(let i = 0; i < res.results.length; i = i + 1) {
    //         let single_result = res.results[i];
    //         let single_url = single_result.urls.regular;
    //         console.log(single_url);
    //     }
    // })
    
    .then(function(res) {
       
        for(let i = 0; i < res.results.length; i = i + 1) {
            let single_result = res.results[i];
            let single_url = single_result.urls.regular;
            console.log(single_url);
            img_ref=document.createElement("img")
            img_ref.src=single_url
            gallary.appendChild(img_ref)
            
        }
    })
    

});
console.log(input);
let search_param = "orange";
