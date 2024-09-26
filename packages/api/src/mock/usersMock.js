
var users= []

function userGenerator(cycles){
   let number = cycles
   
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Z", "X", "Y",]
const emailproviders=["yahoo", "hotmail", "outlook"]
    function randomWord(){
        var loop = 8
        let alterner = 0
        const word = []
        for(var i = loop; i >0, i--;){
            if(alterner %2 === 0){
                word.push(letters[Math.floor(Math.random()*letters.length)])
                alterner = Math.floor(Math.random() * 10)
                
            } else {
                word.push(letters[Math.floor(Math.random()*letters.length)].toLowerCase())
                alterner = Math.floor(Math.random() * 10)
               
            }
    
        }
        return word.join("")
    }
    function joiner(type) {
       
        if(type === "email"){
            return `${randomWord()}@${emailproviders[Math.floor(Math.random()*emailproviders.length)]}.com`
        }else if( type=== "displayName"){
            return `${randomWord()}`
        }
    
      
    }
    while(number > 0) {
       
        users.push({
            email: joiner("email"),
            displayName: joiner("displayName"),
            photoURL: "https://scontent.fmex26-1.fna.fbcdn.net/v/t39.30808-6/452371663_8317293321623256_8046392083982961933_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHJFiDGHayloGn-6tPIBl0BQclBQPZae5hByUFA9lp7mIY5jFNrsgFz8GAqP7VNjYA_8bR17LpGLjOdEJnpt4DD&_nc_ohc=jxxMkMXyABgQ7kNvgGOKYvX&_nc_ht=scontent.fmex26-1.fna&oh=00_AYBJLak5jr4xJzfeVfyR2kGlgzq_UWklvWqTGuBcX4LMvQ&oe=66FA4BCE"
        })
       number = number-1   
    }

    return users
}


module.exports= {userGenerator}
