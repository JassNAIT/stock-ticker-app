/*API  key: 2UVQEY3ZXDGBHTJO */

/*https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=2UVQEY3ZXDGBHTJO*/ 
window.addEventListener('load',function(e){
   
       const searchUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&apikey=2UVQEY3ZXDGBHTJO&symbol=";
      
       const test = document.forms['searchForm'];
       test.addEventListener('submit',function(e){
        e.preventDefault();
        console.log(e.currentTarget.elements.search.value);
        const symbol = e.currentTarget.elements.search.value;
        const stockData = getData(e.currentTarget.elements.search.value);
        console.log(stockData);
  
        stockData.then(res=>{
            if(res['Error Message']){
              //const errorTemplate ='<p>${warning}</p>';
              
              const errorTemplate =`<p>Sorry cannot find the stock quote</p>`;
            document.querySelector('.stock-display').innerHTML = errorTemplate;
          }else{
               const successTemplate = `<ul>
               <li>${res['Time Series (5min)']}</li>
               <li>${res['Meta Data']['1. Information']}</li>
               <li>${res['Meta Data']['2. Symbol']}</li>
               <li>${res['Meta Data']['3. Last Refreshed']}</li>
               <li>${res['Meta Data']['4. Interval']}</li>
               <li>${res['Meta Data']['5. Output Size']}</li>
               <li>${res['Meta Data']['6. Time Zone']}</li>
               </ul>`;
               document.querySelector('.stock-display').innerHTML = successTemplate;
            }
          // console.log('re');
          // console.log(res);
        })
        .catch(err=>console.log(err))
      })
      

     
       async function getData (symbol){
        let url = searchUrl + symbol;
        const req = await fetch(url);
        const result = await req.json();
        //console.log(result['Meta Data']['2. Symbol']);
        //const a = {temp:1}
        //a['temp']
        console.log(result["Meta Data"]);
        return result;
    }

    //getData();
   

})