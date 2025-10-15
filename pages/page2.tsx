import AdminLayout from "../layouts/AdminLayout";
import { useTheme } from "../utils/ThemeContext";
import { Card } from "antd";

export default function Page1() {
  const { color, fontSize } = useTheme();

  return (
    <AdminLayout>
      <Card
        title="Page 2"
        style={{ color, fontSize: `${fontSize}px` }}
        className="card"
      >
        <p>เนื้อหาของหน้า 2 ที่ออกแบบให้สวยงามด้วย Card</p>
      </Card>
    </AdminLayout>
  );
}
