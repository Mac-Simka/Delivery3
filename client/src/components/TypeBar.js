import {Context} from "../index";
import {Card, Row} from "react-bootstrap"
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import Col from "react-bootstrap/Col";

const TypeBar= observer(() =>{
    const {store} =useContext(Context)

    return(
        <Col className='d-flex' style={{cursor:'default'}}>
            {store.types.map(type =>
                <Card
                    onClick={()=>{store.selectedType.id === type.id ?
                        store.setSelectedType({}):
                        store.setSelectedType(type)}}
                    border= {type.id === store.selectedType.id ? 'warning' : 'light'}
                    style={{cursor:'pointer'}}
                    key ={type.id}
                    className="me-4 p-2 px-4"
                >
                    {type.name}
                </Card>
            )}
        </Col>
    )
    }

)

export default TypeBar