import {useNavigate} from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../Images/chrisPortrait.jpg'

function NavBar() {
    const navigate = useNavigate();
    return (
    <div className= {styles.NavBar}>
            <div className= {styles.LeftBar}
                 onClick = {() => {navigate("")}}>
                <img className = {styles.MainLogo}src={logo} alt ="Logo"></img>
                <h1 className = {styles.ChrisName}> Christopher Mahy Physio</h1>
            </div>
            <div className= {styles.RightBar} >
                <div className= {styles.NavChild}
                     onClick = {() => {navigate("who")}}>
                    <p>Who Am I?</p> 
                </div>
                <div className = {styles.NavChild}
                     onClick = {() => {navigate("contact")}}>
                    <p>Get in Contact</p>
                </div>
                <div className = {styles.NavChild}
                     onClick = {() => {navigate("qualifications")}}>
                    Qualifications
                </div>
            </div>
    </div>
    );
}

export default NavBar;