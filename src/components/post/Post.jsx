import "./post.css"

function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://storiestrending.com/wp-content/uploads/2020/08/1596907880_207_Get-the-most-out-of-your-apartment-layout.jpg"
                alt="post"/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    React UI Full Course for Beginners
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Мы назовём его «корневым» узлом DOM, так как React DOM будет управлять его содержимым.
                Обычно в приложениях, написанных полностью на React, есть только один корневой элемент.
                При встраивании React в существующее приложение вы можете рендерить во столько независимых
                корневых элементов, во сколько посчитаете нужным.
                Для рендеринга React-элемента в корневой узел DOM вызовите ReactDOM.render() с React-элементом
                и корневым DOM-узлом в качестве аргументов:   Мы назовём его «корневым» узлом DOM, так как React DOM будет управлять его содержимым.
                Обычно в приложениях, написанных полностью на React, есть только один корневой элемент.
                При встраивании React в существующее приложение вы можете рендерить во столько независимых
                корневых элементов, во сколько посчитаете нужным.
                Для рендеринга React-элемента в корневой узел DOM вызовите ReactDOM.render() с React-элементом
                и корневым DOM-узлом в качестве аргументов:   Мы назовём его «корневым» узлом DOM, так как React DOM будет управлять его содержимым.
                Обычно в приложениях, написанных полностью на React, есть только один корневой элемент.
                При встраивании React в существующее приложение вы можете рендерить во столько независимых
                корневых элементов, во сколько посчитаете нужным.
                Для рендеринга React-элемента в корневой узел DOM вызовите ReactDOM.render() с React-элементом
                и корневым DOM-узлом в качестве аргументов:
            </p>
        </div>
    );
}

export default Post;