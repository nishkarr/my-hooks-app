import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DataDropdown from './components/DataDropdown'
import { Container, Row, Col } from 'reactstrap'
import './App.css'
import DataService from './DataService';

function App() {
    const [data, setData] = useState([])
    const [selectedItem, setSelectedItem] = useState(null)

    useEffect(()=>{
      console.log("Running effect")
      const ds = new DataService();
      ds.getPeople().then((data)=>{
        setData(data);
      });
    })

    const handleSelectedItemChange = (key) => {
        const ds = new DataService();
        ds.findPerson(key).then(p => {
          setSelectedItem(p)
        })
    } 

    return (
        <Container>
          <Row>
            <Col md={6}>
              <DataDropdown data={data} onSelectedItemChange={handleSelectedItemChange} />
            </Col>
          </Row>
          { selectedItem?
            <>
              <Row>
                <Col md={3}>Name</Col><Col md={3}>{ selectedItem.name }</Col>
              </Row> 
              <Row>
                <Col md={3}>DOB</Col><Col md={3}>{ selectedItem.dob }</Col>
              </Row> 
              <Row>
                <Col md={3}>Car</Col><Col md={3}>{ selectedItem.car }</Col>
              </Row> 
              <Row>
                <Col md={3}>Reg</Col><Col md={3}>{ selectedItem.reg }</Col>
              </Row> 
            </> : null
          }
        </Container>
    
    )
}

export default App;
