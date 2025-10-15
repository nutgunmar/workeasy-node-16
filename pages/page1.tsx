import AdminLayout from "../layouts/AdminLayout";
import { useTheme } from "../utils/ThemeContext";
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Page1() {
  const { color, fontSize } = useTheme();

  return (
    <AdminLayout>
      <Card
        title={<Title level={3}>Page 1</Title>}
        style={{ color, fontSize: `${fontSize}px` }}
        className="card"
      >
        <Paragraph>เนื้อหาของหน้า 1 ที่ออกแบบให้สวยงามด้วย Card</Paragraph>
      </Card>
    </AdminLayout>
  );
}
