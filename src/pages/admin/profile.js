import React, { useState, useContext } from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowDataAdmin from '../../components/RowDataAdmin';
import style from '../../styles/AdminProfile.module.css';
import Head from 'next/head';
import { AuthContext } from '../../contexts/auth';
import { UserContext, update } from '../../contexts/user';
import { useForm } from 'react-hook-form'

const AdminProfile = ({ data }) => {
    const [password, setPassword] = useState(false);
    const { isLogged, user } = useContext(AuthContext)
    const { update } = useContext(UserContext)
    const { handleSubmit, register } = useForm();

    async function handleUpdate(data) {
        try {
            await update(user._id, data).then(json => console.log(json))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {isLogged && user.role == "administrator" ?
                <>
                    <Head>
                        <title>Perfil - Beneficiário Prime</title>
                    </Head>
                    <div className={`${style.body}`}>
                        <div className="container pt-5">
                            <div className="card card-body mb-3">
                                <div className={`${style.title}`}>
                                    Olá, {user.name}
                                </div>
                            </div>
                            <RowDataAdmin>
                                <form onSubmit={handleSubmit(handleUpdate)}>
                                    <div className="row">
                                        {/* <div className="col-12 col-md-4">
                                            <div className="d-flex justify-content-center">
                                                <img src="https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/10/medico-duvidas2.jpg?quality=70&strip=all" width="200px" className="me-4 rounded float-start" alt={`Foto de ${user.name}`} />
                                            </div>
                                            <div className="text-center">
                                                <a className="btn">Alterar imagem</a>
                                            </div>
                                        </div> */}
                                        <div className="col-12 col-md-8">
                                            <FloatingLabels value={user.name} title="Nome completo" placeholder="Nome completo" name="name" register={{ ...register('name') }} />
                                            <FloatingLabels defaultValue={user.email} title="Email" placeholder="Email" name="email" register={{ ...register('email') }} />
                                            <div className="row">
                                                <div className="col-12 col-md">
                                                    <FloatingLabels title="Cargo" placeholder="Cargo" defaultValue={user.role} name="role" register={{ ...register('role') }} />
                                                </div>
                                                <div className="col">
                                                    <FloatingLabels title="Telefone" placeholder="Telefone" defaultValue={user.phone} name="phone" register={{ ...register('phone') }} />
                                                </div>
                                            </div>
                                            <a className={`btn mb-3 ${style.btnPassword} ${password && style.btnPasswordClick}`} onClick={() => setPassword(!password)}>Alterar senha</a>
                                        </div>
                                        {password &&
                                            <>
                                                <div className="col-12 col-md-6">
                                                    <FloatingLabels title="Senha atual" />
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <FloatingLabels title="Alterar senha" />
                                                    <FloatingLabels title="Repetir senha" />
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <div className="d-flex justify-content-center mt-4">
                                        <button className="btn btn-primary" type="submit">Salvar</button>
                                    </div>
                                </form>
                            </RowDataAdmin>
                        </div>
                    </div>
                </> : <> </>
            }

        </>
    )
}

export default AdminProfile
