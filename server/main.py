# Load environment variable first
from app import create_app
from config import current_config

app = create_app(current_config)

if __name__ == "__main__":
    app.run()
