import React, { useState, useContext, useEffect } from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowDataPatient from '../../components/RowDataPatient';
import style from '../../styles/AdminProfile.module.css';
import { AuthContext } from '../../contexts/auth';
import { update, UserContext } from '../../contexts/user';
import { useForm, Controller } from 'react-hook-form'
import InputMask from "react-input-mask";
import Head from 'next/head';


const PatientProfile = ({ data }) => {
    const [password, setPassword] = useState(false);
    const [formattedBirthDate, setFormattedBirthDate] = useState("0000-00-00")
    const [isDisabledPerson, setIsDisabledPerson] = useState(false)
    const { isLogged, user } = useContext(AuthContext)
    const { handleSubmit, register, control } = useForm();
    const { update } = useContext(UserContext)

    async function handleUpdate(data) {
        try {
            await update(user._id, data).then(json => {
                console.log(json)
                location.reload()
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(function () {

        console.log(user)

        if (user.birthDate) {
            let currentDate = user.birthDate.substring(0, 10)
            setFormattedBirthDate(currentDate)
        }
    }, [user])

    const [dataCEP, setDataCEP] = useState({
        cep: '',
        bairro: '',
    })

    const handleClickDP = () => {
        setIsDisabledPerson(!isDisabledPerson)
    }

    const getInformacoes = (e) => {
        const { value } = e.target;

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then((data) => console.log(data));
    }

    return (
        <>
            {isLogged && user.role == "patient" ?
                <>
                    <Head>
                        <title>Perfil - Benefici??rio Prime</title>
                    </Head>
                    <div className={`${style.body} mb-5`}>
                        <div className="container pt-5">
                            <div className="card card-body mb-3">
                                <div className={`${style.title}`}>
                                    Ol??, {user.name}
                                </div>
                            </div>
                            <RowDataPatient>
                                <form onSubmit={handleSubmit(handleUpdate)}>
                                    <div className="row">
                                        <div className="col-12 col-md-8">
                                            <FloatingLabels defaultValue={user.name} title="Nome completo" placeholder="Nome completo" name="name" register={{ ...register('name') }} />
                                            <FloatingLabels defaultValue={user.email} title="Email" placeholder="Email" name="email" register={{ ...register('email') }} />
                                            <div className="row">
                                                <div className="col-12 col-md">
                                                    <Controller
                                                        name="gender"
                                                        control={control}
                                                        rules={{ required: true }}
                                                        defaultValue={user.gender}
                                                        render={({ field }) => <div className="form-floating mb-3">
                                                            <select {...field} className="form-select" id="floatingSelect" aria-label="Selecione o G??nero">
                                                                <option selected>Selecione</option>
                                                                <option value="M">Masculino</option>
                                                                <option value="F">Feminino</option>
                                                                <option value="indeterminado">Indeterminado</option>
                                                            </select>
                                                            <label for="floatingSelect">G??nero</label>
                                                        </div>}
                                                    />
                                                    <FloatingLabels title="Data de Nascimento" type="date" placeholder="Data de Nascimento" defaultValue={formattedBirthDate} name="birthDate" register={{ ...register('birthDate') }} />
                                                </div>
                                                <div className="col-12 col-md">
                                                    <Controller
                                                        render={({ field }) =>
                                                            <div className="form-floating mb-3">
                                                                <InputMask id="cpf" mask="999.999.999-99" {...field} className="form-control" disabled />
                                                                <label for="cpf">CPF</label>
                                                            </div>
                                                        }
                                                        control={control}
                                                        defaultValue={user.cpf}
                                                        name="cpf"
                                                        rules={{ required: true }}
                                                    />
                                                    <Controller
                                                        render={({ field }) =>
                                                            <div className="form-floating mb-3">
                                                                <InputMask id="phone" mask="+55 (99) 99999-9999" {...field} className="form-control" />
                                                                <label for="phone">Celular</label>
                                                            </div>
                                                        }
                                                        control={control}
                                                        defaultValue={user.phone}
                                                        name="phone"
                                                        rules={{ required: true }}
                                                    />
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
                                                    <FloatingLabels title="Alterar senha" name="password" register={{ ...register('password') }} />
                                                    <FloatingLabels title="Repetir senha" />
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <div className="row mb-v">
                                        <div className="col-6 col-md-3">
                                            {/* <FloatingLabels type="text" title="Peso" placeholder="Peso" name="weight" defaultValue={user.weight} register={{ ...register('weight') }} /> */}
                                            <Controller
                                                        render={({ field }) =>
                                                            <div className="form-floating mb-3">
                                                                <InputMask id="weight" placeholder="Peso" mask="KG 99,99" {...field} className="form-control" />
                                                                <label for="weight">Peso</label>
                                                            </div>
                                                        }
                                                        control={control}
                                                        defaultValue={user.weight}
                                                        name="weight"
                                                        rules={{ required: true }}
                                                    />
                                        </div>
                                        <div className="col-6 col-md-3">
                                            {/* <FloatingLabels type="text" title="Altura" placeholder="Altura" name="height" defaultValue={user.height} register={{ ...register('height') }} /> */}
                                            <Controller
                                                        render={({ field }) =>
                                                            <div className="form-floating mb-3">
                                                                <InputMask id="height" placeholder="Altura" mask="9,99" {...field} className="form-control" />
                                                                <label for="height">Altura</label>
                                                            </div>
                                                        }
                                                        control={control}
                                                        defaultValue={user.height}
                                                        name="height"
                                                        rules={{ required: true }}
                                                    />
                                        </div>
                                        <div className="col col-md-12 mb-5">
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" type="checkbox" checked={isDisabledPerson} onClick={handleClickDP} name="disabledPerson" id="deficiencia" defaultChecked={user.disabledPerson}  {...register('disabledPerson')} />
                                                <label className="form-check-label" for="deficiencia">
                                                    Possui alguma defici??ncia?
                                                </label>
                                            </div>
                                            {isDisabledPerson &&
                                                <FloatingLabels type="text" title="Qual?" placeholder="Qual?" name="" defaultValue=""
                                                // register={{ ...register('weight') }}
                                                />
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-3">
                                            <Controller
                                                render={({ field }) =>
                                                    <div className="form-floating mb-3">
                                                        <InputMask id="cep" mask="99999-999" {...field} className="form-control" />
                                                        <label for="cep">CEP</label>
                                                    </div>
                                                }
                                                control={control}
                                                defaultValue={user.zipCode}
                                                name="zipCode"
                                            />
                                        </div>
                                        <div className="col-12 col-md-7">
                                            <FloatingLabels name="street" id="logradouro" maxLength="120" type="text" title="Endere??o" placeholder="Endere??o" defaultValue={user.street} register={{ ...register('street') }} />
                                        </div>
                                        <div className="col-5 col-md-2">
                                            <FloatingLabels name="number" id="numero" type="text" maxLength="8" title="N??" placeholder="N??" defaultValue={user.number} register={{ ...register('number') }} />
                                        </div>
                                        <div className="col-7 col-md-3">
                                            <FloatingLabels id="complemento" type="text" maxLength="40" title="Complemento" placeholder="Complemento" />
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <FloatingLabels name="district" maxLength="120" id="bairro" type="text" title="Bairro" placeholder="Bairro" defaultValue={user.district} register={{ ...register('district') }} />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <FloatingLabels name="city" id="cidade" maxLength="30" type="text" title="Cidade" placeholder="Cidade" defaultValue={user.city} register={{ ...register('city') }} />
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <Controller
                                                name="state"
                                                control={control}
                                                rules={{ required: true }}
                                                defaultValue={user.state}
                                                render={({ field }) => <div className="form-floating mb-3">
                                                    <select {...field} className="form-select" id="uf" aria-label="Estado" defaultValue={user.state} >
                                                        <option selected>Estado</option>
                                                        <option value="AC">Acre</option>
                                                        <option value="AL">Alagoas</option>
                                                        <option value="AP">Amap??</option>
                                                        <option value="AM">Amazonas</option>
                                                        <option value="BA">Bahia</option>
                                                        <option value="CE">Cear??</option>
                                                        <option value="DF">Distrito Federal</option>
                                                        <option value="ES">Esp??rito Santo</option>
                                                        <option value="GO">Goi??s</option>
                                                        <option value="MA">Maranh??o</option>
                                                        <option value="MT">Mato Grosso</option>
                                                        <option value="MS">Mato Grosso do Sul</option>
                                                        <option value="MG">Minas Gerais</option>
                                                        <option value="PA">Par??</option>
                                                        <option value="PB">Para??ba</option>
                                                        <option value="PR">Paran??</option>
                                                        <option value="PE">Pernambuco</option>
                                                        <option value="PI">Piau??</option>
                                                        <option value="RJ">Rio de Janeiro</option>
                                                        <option value="RN">Rio Grande do Norte</option>
                                                        <option value="RS">Rio Grande do Sul</option>
                                                        <option value="RO">Rond??nia</option>
                                                        <option value="RR">Roraima</option>
                                                        <option value="SC">Santa Catarina</option>
                                                        <option value="SP">S??o Paulo</option>
                                                        <option value="SE">Sergipe</option>
                                                        <option value="TO">Tocantins</option>
                                                    </select>
                                                    <label>Estado</label>
                                                </div>}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-4">
                                        <button className="btn btn-primary" type="submit">Salvar</button>
                                    </div>
                                </form>
                            </RowDataPatient>
                            <div></div>
                        </div>
                    </div>
                </> : <> </>
            }
        </>
    )
}


export default PatientProfile
