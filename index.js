
// Enigma code generater




document.getElementById("content").addEventListener("submit", function show(event) {
    event.preventDefault();

  
    
var string = document.getElementById("string").value;
string = string.toLocaleUpperCase();
string = string.split(" ").join("");
var words = [];
var letters = [];




while(string.length > 0) {
    if(string.length >= 5) {
words.push(string.slice(-5));
    string = string.slice(0,-5);
    } else {
        words.push(string);
        break;
    }
}


gibberishAlgo(words,letters);

document.getElementById("display").innerHTML = letters.join('');
             

});



function gibberishAlgo(words,letters) {

   


    

    for(var j = 0; j<words.length; j++) {
        let characters = words[j];
        while (characters.length > 0) {
            
            letters.push(characters.slice(-1));
            characters = characters.slice(0,-1);
            
            
        }
         
          }

          
        
          updateArrayWithCombination(letters);
      

return letters;

      




  

  
}




function updateArrayWithCombination(letters) {



    perfectSquares = {
        1 : 'A',
        4 : 'D',
         9 : 'I',
         16 : 'P',
     25 : 'Y'
     
     
     };
 
      divisibileBy7 = {
         7 : 'G',
         14 : 'N',
         21 : 'U',
         6 : 'F',
         10 : 'J'
     };
 
      twoPrimeFactors = {
        2 : 'B',
        3 : 'C',
         15 : 'O',
     28: '$',
     26 : 'Z'
     };
 
      factorsOf24 = {
        5 : 'E',
        11 : 'K',
        13 : 'M',
        
         29 : '&',
     12 : 'L'
     
     };
 
      primeNumbers = {
 
        18 : 'R',
        20 : 'T', 
     17 : 'Q',
     19 : 'S',
     30 : '%'
     
     };
 
      remaining = {
 
         
         24 : 'X',
         27 : '@',
         22 : 'V',
         8 : 'H',
         23 : 'W'
     };

    
 
   for (var M = 0; M < letters.length; M++) {
    var newString = '';

        if (Object.values(perfectSquares).includes(letters[M])) {
           
            
            
            
            for (let key in perfectSquares) {
                if (perfectSquares[key] !== letters[M]) {
                    
                    newString += perfectSquares[key];
                }
            }
            
            
            letters[M] = newString;
            
        }else  if (Object.values(divisibileBy7).includes(letters[M])) {
           
            
            
            
            for (let key in divisibileBy7) {
                if (divisibileBy7[key] !== letters[M]) {
                    newString += divisibileBy7[key];
                }
            }
            
            
            letters[M] = newString;
    }else  if (Object.values(twoPrimeFactors).includes(letters[M])) {
           
            
            
            
            for (let key in twoPrimeFactors) {
                if (twoPrimeFactors[key] !== letters[M]) {
                    newString += twoPrimeFactors[key];
                }
            }
            
            
            letters[M] = newString;
    } else  if (Object.values(factorsOf24).includes(letters[M])) {
           
            
            
            
            for (let key in factorsOf24) {
                if (factorsOf24[key] !== letters[M]) {
                    newString += factorsOf24[key];
                }
            }
            
            
            letters[M] = newString;
    } else  if (Object.values(primeNumbers).includes(letters[M])) {
           
            
            
            
            for (let key in primeNumbers) {
                if (primeNumbers[key] !== letters[M]) {
                    newString += primeNumbers[key];
                }
            }
            
            
            letters[M] = newString;
        } else  if (Object.values(remaining).includes(letters[M])) {
           
            
            
            
            for (let key in remaining) {
                if (remaining[key] !== letters[M]) {
                    newString += remaining[key];
                }
            }
            
            
            letters[M] = newString;
        }
    
        
    } 

   
     
     

   return letters;
};



/* <style>
            body {
                background-color: green;
            }
            #string {
                height: 350px;
                width: 250px;
                background-color: azure;
                border: 1px solid transparent;
                border-radius: 2%;
                outline: none;
                line-height: 1.5; 
                vertical-align: top;
                flex-grow: 1;
                font-size: 20px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                overflow: scroll;
                margin-top: 20px;
                float: left;
                


            }
        
            textarea::placeholder {
            text-align: center;
            padding: 35%;
            padding-top: 60%;
            
            }
            input::placeholder {
            text-align: center;

            }
            h2 {
                text-align: center;
                font-size: 47px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-weight: lighter;
                color: azure;
            }
            h3 {
                text-align: center;
                font-size: 25px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-weight: lighter;
                color: azure;
            }
            #display {
                height: 350px;
                width: 250px;
                background-color: azure;
                border: 1px solid transparent;
                border-radius: 2%;
                outline: none;
                line-height: 1.5; 
                vertical-align: top;
                flex-grow: 1;
                font-size: 20px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                overflow: scroll;
                margin-top: 20px;
                margin-left: -21%;
                
            }
            #btn {
                height: 40px;
                width: 560px;
                font-size: 20px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-weight: lighter;
                color: green;
                text-align: center;
                margin-left: -20%;
                margin-top: 380px;
                border-radius: 2%;
                border: 1px solid transparent;
                background-color: azure;
                cursor: pointer;


            }
           #div {
                float: left;
                height: 400px;
                width: 500px;
                margin-top: -440px;
                margin-left: 50%;
            }
            p {
                font-size: 15px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-weight: lighter;
                color: azure;
            }
            #btn2 {
                height: 40px;
                width: 520px;
                font-size: 20px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-weight: lighter;
                color: green;
                text-align: center;
                margin-left: 100px;
                margin-top: 380px;
                border-radius: 2%;
                border: 1px solid transparent;
                background-color: azure;
                cursor: pointer;

            }
            a{
                font-size: 20px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-weight: lighter;
                color: green;
                text-decoration: none;  
                margin-left: 45%;
                border: 1px solid transparent;
                background-color: azure;
                height: 30px;
                width: 75px;
                text-align: center;
            }
            

        </style>
        
        
        
        
        <div id="dashboard">
                <form id="content">
            <input type="text" id="string" spellcheck="false" placeholder="Enter your message..." maxlength="200" required><button id="btn" type="submit">Cipher</button>
            <textarea type="text" id="display" placeholder="cipher here..." readonly></textarea>
            </form>
            </div>
            
            
            <a href="codeBreak.html">Di-cipher here...</a>


            <div>
                <form id="contentC">
            <input type="text" id="stringC" spellcheck="false" placeholder="Cipher Message" maxlength="2000" required><button id="btnC" type="submit">Di-Cipher</button>
            <textarea type="text" id="displayC" placeholder="Di-Ciphere here..." readonly></textarea>
            </form>
            </div>
*/














