//Enigma code breaker


document.getElementById("contentC").addEventListener('submit', function dicipher(event) {
    event.preventDefault();

    
    
    var stringC = document.getElementById("stringC").value;
    stringC = stringC.toLocaleUpperCase();
    var cipherWords = ['DIPY','COZ$','BOZ$','AIPY','KLM&','GJNU','FJNU','VWX@','ADPY','FGNU','ELM&','EKM&','EKL&','FGJU','BCZ$','ADIY','RST%','QST%','QRT%','QRS%','FGJN','HWX@','HVX@','HVW@','ADIP','BCO$'];

    //var cipherWords = ['DIPY','COZ$','BOZ$','AIPY','KLM&','GJNU','FJNU','VWX@','ADPY','FGNU','ELM&','EKM&','EKL&','FGJU','BCZ$','ADIY','RST%','QST%','QRT%','QRS%','HVX@','FGJN','HWX@','HVW@','ADIP','BCO$'];
var cutting = '';
var stringWords = [];
var alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
while(stringC.length > 0) {

    cutting = stringC.slice(-4);
       stringC = stringC.slice(0,-4);
       stringWords.push(cutting);
    
   }
   
   
   for(var i =0; i<stringWords.length ; i++) {
   
   
       if(cipherWords.includes(stringWords[i])) {
           let position = cipherWords.indexOf(stringWords[i]);
           stringWords[i] = alphabets[position];
       }
   
   
       
   }
   
document.getElementById("displayC").textContent = stringWords.join('  ');
   
   




});

