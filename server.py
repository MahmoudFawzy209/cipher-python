import base64
import http.server
import json
import os
import socketserver
import subprocess

PORT = 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(BASE_DIR)


def read_env_key(key_name):
    env_path = os.path.join(BASE_DIR, ".env")
    if not os.path.exists(env_path):
        return ""
    try:
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line.startswith(key_name + "="):
                    return line.split("=", 1)[1].strip()
    except Exception:
        pass
    return ""


def git_auto_sync(message):
    try:
        subprocess.run(["git", "add", "."], cwd=BASE_DIR, check=False)
        subprocess.run(["git", "commit", "-m", message], cwd=BASE_DIR, check=False)
        subprocess.Popen(["git", "push", "origin", "main"], cwd=BASE_DIR)
    except Exception:
        pass


class CipherAdminHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith("/api/local-config"):
            self._send_json(200, {"ok": True, "geminiKey": read_env_key("GEMINI_API_KEY")})
            return
        super().do_GET()

    def do_POST(self):
        content_length = int(self.headers.get("Content-Length", 0))
        raw_body = self.rfile.read(content_length)

        if self.path == "/api/save-code":
            try:
                data = json.loads(raw_body.decode("utf-8"))
                overrides = data.get("overrides", {})
                lesson_id = data.get("id")
                overrides_path = os.path.join(BASE_DIR, "lessons_overrides.json")
                with open(overrides_path, "w", encoding="utf-8") as f:
                    json.dump(overrides, f, ensure_ascii=False, indent=2)

                git_auto_sync(f"Update code for lesson {lesson_id}")
                self._send_json(200, {"ok": True})
            except Exception as e:
                self._send_json(500, {"ok": False, "error": str(e)})
            return

        if self.path == "/api/upload-infographic":
            try:
                data = json.loads(raw_body.decode("utf-8"))
                lesson_id = data.get("id")
                b64 = data.get("base64", "")
                info_dir = os.path.join(BASE_DIR, "infographics")
                os.makedirs(info_dir, exist_ok=True)
                img_path = os.path.join(info_dir, f"{lesson_id}.png")
                with open(img_path, "wb") as f:
                    f.write(base64.b64decode(b64))

                git_auto_sync(f"Upload infographic for lesson {lesson_id}")
                self._send_json(200, {"ok": True})
            except Exception as e:
                self._send_json(500, {"ok": False, "error": str(e)})
            return

        self._send_json(404, {"ok": False, "error": "Not found"})

    def _send_json(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), CipherAdminHandler) as httpd:
        print(f"Cipher Python server running at http://localhost:{PORT}/")
        httpd.serve_forever()
