// const transfers = require("../Models/userSchema")

// //register

// exports.userRegist = async (req, res) => { //user nte data database il keran
//     // console.log(req.body);
//     try {

//         const { name, email, password } = req.body; //ivide direct mention cheyyukayaan cheyyunnath // ivide "body" thanne kodukkanam vere name padilla
//         console.log(name);


//         const preuser = await transfers.findOne({ email: email }) //"transfers" enna database il already register cheytha user aano nokkan,(ie, already register aaya email ID aano enn nokkan)
//         // "email:email" --> aadyathe "email" database il ulla email, randamathe "email" is nammal type cheyyunna email
//         console.log(preuser);

//         if (preuser) {
//             res.status(422).json("this user is already present") // database il add aaya email ID aan koduthathenkil aa email ID database il add aakilla, athinulla message aan ith
//             return; //This will help to avoid sending multiple responses for a single request.
//         } else {
//             const adduser = new transfers({ // database il illatha details aan kodukkunnathenkil 
//                 name, email, password
//             });

//             await adduser.save(); // database il save aakan
//             res.status(201).json(adduser) // save aayal response send cheyyum
//             console.log(adduser);
//         }
//     } catch (error) {
//         res.status(422).json(error)
//     }
// };


const transfers = require("../Models/userSchema");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')



// User registration handler
exports.userRegistration = async (req, res) => {
    try {
        // Extract user data from the request body
        const { name, email, password } = req.body;

        // Check if the user already exists in the database
        const preuser = await transfers.findOne({ email: email });

        if (preuser) {
            // User already exists, return a 422 status
            return res.status(422).json("This user is already registered");
        } else {
            // Create a new user object
            const adduser = new transfers({ name, email, password });

            // Save the new user to the database
            await adduser.save();

            // Return a 201 status with the newly created user object
            return res.status(201).json(adduser);
        }
    } catch (error) {
        // Handle any errors and return a 422 status with the error message
        return res.status(422).json({ error: error.message });
    }
};



const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
}


// user Login
exports.userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await transfers.findOne({ email: email });
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                const token = jwt.sign({email: user.email}, "jwt-secret-key", {expiresIn:"1d"});
                res.cookie("token", token);
            
                res.json("Login Successfully");
            } else {
                res.json("The password is incorrect");
            }
        } else {
            res.json("No record exists");
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};