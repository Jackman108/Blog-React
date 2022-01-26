import "./write.css"

function Write() {
    return (
        <div className="write">
            <img className="writeImg"
                 src="https://arizonaphotoboothrentals.com/wp-content/uploads/2018/02/Paisley-Blue.jpg"
                 alt="Img"/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"> </i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea  typeof="text" placeholder="Tell your story..."
                              className="writeInput writeText"> </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
}

export default Write;