import { Form, Input, Button, message } from "antd";
import { motion } from "framer-motion";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { signup } from "./api-client";
import {
  emailPattern,
  namePattern,
  passwordPattern,
} from "../../constants/pattern";

interface Props {
  onSwitchForm: () => void;
}

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
}

const SignupForm = ({ onSwitchForm }: Props) => {
  const onFinish = async (values: SignupFormValues) => {
    try {
      const response = await signup(values);
      const user = response.data;
      console.log(user); // Handle the user data as needed
      message.success("Signup successful!");
    } catch (error: any) {
      if (error instanceof Error) {
        message.error(`User Already Exist${error.message}`);
      } else if (error?.response?.status === 400) {
        message.warning(error.response.data.error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-8"
        style={{
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className={`w-full max-w-md bg-white rounded-lg shadow-lg p-8 `}>
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <Form
            name="signupForm"
            className="space-y-4"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            labelCol={{ span: 24 }} // Set label width to 100%
            wrapperCol={{ span: 24 }} // Set input field width to 100%
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please enter your name!" },
                {
                  pattern: namePattern,
                  message: "Please enter a valid name!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-500" />}
                placeholder="Name"
                className="rounded"
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                {
                  pattern: emailPattern,
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-500" />}
                placeholder="Email"
                className="rounded"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
                {
                  pattern: passwordPattern,
                  message: "Password must be at least 8 characters long",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-500" />}
                placeholder="Password"
                className="rounded"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full rounded bg-blue-500 hover:bg-blue-700"
                style={{
                  borderRadius: "4px",
                }}
              >
                Sign Up
              </Button>
              <Button
                onClick={onSwitchForm}
                className="w-full rounded bg-green-400 hover:bg-green-600 mt-4"
                style={{
                  borderRadius: "4px",
                  color: "white",
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupForm;
