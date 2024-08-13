var numeric = document.getElementById("numeric")
var uppercase = document.getElementById("uppercase")
var lowercase = document.getElementById("lowercase")
var password = document.getElementById("password")

function passwordgenerator() {

    let numeric_length = numeric.value
    let uppercase_length = uppercase.value
    let lowercase_length = lowercase.value


    var numeric_length_number = Number(numeric_length)
    var uppercase_length_number = Number(uppercase_length)
    var lowercase_length_number = Number(lowercase_length)



    var value_check = numeric_length_number + uppercase_length_number + lowercase_length_number
    console.log(value_check);

    
   


    if (value_check < 9) {

        var numeric_password = ""
    const numeric_digits = '0123456789'
    
    for (let i = 0; i < numeric_length; i++) {
        var num1 = Math.floor(Math.random() * numeric_digits.length)
        numeric_password += numeric_digits[num1]
    }
    console.log(numeric_password);


    var uppercase_password = ""
    const uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    for (let i = 0; i < uppercase_length; i++) {
        var num2 = Math.floor(Math.random() * uppercase_letters.length)
        uppercase_password += uppercase_letters[num2]
    }
    console.log(uppercase_password);


    var lowercase_password = ""
    const lowercase_letters = "abcdefghijklmnopqrstuvwxyz"
    
    for (let i = 0; i < lowercase_length; i++) {
        var num3 = Math.floor(Math.random() * lowercase_letters.length)
        lowercase_password += lowercase_letters[num3]
    }
    console.log(lowercase_password);



        var final_password = numeric_password + uppercase_password + lowercase_password



        var array = final_password.split("")
        console.log(array);


        var shuffle = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };


        let shuffledArray = shuffle(array);
        console.log(shuffledArray);

        var final_string = shuffledArray.join("")
        console.log(final_string);


        password.innerText = final_string
    } else {
        password.innerText = "YOUR PASSWORD IS LONG"
    }




}


