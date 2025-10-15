import AdminLayout from "../layouts/AdminLayout";
import { useTheme } from "../utils/ThemeContext";

export default function Page1() {
  const { color, fontSize } = useTheme();

  return (
    <AdminLayout>
      <h1 style={{ color, fontSize: `${fontSize}px` }}>Page 1 Content</h1>
      <p>เนื้อหาของหน้า 1 (ใช้สีและขนาดตัวอักษรจาก ThemeContext)</p>
    </AdminLayout>
  );
}
