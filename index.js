function generateRandomPassword(){
    const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    document.getElementById("password1").textContent="";
    for( let i=0; i < 15 ; i++){
        let index = Math.floor(Math.random()*(61 - 1 + 1)); // return Math.floor(Math.random()* (max - min + 1)) + min;  //Rule       
        document.getElementById("password1").textContent+=characters[index];
    }
    document.getElementById("password2").textContent="";
    for( let i=0; i < 15 ; i++){
        let index = Math.floor(Math.random()*(61 - 0 + 1)); // return Math.floor(Math.random()* (max - min + 1)) + min;  //Rule       
        document.getElementById("password2").textContent+=characters[index];

    }
};
