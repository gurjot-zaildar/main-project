/*eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState } from 'react'


export const recipecontext = createContext(null);

const RecipeContext = (props) => {
    const[data,setdata]=useState([
      // {
      //   id: 1,
      //   image: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //   title: "rasna",
      //   category : "cat-1",
      //   chef: "gurjot singh",
      //   description: "gjhqsgdliqh nkjmklb jqdijhoi; jhqdoihoqpw jqowidhoihq hoqhwdoipq h dohqoh qwhdohdhwq[",
      //   ingredients: "trwyudgwul qowhdih 2qi jkl; 'k hdlkiqhdi2 ihg2euiugd p8qphdpu p qpwidhp dpi2hdp2hd "
      // }
    ]);

    useEffect(()=>{
      setdata(JSON.parse(localStorage.getItem("recipes"))|| [])
    },[])

    console.log(data)
  return (
    <recipecontext.Provider value={{data,setdata}}>
      {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext
