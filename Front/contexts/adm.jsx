'use client'
import { createContext, useState } from "react"

export const AdmContext = createContext()

function AdmProvider({children}) {

  let inicial_id = null
  let inicial_usuario = ""

  if (localStorage.getItem("adm_logado")) {
    const adm = JSON.parse(localStorage.getItem("adm_logado"))
    inicial_id = adm.id
    inicial_usuario = adm.usuario
  }

  const [admId, setAdmId] = useState(inicial_id)
  const [admUsuario, setAdmUsuario] = useState(inicial_usuario)

  function mudaId(id) {
    setAdmId(id)
  }

  function mudaUsuario(usuario) {
    setAdmUsuario(usuario)
  }

  return (
    <AdmContext.Provider value={{admId, admUsuario, mudaId, mudaUsuario}}>
      {children}
    </AdmContext.Provider>
  )
}

export default AdmProvider