import styles from "./CheckBox.module.css"

function CheckBox({id , onClick, color}){
    return(
        <div class={styles.checkbox_apple}>
            <input 
                class={styles.yep} 
                id={id} 
                type="checkbox"
                onClick={onClick}
            />
            <label 
                htmlFor={id}
                style={{
                    color: color.color,
                    background: color.background,
                    boxShadow: color.boxShadowColorI
                }}
            ></label>
        </div>
    )
}

CheckBox.defaultProps = {
    id: "check_apple",
    onClick: "none",
    color: {
        background: "linear-gradient(145deg, #121a27, #151f2e)",
        boxShadowColorD: "1cqmin 1cqmin 2cqmin #080c11,-1cqmin -1cqmin 2cqmin #202e45",
        boxShadowColorI: "inset 1cqmin 1cqmin 1.8cqmin #080c11,inset -1cqmin -1cqmin 1.8cqmin #202e45",
        color: "#fff"
      }
}

export default CheckBox