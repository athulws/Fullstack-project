const express = require("express")
const router = express();

const transfers = require("../Models/userSchema")

//register

router.post("/register", async (req, res) => { //user nte data database il keran
    // console.log(req.body);
    try {

        const { name, email, password } = req.body; //ivide direct mention cheyyukayaan cheyyunnath // ivide "body" thanne kodukkanam vere name padilla
        console.log(name);

        // if (!name && !email && password) {
        //     res.status(422).json("Plz fill the data")
        //     return;//This will help to avoid sending multiple responses for a single request.
        // }

        const preuser = await transfers.findOne({ email: email }) //"transfers" enna database il already register cheytha user aano nokkan,(ie, already register aaya email ID aano enn nokkan)
        // "email:email" --> aadyathe "email" database il ulla email, randamathe "email" is nammal type cheyyunna email
        console.log(preuser);

        if (preuser) {
            res.status(422).json("this user is already present") // database il add aaya email ID aan koduthathenkil aa email ID database il add aakilla, athinulla message aan ith
            return; //This will help to avoid sending multiple responses for a single request.
        } else {
            const adduser = new transfers({ // database il illatha details aan kodukkunnathenkil 
                name, email, password
            });

            await adduser.save(); // database il save aakan
            res.status(201).json(adduser) // save aayal response send cheyyum
            console.log(adduser);
        }
    } catch (error) {
        res.status(422).json(error)
    }
})

module.exports = router;