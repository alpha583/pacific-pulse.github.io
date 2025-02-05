// Language Select Functionality
document.getElementById('language-select').addEventListener('change', function changeLanguage() {
  const selectedLanguage = document.getElementById('language-select').value;
  if (selectedLanguage === 'en') {
    alert('Language changed to English');
  } else {
    alert('Language changed to Hinglish');
  }
}

document.getElementById('language-select').addEventListener('change', changeLanguage);
``` ### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pacific Search</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <div class="top-bar">
      <select id="language-select">
        <option value="en">English</option>
        <option value="hi">Hinglish</option>
      </select>
    </div>
    <div class="logo">
      <h1>Pacific Search</h1>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Search for reviews...">
      <button>Search</button>
    </div>
  </header>

  <main>
    <aside class="filter-panel">
      <h3>Filter by Category</h3>
      <ul>
        <li>Cars</li>
        <li>Mobiles
          <ul>
            <li>Apple</li>
            <li>Samsung</li>
            <li>Redmi</li>
            <li>OnePlus</li>
          </ul>
        </li>
        <li>PC Motherboard & Other Electronics
          <ul>
            <li>Gaming Motherboards</li>
            <li>Workstation Motherboards</li>
            <li>Accessories</li>
          </ul>
        </li>
      </ul>
    </aside>

    <section class="content-area">
      <h2>Welcome to Pacific Search</h2>
      <p>Find detailed reviews for your favorite products. Use the filters or search bar to get started!</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2023 Pacific Search. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
