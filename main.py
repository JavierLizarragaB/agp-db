from dotenv import load_dotenv

from app import create_app
from config import current_config

load_dotenv()

app = create_app(current_config)

if __name__ == "__main__":
    app.run()
