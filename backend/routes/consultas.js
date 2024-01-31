const pool = require('../config/db')

const getPosts = async (titulo, img, descripcion) => {
    const {rows} = await pool.query("select * from posts")
    console.log(rows)
    return rows
}

const sendPosts = async (titulo, img, descripcion) => {
    const {rows} = await pool.query("insert into posts (titulo, img, descripcion) values ($1,$2,$3)",[titulo, img, descripcion])
    console.log(rows)
    return rows
}

module.exports = {
    getPosts,
    sendPosts
}