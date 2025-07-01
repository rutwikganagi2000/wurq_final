# 🚀 React Native with Ignite

Welcome to my React Native project! This app was built using the [Ignite 🔥 boilerplate](https://github.com/infinitered/ignite), developed in **Android Studio** 🛠️, and designed to demonstrate my ability to work with API data, UI state management, timers, and charts in a mobile application. 📱

---

## 📦 Tech Stack

- ⚛️ **React Native** (with Ignite)
- 💥 **Ignite Boilerplate**
- 🧠 **MobX** for state management
- 🧪 **Android Studio** for development & testing
- 🌐 **REST API** for data fetching
- 📊 Chart library (e.g. Victory Native / React Native Chart Kit)

---

## 📲 Features Implemented

### 🧾 Home Screen (Main Page)

- ✅ Fetched list of users from `GET localhost:3000/` using **MobX**
- 🧍‍♂️ Displayed users as **cards** based on age:
  - 🩶 Gray for users < 30
  - 🔴 Red for users 30–50
  - 🔵 Blue for users > 50
  - 🚫 Ignored users with negative age
- 💰 Displayed **Total Fees Paid** at the top of the screen

### ⏱️ Second Screen

- ⌛ Timer starts automatically when the screen is loaded
- 📄 Displays all user data as a single **text box**
- ⏳ Simulated a **Promise** with 1-second interval calls (completes after 3 seconds)

### 🎛️ Third Screen

- 🧾 Created form-based UI
- 🔄 Form changes dynamically update the **user card**
- 📈 Integrated a **chart** for visual representation

---

## 🗂️ Project Setup

```bash
# Clone the Ignite boilerplate
git clone https://github.com/infinitered/ignite

# Install dependencies
yarn install

# Start Metro
yarn start

# Run the app on Android Emulator
yarn android