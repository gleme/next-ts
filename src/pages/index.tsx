import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
} from 'antd';

const { Item } = Form;
const { Option } = Select;

const Home = () => (
  <div style={{ marginTop: 100 }}>
    <Form layout="horizontal">
      <Item
        label="Input Number"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <InputNumber
          size="large"
          min={1}
          max={10}
          style={{ width: 100 }}
          defaultValue={3}
          name="inputNumber"
        />
        <a href="/">Link</a>
      </Item>

      <Item label="Switch" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Switch defaultChecked />
      </Item>

      <Item label="Slider" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Slider defaultValue={70} />
      </Item>

      <Item label="Select" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Select
          size="large"
          defaultValue="lucy"
          style={{ width: 192 }}
        >
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" disabled>
            disabled
          </Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>
      </Item>

      <Item
        label="DatePicker"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <DatePicker name="startDate" />
      </Item>
      <Item style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
        <Button size="large" type="primary" htmlType="submit">
          OK
        </Button>
        <Button size="large" style={{ marginLeft: 8 }}>
          Cancel
        </Button>
      </Item>
    </Form>
  </div>
);

export default Home;
