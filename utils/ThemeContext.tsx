import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  color: string;
  setColor: (color: string) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
  projectName: string;
  setProjectName: (name: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");
  const [color, setColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(14);
  const [projectName, setProjectName] = useState("My Project");

  // Load from localStorage only on client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(localStorage.getItem("theme") || "light");
      setColor(localStorage.getItem("color") || "#ffffff");
      setFontSize(Number(localStorage.getItem("fontSize")) || 14);
      setProjectName(localStorage.getItem("projectName") || "My Project");
    }
  }, []);

  // Save to localStorage when values change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      localStorage.setItem("color", color);
      localStorage.setItem("fontSize", String(fontSize));
      localStorage.setItem("projectName", projectName);
    }
  }, [theme, color, fontSize, projectName]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        color,
        setColor,
        fontSize,
        setFontSize,
        projectName,
        setProjectName,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
