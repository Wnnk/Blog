

module.exports = app =>{
    const {STRING,TEXT} =app.Sequelize;
    const Blog = app.model.define("blogtable",{
            blogTitle:STRING,
            img:STRING,
            mdText:TEXT,
            htmlText:TEXT,
    })
    return Blog;
}