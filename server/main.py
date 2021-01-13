# Load environment variable first
from dotenv import load_dotenv
load_dotenv()  # nopep8

from app import create_app
from config import current_config

app = create_app(current_config)

if __name__ == "__main__":
    app.run()
