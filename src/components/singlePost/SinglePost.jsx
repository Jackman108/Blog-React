import "./singlePost.css"

function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="http://cppkp.sutd.ru/images/Graphic-design-inspiration-week-6.jpg"
                     alt="PostWrapper" />
                <h1 className="singlePostTitle">
                    React UI Full Course for Beginners
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"> </i>
                        <i className="singlePostIcon fas fa-trash-alt"> </i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Jack</b></span>
                    <span className="singlePostDate">1 hours ago</span>
                </div>
                <p className="singlePostDesc">Мы назовём его «корневым» узлом DOM, так как React DOM будет управлять его содержимым.
                    Обычно в приложениях, написанных полностью на React, есть только один корневой элемент.
                    При встраивании React в существующее приложение вы можете рендерить во столько независимых
                    корневых элементов, во сколько посчитаете нужным.
                    Для рендеринга React-элемента в корневой узел DOM вызовите ReactDOM.render() с
                    React-элементом и корневым DOM-узлом в качестве аргументов:Мы назовём его «корневым» узлом DOM, так как React DOM будет управлять его содержимым.
                    Обычно в приложениях, написанных полностью на React, есть только один корневой элемент.
                    При встраивании React в существующее приложение вы можете рендерить во столько независимых
                    корневых элементов, во сколько посчитаете нужным.
                    Для рендеринга React-элемента в корневой узел DOM вызовите ReactDOM.render() с
                    React-элементом и корневым DOM-узлом в качестве аргументов:Мы назовём его «корневым» узлом DOM, так как React DOM будет управлять его содержимым.
                    Обычно в приложениях, написанных полностью на React, есть только один корневой элемент.
                    При встраивании React в существующее приложение вы можете рендерить во столько независимых
                    корневых элементов, во сколько посчитаете нужным.
                    Для рендеринга React-элемента в корневой узел DOM вызовите ReactDOM.render() с
                    React-элементом и корневым DOM-узлом в качестве аргументов:</p>
            </div>
                    </div>
    );
}

export default SinglePost;