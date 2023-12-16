'use client'
import Link from 'next/link'
import './login.css'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AdmContext } from '@/contexts/adm'
import { useRouter } from 'next/navigation'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const { mudaId, mudaUsuario } = useContext(AdmContext)

  const router = useRouter()

  async function verificaLogin(data) {
//    console.log(data)
    const login = `usuario=${data.usuario}&senha=${data.senha}`
    const response = await fetch(`http://localhost:3004/adm?${login}`)
    const adm = await response.json()
    if (adm.length == 0) {
      alert("Esse Admin nao existe")
    } else {
      // alert("Ok!")
      mudaId(adm[0].id)
      mudaUsuario(adm[0].usuario)
      localStorage.setItem("adm_logado", JSON.stringify({id: adm[0].id, usuario: adm[0].usuario}))
      router.push("/")
    }
  }

  return (
    <main class="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit(verificaLogin)}>
        <h1 class="h3 mb-3 fw-normal mt-5">Admin Login</h1>

        <div class="form-floating">
          <input type="usuario" class="form-control" id="floatingInput"  
           required {...register("usuario")} />
          <label for="floatingInput">Usuario</label>
        </div>
        <div class="form-floating mt-3">
          <input type="password" class="form-control" id="floatingPassword"  
            required {...register("senha")} />
          <label for="floatingPassword">Senha de Acesso</label>
        </div>

        <button class="btn btn-info w-100 py-2" type="submit">Entrar</button>
      </form>
    </main>
  )
}