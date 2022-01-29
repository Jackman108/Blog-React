import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";

function Settings() {
    return (
        <div className="settings">
           <div className="settingsWrapper">
               <div className="settingsTitle">
                   <span className="settingsUpdateTitle"> Update Your Account</span>
                   <span className="settingsDeleteTitle"> Delete Account</span>
               </div>
               <form className="settingsForm">
                   <label>Profile Picture</label>
                   <div className="settingsPP">
                       <img src="https://image.winudf.com/v2/image1/Y29tLndhbGxwYXBlcnNhbm9ueW1vdXNoZC5hbm9ueW1vdXN3YWxscGFwZXJiZXN0X3NjcmVlbl84XzE1NDEwNTYzMjNfMDkz/screen-8.jpg?fakeurl=1&type=.jpg" 
                            alt="ProfilePhoto"/>
                       <label htmlFor="fileInput">
                           <i className="settingsPPIcon fas fa-user-circle"> </i>
                       </label>
                       <input type="file" id="fileInput" style={{display: "none"}}/>
                   </div>
                   <label>Username</label>
                   <input type="text" placeholder="Jack"/>
                   <label>Email</label>
                   <input type="text" placeholder="Jivatman@gmail.com"/>
                   <label>Password</label>
                   <input type="password" />
                   <button className="settingsSubmit">Update</button>
               </form>
           </div>
            <Sidebar />
        </div>
    );
}

export default Settings;