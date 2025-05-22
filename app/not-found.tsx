export default function NotFound() {
  return (
    <html>
      <head>
        <title>페이지를 찾을 수 없습니다</title>
      </head>
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "0 1rem",
            textAlign: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "3.75rem",
                fontWeight: "bold",
                color: "#3b82f6",
                marginBottom: "1rem",
              }}
            >
              404
            </h1>
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: "semibold",
                marginBottom: "1rem",
              }}
            >
              페이지를 찾을 수 없습니다
            </h2>
            <p
              style={{
                color: "#6b7280",
                marginBottom: "2rem",
              }}
            >
              요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            </p>
            <a
              href="/"
              style={{
                display: "inline-block",
                backgroundColor: "#3b82f6",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                textDecoration: "none",
                fontWeight: "medium",
              }}
            >
              홈으로 돌아가기
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
