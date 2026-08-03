# Indian Restaurant Data Analysis Dashboard

## Overview
This repository contains a lightweight Flask web application that loads an Indian‑restaurant sales data file (CSV or Excel) and displays three interactive visualisations:

- **Daily sales trend** (line chart)
- **Top‑selling dishes** (bar chart)
- **Revenue by category** (pie chart)

The site uses a warm, saffron‑amber colour theme that looks handcrafted rather than AI‑generated.

## User Review Required
[!IMPORTANT] The site expects a data file named `data.csv` **or** `data.xlsx` placed in the `data/` folder. Provide the exact column names (case‑sensitive):
- `date` – transaction date (parseable by pandas)
- `order_id` – unique identifier (optional)
- `item` – dish name
- `category` – dish category (e.g., Appetizer, Main, Dessert)
- `quantity` – number of units sold (optional)
- `price` – monetary amount of the line item

## Open Questions
[!WARNING] Confirm the column names and let us know if any custom calculations are required (e.g., discounts, taxes, tips) so the backend can be adjusted accordingly.

## Folder structure
```
project-root/
├─ app.py                     # Flask entry point
├─ requirements.txt           # Python dependencies
├─ Procfile                   # Render start command
├─ .gitignore                 # Standard Python ignores
├─ README.md                  # This file
├─ data/                      # <-- place your data CSV/Excel here
├─ templates/
│   └─ index.html            # HTML page that loads the charts
└─ static/
    ├─ css/
    │   └─ style.css         # Warm theme CSS
    └─ js/
        └─ charts.js         # Chart.js logic
```

## Getting started (local)
```powershell
# 1️⃣ Clone the repo (or copy the folder)
# git clone <repo‑url>
# cd <repo‑folder>

# 2️⃣ Create a virtual environment
python -m venv .venv
.\.venv\Scripts\activate  # PowerShell

# 3️⃣ Install dependencies
pip install -r requirements.txt

# 4️⃣ Add your data file
#   Place a CSV or XLSX file inside the `data/` directory.
#   Ensure the required columns listed above are present.

# 5️⃣ Run the app locally
python app.py   # opens http://127.0.0.1:5000
```

## Deploy to Render (free tier)
1. **Push to a Git repository** (GitHub, GitLab, or Bitbucket).
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your‑repo‑url>
   git branch -M main
   git push -u origin main
   ```
2. **Create a Render Web Service**
   - Go to https://render.com and sign‑in.
   - Click **New → Web Service**.
   - Connect the repository you just pushed.
   - Render will auto‑detect `requirements.txt` and the `Procfile`.
   - Keep the default **Build Command** (`pip install -r requirements.txt`).
   - Keep the **Start Command** as `gunicorn app:app` (from the Procfile).
   - Choose the free **Starter** plan and click **Create Web Service**.
3. Render builds the container, starts the Flask app behind Gunicorn, and gives you a public HTTPS URL (e.g., `https://your‑service‑name.onrender.com`).

## Updating the site
Whenever you change code or data, simply commit and push to the same branch. Render automatically rebuilds and redeploys.

---
*Feel free to customise the colour palette in `static/css/style.css` or add more charts by extending the Flask API routes and the JavaScript in `static/js/charts.js`.*
