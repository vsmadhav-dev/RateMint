# RateMint

RateMint is a simple frontend currency converter UI built with HTML, CSS, and vanilla JavaScript.

## What it does

- Lets you enter an amount.
- Lets you choose source (`from`) and target (`to`) currencies from dropdowns.
- Loads currency options dynamically from `countryList`.
- Updates country flags based on selected currencies.
- Calls the currency API when you click **Get Exchange Rate**.

## Current behavior

- Default selected currencies are **USD** (from) and **INR** (to).
- The amount input defaults to `1` and is reset to `1` if empty or invalid.
- On submit, the app fetches exchange data from:
  - `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/`
- The fetch response is currently logged to the browser console.
- The exchange message in the UI (`.msg`) is currently static and not yet updated with API data.

## Project structure

- `/home/runner/work/RateMint/RateMint/index.html` – app markup
- `/home/runner/work/RateMint/RateMint/style.css` – app styling
- `/home/runner/work/RateMint/RateMint/codes.js` – currency-to-country mapping (`countryList`)
- `/home/runner/work/RateMint/RateMint/script.js` – dropdown setup, flag updates, and API request logic

## How to run

1. Open `/home/runner/work/RateMint/RateMint/index.html` in any modern browser.
2. Enter amount and select currencies.
3. Click **Get Exchange Rate**.
4. Open browser DevTools Console to view the fetched API response.

## External resources

- Font Awesome (icons)
- Flags API (`flagsapi.com`) for country flags
- Fawaz Ahmed currency API (via jsDelivr)
