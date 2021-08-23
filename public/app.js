const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


let login = () => {
    var Email = document.getElementById('email').value
    var Password = document.getElementById('pass').value
    // var z = document.title = "AR RESTAURANT"



    firebase.auth().signInWithEmailAndPassword(Email, Password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)

            // localStorage.setItem("Restaurant Name", z)
            localStorage.setItem("email", Email)

            if(Email == "admin@gmail.com" && Password == "admin123"){
            window.location.href = 'Admin.html'
            }
            else{
            window.location.href = 'index.html'
            
        
        }
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
            alert("Email/Password Incorrect")
            window.location.href = "login.html"
        });

    // console.log(a,b)
}

let signup = () => {
    var email = document.getElementById('emaill').value
    var pass = document.getElementById('passs').value
    var fn = document.getElementById('fulname').value
    var rn = document.getElementById('resname').value
    var mn = document.getElementById('Mobile').value
    var cy = document.getElementById('country').value
    var cty = document.getElementById('City').value

    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user)

            // var id = firebase.auth().currentUser.uid;

           firebase.database().ref('Customer/').set({
                Name:fn,
                Email:email,
                restaurant:rn,
                MobileNo:mn,
                Country:cy,
                City:cty,
            })
alert("Successfully SignUp")
window.location.href = "login.html"
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });


    // console.log(a,b,c)
}





// add to cart



let main = document.getElementById('products');

for(var i = 0; i < products.length; i++){
    
}

let allCarts = [];
let carts = localStorage.getItem('carts')

if(carts !== null){
   allCarts = JSON.parse(carts)
   let cart_badge = document.getElementById('cart_badge');
   cart_badge.innerHTML = allCarts.length
}

function addToCart(name,price,image){
    let cart = {
        name,
        price,
        image
    }
    allCarts.push(cart)
    localStorage.setItem('carts',JSON.stringify(allCarts))
    let cart_badge = document.getElementById('cart_badge');
    cart_badge.innerHTML = allCarts.length
}