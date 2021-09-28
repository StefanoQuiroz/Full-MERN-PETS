import React, { useContext } from 'react';
import {Container, Table, Col, Row} from 'reactstrap';
import { MyContext } from '../App';
import { MdDelete } from "react-icons/md";
import { BsPencil } from "react-icons/bs";


const Detail = () => {
    const {datos} = useContext(MyContext);
    return (
        <Container style={{alignItems: 'center', justifyContent: 'center'}}>
            <Table striped>
                <thead>
                    <tr>
                        <th style={{textAlign: 'center'}}>Acciones</th>
                        <th style={{textAlign: 'center'}}>Tipo</th>
                        <th style={{textAlign: 'center'}}>Nombre</th>
                        <th style={{textAlign: 'center'}}>Tamaño</th>
                        <th style={{textAlign: 'center'}}>Color</th>
                        <th style={{textAlign: 'center'}}>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {datos&&datos.map((items, index) => (
                        <tr key={index}>
                            <td style={{textAlign: 'center'}}>
                                <Row>
                                    <Col md={6}>
                                        <MdDelete/>
                                    </Col>
                                    <Col md={6}>
                                        <BsPencil/>
                                    </Col>
                                </Row>
                            </td>
                            <td style={{textAlign: 'center'}}>{items.tipo}</td>
                            <td style={{textAlign: 'center'}}>{items.nombre}</td>
                            <td style={{textAlign: 'center'}}>{items.tamanho}</td>
                            <td style={{textAlign: 'center'}}>{items.color}</td>
                            <td style={{textAlign: 'center'}}>{items.fecha}</td>
                        </tr>
                    ))}
                </tbody>
            </Table> 
        </Container>
    );
}

export default Detail;
