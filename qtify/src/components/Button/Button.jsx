import React from "react";
import styles from "./Button.module.css";

const Button = ({text,onclick})=>{
    return (
        <Button className={styles.feedbackButton} onclick={onclick}>
            {text}
        </Button>
    );
};


export default Button;