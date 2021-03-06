import React, {useState} from 'react'
import {Typography, Button, Form, message, Input, Icon, Select} from 'antd'
import FileUpload from '../../utils/FileUpload'

const { Title } = Typography
const { TextArea } = Input
const { Option } = Select

const Continents = [
    {key: 1, value: 'Africa'},
    {key: 2, value: 'Europa'},
    {key: 3, value: 'Asia'},
    {key: 4, value: 'North Amerca'},
    {key: 5, value: 'South America'},
    {key: 6, value: 'Australia'},
    {key: 7, value: 'Antarctica'},
]

function UploadProductPage() {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescrtiptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [ContinentValue, setContinentValue] = useState(1)

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescrtiptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onContinentsSelectChange = (event) => {
        setContinentValue(event.currentTarget.value)
    }

    return (
        <div style={{maxWidth:'700px', margin:'2rem auto'}}>
            <div style={{textAlign:'center', marginBottom:'2rem'}}>
                <Title level={2}>Upload Travel Product</Title>
            </div>
            

            <Form onSubmit>
                {/* DropZone */}
                <FileUpload />

                <br />
                <br />
                <label>Title</label>
                <Input 
                    onChange = {onTitleChange}
                    value = {TitleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea 
                    onChange = {onDescriptionChange}
                    value = {DescriptionValue}
                />
                <br />
                <br />
                <label>Price($)</label>
                <Input 
                    onChange = {onPriceChange}
                    value = {PriceValue}
                    type="number"
                />
                <select onChange={onContinentsSelectChange}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>
                            {item.value}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                <Button 
                    onClick
                >
                    Submit
                </Button>

            </Form>
        </div>
    )
}

export default UploadProductPage
