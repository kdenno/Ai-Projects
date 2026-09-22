import os

from dotenv import load_dotenv

def main():
    load_dotenv()
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY is not set in the environment")
    print("Hello from ai-projects!")
    print(f"OpenAI API key loaded: {api_key[:8]}...")


if __name__ == "__main__":
    main()
