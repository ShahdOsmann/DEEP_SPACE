from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
from dotenv import load_dotenv
app = Flask(__name__)
CORS(app)
API_KEY = GEMINI_API_KEY
MODEL = "gemini-2.5-flash"  # Free-tier model that works

GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"

 
@app.route("/api/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()
        user_message = data.get("message", "")
        if not user_message:
            return jsonify({"reply": "Please provide a message."})

        system_prompt = """
        You are an AI assistant for a website about planets. 
        Answer user questions in a friendly, concise, and informative way. 
        Use simple language suitable for general audiences. 
        Always stay on topic and provide useful info about planets.
        """

        payload = {
            "contents": [
                {"parts": [{"text": system_prompt}]},  # system instruction
                {"parts": [{"text": user_message}]}    # user's message
            ]
        }

        headers = {
            "Content-Type": "application/json",
            "X-goog-api-key": API_KEY
        }

        response = requests.post(GEMINI_URL, headers=headers, json=payload)
        response.raise_for_status()
        result = response.json()

        reply = result["candidates"][0]["content"]["parts"][0]["text"]
        return jsonify({"reply": reply})

    except requests.exceptions.HTTPError as e:
        return jsonify({"reply": "Error contacting Gemini API.", "details": str(e)}), 500
    except Exception as e:
        return jsonify({"reply": "An unexpected error occurred.", "details": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
