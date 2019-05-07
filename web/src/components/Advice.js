import styles from "./Advice.module.css";
import React, {useContext, useState} from "react";
import ThemeContext from "../contexts/ThemeContext";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export const Advice = () => {
    const {theme} = useContext(ThemeContext);
    const [hide, setHide] = useState(false);
    return <Paper elevation={1} className={styles.advice}>
        <Typography variant="h5" component="h2" onClick={() => setHide(!hide)}>
            帮助我们改进
        </Typography>
        {hide ? null :
            <div className={styles.content}>
                <Typography component="p">
                    点击下方链接，给喜欢的功能投票，或者提出您的建议！
                </Typography>
                <a href="http://feathub.com/lotosbin/xread-store" target="_blank">
                    <img className={theme === 'dark' ? styles.img_dark : styles.img} src={"http://feathub.com/lotosbin/xread-store?format=svg"} alt={"advice"}/>
                </a>
            </div>
        }
    </Paper>;
};