import { useState } from "react";
import axios from 'axios';
const Name = () => {
    const [info, setInfo] = useState(null);
    const [name, setName] = useState();
    const [state, setState] = useState(false);
    const getInfo = async () => {
        setState(true);
        const param = {
            name: name
        }
        const nameInfo = await axios({
            url: 'https://api.nationalize.io',
            method: 'get',
            params: param,
        });
        console.log(nameInfo, 'nameInfo');
        if (nameInfo.status == 200) {
            setInfo(nameInfo.data.country)
        } else {
            console.log('Error!');
            setState(false);
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="col-12 bg-dark rounded shadow p-4" style={{ marginTop: "100px", height: "auto" }}>
                        <input type={'text'} className="form-control" placeholder="Введите имя..." onChange={(e) => { setName(e.target.value) }} />
                        <button className="btn btn-success mt-2" onClick={getInfo}>Получить информацию</button>
                        {state ?
                            <>
                                <p className="text-light mt-2">Информация</p>
                                <hr className="bg-light" />
                                {info != null ?
                                    <>
                                        {info.map((item) =>
                                            <p className="text-light">Страна: {item.country_id} Вероятность: {item.probability}</p>
                                        )
                                        }
                                    </>
                                    :
                                    <>
                                        <p className="text-white">Загрузка данных...</p>
                                    </>
                                }
                            </>
                            : <></>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Name;