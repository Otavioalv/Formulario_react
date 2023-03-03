import { useState } from 'react';
import styles from './Formulario.module.css';
/* 
    Como parametro, pase color, para mudar a cor do texto, e object
    para o imput,o type e o key, e value e o nome, id, placeholder, do
    imput 
*/

/* 
    const [nome, setName] = useState();
    const meuObjeto = {
    chave1: "valor1",
    chave2: "valor2"
    };

    meuObjeto.chave3 = "valor3";

    console.log(meuObjeto);

    {
     chave1: "valor1",
    chave2: "valor2",
    chave3: "valor3"
    }
*/
function Formulary({color, object}){

    const [form, setForm] = useState({
        "email": "",
        "password": "", 
        "text": ""
    })

    const handlFormChange = (e) => {
        if(e.target.getAttribute('email') === 'otavio'){
            setForm({
                "email": e.target.value,
                "password": form.password, 
                "text": form.text
            })
        }
        else if(e.target.getAttribute('email') === 'gabriel'){
            setForm({
                "email": form.email,
                "password": form.password, 
                "text": e.target.value
            })
        }
    }

    return(
        <form className={styles.Form} style={{color: color.color}}>  
            {
                Object.entries(object).map(([key, value]) => (
                <div className={styles.Form_div}>
                    <label
                        className={styles.Form_label}
                        htmlFor={`i${value}`}
                    >{value}</label>
                    <input
                        type={key}
                        id={`i${value}`}
                        name={value}
                        placeholder={value}
                        className={styles.Form_input}
                        onChange={(e) => handlFormChange(e)}
                        style={{
                            color: color.color,
                            background: color.background,
                            boxShadow: color.boxShadowColorI
                        }}
                    />
                </div>
                ))
            }
            <div className={styles.Form_div__button}>
                <button 
                    id="b"
                    type="submit"
                    className={styles.Form_button}
                    style={{
                        color: color.color,
                        background: color.background,
                        boxShadow: color.boxShadowColorD
                    }}
                >Submit</button>
            </div>
            <h1>
                formule
            {form.email}
            {form.password}
            {form.text}
            </h1>
        </form>
    )
}

Formulary.defaultProps = {
    color: {
        background: "linear-gradient(145deg, #121a27, #151f2e)",
        boxShadowColorD: "1cqmin 1cqmin 2cqmin #080c11,-1cqmin -1cqmin 2cqmin #202e45",
        boxShadowColorI: "inset 1cqmin 1cqmin 1.8cqmin #080c11,inset -1cqmin -1cqmin 1.8cqmin #202e45",
        color: "#fff"
      },
    object: {text: "Insira um texto"},
}

export default Formulary