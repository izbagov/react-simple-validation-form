import React, { Component } from 'react';
import { Layout, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const { Content } = Layout;

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      firstname: "",
      firstnameError: "",
      lastname: "",
      lastnameError: "",
      username: "",
      usernameError: "",
      email: "",
      emailError: "",
      password: "",
      passowrdError: "",
    }
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: ""
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 },
      },
    };

    const styleLayout = {
      width: 768,
      margin: '50px auto 0',
      padding: 20
    };
    
    return (
      <Layout style={styleLayout}>
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="First name">
              <Input
                name="firstname"
                value={this.state.firstname}
                onChange={e => this.change(e)}
              />
            </FormItem>
            <FormItem {...formItemLayout} label="Last name">
              <Input
                name="lastname"
                value={this.state.lastname}
                onChange={e => this.change(e)}
              />
            </FormItem>
            <FormItem {...formItemLayout} label="Username">
            <Input
              name="username"
              value={this.state.username}
              onChange={e => this.change(e)}
            />
            </FormItem>
            <FormItem {...formItemLayout} label="E-mail">
            {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input
              name="email"
              onChange={e => this.change(e)}
            />
          )}

            </FormItem>
            <FormItem {...formItemLayout} label="Password">
              <Input
                name="password"
                value={this.state.password}
                onChange={e => this.change(e)}
              />
            </FormItem>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
            >
              Submit
            </Button>
          </Form>
        </Content>
      </Layout>
    );
  }
}

export default Form.create()(App);
