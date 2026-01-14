import { useEffect } from "react";

const CapturePage = () => {
  useEffect(() => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.id = "completed";
      document.body.appendChild(div);
    }, 3000);
  }, []);

  return (
    <div
      id="capture-area"
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "skyblue",
        fontSize: 32,
      }}
    >
      캡처 영역
    </div>
  );
};
export default CapturePage;
