// charts.js – fetch data from Flask API and render with Chart.js

async function fetchChartData(endpoint) {
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}

function renderLineChart(ctx, labels, data) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Daily Sales',
        data: data,
        borderColor: 'var(--primary)',
        backgroundColor: 'rgba(255,140,0,0.2)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

function renderBarChart(ctx, labels, data) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Top Dishes',
        data: data,
        backgroundColor: 'var(--secondary)',
        borderColor: 'var(--primary)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

function renderPieChart(ctx, labels, data) {
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          'var(--primary)',
          'var(--secondary)',
          '#d4a373',
          '#8c6239',
          '#f2e2c4'
        ]
      }]
    },
    options: { responsive: true }
  });
}

(async () => {
  try {
    // Sales Trend
    const sales = await fetchChartData('/api/sales_trend');
    renderLineChart(document.getElementById('salesTrendChart'), sales.labels, sales.values);

    // Top Dishes
    const top = await fetchChartData('/api/top_dishes');
    renderBarChart(document.getElementById('topDishesChart'), top.labels, top.values);

    // Revenue by Category
    const cat = await fetchChartData('/api/revenue_category');
    renderPieChart(document.getElementById('revenueCategoryChart'), cat.labels, cat.values);
  } catch (e) {
    console.error('Error loading charts:', e);
  }
})();
