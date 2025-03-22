import { useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
import { Table } from 'react-bootstrap'
import Api from '../config/Api'

const Usuarios = () => {
    const [lista, setLista] = useState([

    ]);

    async function listarUsuarios() {
        // const response = await fetch('https://fakestoreapi.com/users')
        // const dados = await response.json()
        // setLista(dados)

        const response = await Api.get('users');
        setLista(response.data)
    }

    useEffect(() => {
        listarUsuarios()
    }, []);
    console.log(lista)
    // https://dontpad.com/fs21
    return (
        <LayoutDefault>
            <h4>Usuários</h4>
            <hr />
            <input type="text" className="form-control" placeholder="Pesquisar" />
            {lista.length === 0 && 'Não há produtos.'}
            <Table hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>EMAIL</th>
                        <th>USERNAME</th>
                        <th>PASSWORD</th>
                        <th>FIRSTNAME</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((item, indice) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.name.firstname}</td>
                            <td>{item.phone}</td>
                            <td>
                                <button className="btn btn-primary">Editar</button>
                                <button className="btn btn-danger">Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </LayoutDefault>
    )
}

export default Usuarios