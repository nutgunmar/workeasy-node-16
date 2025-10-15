import AdminLayout from "../layouts/AdminLayout";
import { Form, Input, Select, Button, Slider, Card } from "antd";
import { ChromePicker } from "react-color";
import React from "react";
import { useTheme } from "../utils/ThemeContext";

export default function Settings() {
  const {
    theme,
    setTheme,
    color,
    setColor,
    fontSize,
    setFontSize,
    projectName,
    setProjectName,
  } = useTheme();

  const handleColorChange = (newColor) => setColor(newColor.hex);

  return (
    <AdminLayout>
      <Card title="Settings" className="card">
        <Form layout="vertical">
          <Form.Item label="Project Name">
            <Input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Theme">
            <Select value={theme} onChange={setTheme}>
              <Select.Option value="light">Light</Select.Option>
              <Select.Option value="dark">Dark</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label={`Font Size: ${fontSize}px`}>
            <Slider
              min={12}
              max={24}
              value={fontSize}
              onChange={setFontSize}
              marks={{ 12: "12px", 16: "16px", 20: "20px", 24: "24px" }}
            />
          </Form.Item>
          <Form.Item label="Primary Color">
            <ChromePicker color={color} onChange={handleColorChange} />
            <div style={{ marginTop: 10 }}>
              Presets:
              <Button
                style={{ background: "#ff0000", marginRight: 5 }}
                onClick={() => setColor("#ff0000")}
              />
              <Button
                style={{ background: "#00ff00", marginRight: 5 }}
                onClick={() => setColor("#00ff00")}
              />
              <Button
                style={{ background: "#0000ff" }}
                onClick={() => setColor("#0000ff")}
              />
            </div>
          </Form.Item>
          <Button type="primary">Save Settings</Button>
        </Form>
      </Card>
    </AdminLayout>
  );
}
