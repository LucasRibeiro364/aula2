import { useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
import Api from '../config/Api'
import { useNavigate } from "react-router-dom"
const FormUsuarios = () => {

    const navidate = useNavigate();
    useEffect(() => {
    }, []);
     return (
        <LayoutDefault>
            Formulário de Usuários

            <button className="btn btn-warning btn-sm" onClick={() => navidate('/usuarios')}>
                cancelar
            </button>
        </LayoutDefault>
    )
}

export default FormUsuarios