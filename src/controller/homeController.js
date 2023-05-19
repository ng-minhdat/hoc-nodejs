import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `USER`');
    return res.render('index.ejs', {userData: rows});
}

let getSurprise = (req, res) => {
    return res.send('I am the man behind this page!')
}

let getDetailPage = async (req, res) => {
    let userID = req.params.userID;
    let [rows, fields] = await pool.execute(`SELECT * FROM USER WHERE ID = ${userID}`)
    console.log("User's data: ", rows);
    return res.render('index.ejs', {userData: rows});
}

module.exports = {
    getHomepage,
    getSurprise,
    getDetailPage
}