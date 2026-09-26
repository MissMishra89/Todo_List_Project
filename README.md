# 🌸 TaskFlow - Todo List Application

A modern and beginner-friendly **Todo List Application** built with
**React, Tailwind CSS, and Local Storage**. This project helps users
create, manage, edit, and organize daily tasks efficiently.

------------------------------------------------------------------------

## ✨ Features

✅ Add new tasks\
✅ Edit existing tasks\
✅ Delete tasks\
✅ Store tasks in Local Storage\
✅ Add multiple subtasks\
✅ Set task category\
✅ Set task priority\
✅ Add due dates\
✅ Responsive UI using Tailwind CSS\
✅ Popup form for task creation\
✅ Real-time task updates\
✅ Persistent data after page refresh

------------------------------------------------------------------------

## 📸 Project Preview

``` text
Task Dashboard
│
├── Total Tasks
├── Add Task Button
│
├── Task Cards
│   ├── Title
│   ├── Description
│   ├── Category
│   ├── Priority
│   ├── Date
│   └── Subtasks
│
└── Edit / Delete Options
```

------------------------------------------------------------------------

## 🚀 Technologies Used

  Technology      Purpose
  --------------- -------------------------
  React           Frontend Development
  JavaScript      Application Logic
  Tailwind CSS    Styling
  Local Storage   Data Persistence
  Vite            Fast Development Server

------------------------------------------------------------------------

## 📂 Project Structure

``` text
src/
│
├── App.jsx
├── Mainpage.jsx
├── constant.js
├── index.css
├── main.jsx
│
└── Components/
    ├── TaskCard.jsx
    ├── Popup.jsx
    └── Header.jsx
```

------------------------------------------------------------------------

## 🧠 Concepts Used

### React Hooks

-   `useState()`
-   `useEffect()`

### Array Methods

-   `map()`
-   `filter()`
-   `splice()`

### Browser Storage

``` javascript
localStorage.setItem()
localStorage.getItem()
JSON.stringify()
JSON.parse()
```

------------------------------------------------------------------------

## 🎯 Task Object Structure

``` javascript
{
  title: "Learn React",
  description: "Complete React Hooks",
  category: "Work",
  priority: "High",
  date: "2026-09-26",
  subtask: [
    "useState",
    "useEffect"
  ]
}
```

------------------------------------------------------------------------

## 📋 Categories

``` javascript
[
  "Work",
  "Personal",
  "Health",
  "Finance"
]
```

------------------------------------------------------------------------

## 🚦 Priority Levels

``` javascript
[
  "Low",
  "Medium",
  "High"
]
```

------------------------------------------------------------------------

## 💾 Local Storage Integration

Tasks are automatically saved in browser storage:

``` javascript
useEffect(() => {
    localStorage.setItem(
        "tasks",
        JSON.stringify(alltask)
    );
}, [alltask]);
```

This ensures that tasks remain available even after refreshing the page.

------------------------------------------------------------------------

## ⚙️ Installation

### Clone Repository

``` bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Open Project

``` bash
cd todo-project
```

### Install Dependencies

``` bash
npm install
```

### Start Project

``` bash
npm run dev
```

------------------------------------------------------------------------

## 🎨 UI Highlights

🌸 Pink Theme Design\
📱 Responsive Layout\
📝 Task Cards\
✨ Popup Forms\
🎯 Priority Labels\
📅 Date Management\
☑️ Subtask Support

------------------------------------------------------------------------

## 🔮 Future Improvements

-   [ ] Search Tasks
-   [ ] Filter by Category
-   [ ] Filter by Priority
-   [ ] Dark Mode
-   [ ] Drag & Drop Tasks
-   [ ] Completed Task Section
-   [ ] User Authentication
-   [ ] Backend Integration

------------------------------------------------------------------------

## 🧠 What I Learned

This project helped me understand:

-   React Components
-   State Management
-   useEffect Hook
-   Local Storage
-   Event Handling
-   Conditional Rendering
-   Array Methods
-   Tailwind CSS
-   CRUD Operations

------------------------------------------------------------------------

## 👩‍💻 Author

**Khushi Mishra**

Built with ❤️ while learning React.

------------------------------------------------------------------------

## ⭐ Support

If you like this project:

⭐ Star the repository\
🍴 Fork the project\
💻 Contribute to the project

------------------------------------------------------------------------

## 📄 License

This project is for learning and educational purposes.
