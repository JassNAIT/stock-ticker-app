//add event listener on page load
window.addEventListener('load',function(e){
       // search url with api key
       const searchUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&apikey=2UVQEY3ZXDGBHTJO&symbol=";
       //form
       const formData  = document.forms['searchForm'];
       //add event listener when click on submit button
       formData.addEventListener('submit',function(e){
        //prevent default   
        e.preventDefault();
        console.log(e.currentTarget.elements.search.value);
        // get the input entered by the user
        const symbolEntered = e.currentTarget.elements.search.value;
        //call the getData() function here which returns data
        const stockData = getData(symbolEntered);
        //console.log(stockData);
        //get response and display it as a template
        stockData.then(res=>{
            //display error if user enter wrong input
            if(res['Error Message']){ 
                const errorTemplate =`<p>Sorry cannot find the stock information. Please fill the correct symbol.</p>`;
                document.querySelector('.stock-display').innerHTML = errorTemplate;
          }else{
              //display data in html
               const successTemplate = `<h2>Data Retrieved</h2><ul>
               <li><span><b>Information:</b></span> ${res['Meta Data']['1. Information']}</li>
               <li><span><b>Symbol:</b></span> ${res['Meta Data']['2. Symbol']}</li>
               <li><span><b>Last Refreshed:</b></span> ${res['Meta Data']['3. Last Refreshed']}</li>
               <li><span><b>Interval:</b></span> ${res['Meta Data']['4. Interval']}</li>
               <li><span><b>Output Size:</b></span> ${res['Meta Data']['5. Output Size']}</li>
               <li><span><b>Time Zone:</b></span> ${res['Meta Data']['6. Time Zone']}</li>
               </ul>`;
               document.querySelector('.stock-display').innerHTML = successTemplate;
            }
        })
        .catch(err=>console.log(err))
      })
      

       //function to get data
       async function getData (symbol){
        //pass symbol value entered by the user with the url
        let url = searchUrl + symbol;
        //fetch data
        const req = await fetch(url);
        const result = await req.json();
        console.log(result["Meta Data"]);
        //return data
        return result;
    }

})