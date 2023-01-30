const getMovie=document.getElementById('mname');

const submitButton=document.getElementById('btn');
submitButton.addEventListener("click", ()=>getData(getMovie));

window.onload = function () {
    let localData = localStorage.getItem("localData");
    if (localData) {
      let movieDetail = document.getElementById("movielist");
      movieDetail.innerHTML = localData;
    }
    sessionStorage.clear();
  };
  // Onbeforeunload function to unload
  window.onbeforeunload = function () {
    let movieDetail = document.getElementById("movielist").innerHTML;
    localStorage.setItem("localData", movieDetail);
  };
 
const getData = async(getMovie) =>{

    let movieDetail = document.getElementById("movielist");
    // console.log(movieDetail);
    movieDetail.innerHTML = "";
    const getYear=document.getElementById('year').value;
     console.log("YEAR: "+ getYear);
    const resp=await fetch(`http://www.omdbapi.com/?s=${getMovie.value}&apikey=591877c0`);
    const data = await resp.json();
    console.log(data);
    const year_m= data['Search'];
    if(getYear=="")
    {
         year_m.map(showlist);
         console.log("hello");
    }
    else
    {

     const y_data = year_m.filter((y)=>
     {
        if(y['Year']=== getYear)
        {
            return y;
         }
     })
     console.log(y_data);
     y_data.map(showlist)
    
    
    }
}
function showlist(data)
{
const div_id = document.getElementById('movielist');
const new_element =   ` 
<img src=${data.Poster}>
<p>${data.Title}</p>
<p>${data.Year}</p>`
div_id.insertAdjacentHTML("afterbegin",new_element);
}
