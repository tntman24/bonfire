/**
 * Adds or updates a query parameter in the current URL without reloading the page.
 * @param {string} key The parameter name.
 * @param {string} value The parameter value.
 */
function addOrUpdateUrlParam(key, value) {
  // 1. Create a URL object based on the current window location
  const url = new URL(window.location.href);
  
  // 2. Access the searchParams property and set the new key-value pair.
  // The .set() method handles existing parameters (updates the value if key exists, otherwise adds it)
  url.searchParams.set(key, value);
  
  // 3. Update the browser's URL using the History API (prevents page reload)
  window.history.replaceState(null, null, url); // Use pushState() to add a new entry to history
}

// Example usage:
addOrUpdateUrlParam('sort', 'date');
addOrUpdateUrlParam('page', '2');
// The URL will update to something like: https://example.com/page.html?sort=date&page=2
