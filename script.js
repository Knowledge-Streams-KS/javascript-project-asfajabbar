const getMovie=document.getElementById('mname');

const submitButton=document.getElementById('btn');
submitButton.addEventListener("click", ()=>getData(getMovie));

 
const getData = async(getMovie) =>{
   
 
    const getYear=document.getElementById('year').value;
     console.log("YEAR: "+ getYear);
    //alert(getMovie.value);
    const resp=await fetch(`http://www.omdbapi.com/?s=${getMovie.value}&apikey=591877c0`);
    const data = await resp.json();
    console.log(data);
    //const new_arr = data.Search;
    //console.log(new_arr);
    //new_arr.map(showlist);
    const year_m= data['Search'];
    //year_m.map(showlist);
     const y_data = year_m.filter((y)=>
     {
        if(y['Year']=== getYear)
        {
            return y;
         }
     })
     console.log(y_data);
    //  const new_arr=y_data;
    // new_arr.map(y_data);
     y_data.map(showlist)
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