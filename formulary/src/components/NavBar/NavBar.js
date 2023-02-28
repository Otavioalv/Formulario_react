import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import styles from "./NavBar.module.css"

function NavBar({object, color}){
    return(
        <div className={styles.div}>
            <Router>

            <ul className={styles.List}>
                <div 
                    className={styles.List_div}
                    style={{
                        color: color.color,
                        background: color.background,
                        boxShadow: color.boxShadowColorI
                    }}
                >
                {
                    Object.entries(object).map(([key, value]) => (
                        <li 
                            className={styles.List_itens}
                            style={{
                                color: color.color,
                                background: color.background,
                                boxShadow: color.boxShadowColorD
                            }}
                        >
                            <Link 
                                to={key}
                                style={{
                                    textDecoration: 'none', 
                                    color: color.color
                                }}
                            >{key}</Link>
                        </li>
                    ))
                }
                </div>
            </ul>
            
            <Routes>
                {
                    Object.entries(object).map(([key, value]) => (
                        <Route
                            path={`/${key}`}
                            element={value}
                        />
                    ))
                } 
            <Route
                element={object[0]}
            />
            </Routes>
        </Router>
      </div>
    )
}

NavBar.defaultProps ={
    object: {Home: <h1>Conteude de home</h1>, Conteudo: <h1>Conteudo de Conteudo</h1>},
    color: {
        background: "linear-gradient(145deg, #121a27, #151f2e)",
        boxShadowColorD: "1cqmin 1cqmin 2cqmin #080c11,-1cqmin -1cqmin 2cqmin #202e45",
        boxShadowColorI: "inset 1cqmin 1cqmin 1.8cqmin #080c11,inset -1cqmin -1cqmin 1.8cqmin #202e45",
        color: "#fff"
    }
}

export default NavBar