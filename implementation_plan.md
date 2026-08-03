# Indian Restaurant Data Analysis Website

## Goal Description
Create a full‑stack Python web app that loads restaurant data (CSV/Excel), performs sales and menu analysis, and displays interactive visualisations on a warm‑themed site.

## User Review Required
[!IMPORTANT] The site will expect a data file named `data.csv` or `data.xlsx` placed in the `data/` folder. Provide the exact column names (e.g., `date`, `order_id`, `item`, `category`, `quantity`, `price`).

## Open Questions
[!WARNING] Confirm the column names and any custom calculations (e.g., discount) needed for the analysis.

## Proposed Changes
### Backend
#### [NEW] [app.py](file:///C:/Users/tanis/.gemini/antigravity/brain/738a8709-6c21-4684-b8d4-1728fabba514/app.py)
#### [NEW] [requirements.txt](file:///C:/Users/tanis/.gemini/antigravity/brain/738a8709-6c21-4684-b8d4-1728fabba514/requirements.txt)
### Templates
#### [NEW] [templates/index.html](file:///C:/Users/tanis/.gemini/antigravity/brain/738a8709-6c21-4684-b8d4-1728fabba514/templates/index.html)
### Static
#### [NEW] [static/css/style.css](file:///C:/Users/tanis/.gemini/antigravity/brain/738a8709-6c21-4684-b8d4-1728fabba514/static/css/style.css)
#### [NEW] [static/js/charts.js](file:///C:/Users/tanis/.gemini/antigravity/brain/738a8709-6c21-4684-b8d4-1728fabba514/static/js/charts.js)

## Verification Plan
### Automated Tests
- Run `python -m pytest tests/` after implementation.
### Manual Verification
- Start the server with `python app.py` and open http://127.0.0.1:5000.
- Verify that charts load and reflect data.
- Check that the colour scheme matches the warm light theme.
