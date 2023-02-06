

 function userDate(){
    let inputs=document.querySelectorAll(".day")
    const endDate=document.querySelector(".data").value;
    document.querySelector(".udate").innerText=endDate;

    function clock(){

       
            
        let end=new Date(endDate);
        let now=new Date();
       let diff=(end-now) /1000; 
       if (diff<0) {return}
        else if(inputs===0){
            console.log("sdjahjafahgfgf")
        };
       inputs[0].value=Math.floor(diff/3600/24);
       inputs[1].value=Math.floor(diff/3600)%24;
       inputs[2].value=Math.floor(diff/60)%60;
       inputs[3].value=Math.floor(diff)%60;
     
  


    }
    setInterval(
        ()=>{
            clock()
        },
        1000
    )
    clock()
   
 }

 

  //  convert into days
// 1day=24hrs
// 1hr=60min
// 60min=3600sec