import styles from './Formulario.module.css';

function Formulary({color}){
    return(
        <>
            <form className={styles.Form} style={{color: color}}>  
                <div className={styles.Form_div}>
                   <label 
                    htmlFor="iEmail" 
                    className={styles.Form_label}
                >Email</label> 
                   <input 
                    type="email" 
                    id="iEmail" 
                    name="nEmail"
                    placeholder="Email"
                    className={styles.Form_input}
                    style={{color: color}}/>
                </div>
                <div className={styles.Form_div}>
                   <label htmlFor="iPassword" className={styles.Form_label}>Password</label> 
                   <input 
                    type="password" 
                    id="iPassword" 
                    name="nPassword"
                    placeholder="Password"
                    className={styles.Form_input}
                    style={{color: color}}/>
                </div>
                <div className={styles.Form_div}>
                   <label htmlFor="iName" className={styles.Form_label}>Name</label> 
                   <input 
                    type="text" 
                    id="iName" 
                    name="nName"
                    placeholder="Name"
                    className={styles.Form_input}
                    style={{color: color}}/>
                </div>
            </form>
        </>
    )
}

Formulary.defaultProps = {
    color: "#fff"
}

export default Formulary