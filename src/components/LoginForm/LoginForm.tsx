import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "./api-client";
import { saveToken, decodeToken } from "./tokenUtils";

interface LoginFormValues {
  email: string;
  password: string;
}
interface Props {
  onSwitchForm: () => void;
}
const LoginForm = ({ onSwitchForm }: Props) => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken.isAdmin) {
        console.log("Admin");
        // Redirect to the admin page
      } else {
        console.log("home");
        // Redirect to the home page
      }
    }
  }, []);

  const onFinish = async (values: LoginFormValues) => {
    try {
      const response = await login(values);
      const token = response.data;
      console.log(token); // Handle the token as needed
      message.success("Login successful!");

      saveToken(token);

      const decodedToken = decodeToken(token);

      if (decodedToken.isAdmin) {
        console.log("Admin");
        // Redirect to the admin page
      } else {
        console.log("User");
        // Redirect to the home page
      }
    } catch (error: any) {
      if (error?.response?.status === 403) {
        message.warning("Invalid credentials");
      } else {
        message.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className={`flex justify-center items-center h-screen `}>
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
          <h2 className={`text-2xl font-bold mb-4 `}>Log In</h2>
          <Form
            name="loginForm"
            className="space-y-4"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-500" />}
                placeholder="Email"
                className="rounded"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
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
                className={`w-full bg-blue-500 hover:bg-blue-700 `}
                style={{
                  borderRadius: "4px",
                }}
              >
                Log In
              </Button>
              <Button
                onClick={onSwitchForm}
                className="w-full rounded bg-green-400 hover:bg-green-600 mt-4"
                style={{
                  borderRadius: "4px",
                  color: "white",
                }}
              >
                SignUp
              </Button>
            </Form.Item>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
