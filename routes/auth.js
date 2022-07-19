const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const users = [];

router.post('/signup', (req, res) => {
    try {
        const { username, password, email } = req.body;
        const saltRounds = 10;
        let hashedPassword = bcrypt.hashSync(password, saltRounds);

        let newUser = {
            username,
            password: hashedPassword,
            email
        }
        users.push(newUser);
        console.log(newUser)

        res.status(201).json(newUser);
    } catch (error) {
        res.sendStatus(400).json(error)
    }

})


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username && !password) {
        res.send('username and passwoord required');
    }

    const found = users.find((user) => {
        return user.username === username
    })

    if (found) {
        const targetIndex = users.indexOf(found)
        const user = users[targetIndex]
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            res.send('OK')

        }
        else {
            res.status(400).json({
                message: 'incorrect username or password'
            })
        }

    }
    else {
        res.send("user not found")
    }

})


module.exports = router;