# 🎬 **Cinema Calc Application**

This is a full-stack Expense Management Application built using **.NET Core** for the backend and **React** for the frontend. It allows producers to plan their film expenses by adding, updating, and deleting expenses. The backend interacts with a **MySQL** database, and **Entity Framework Core** is used for data access.

## **Table of Contents**

1. [How to Run the Project Locally](#how-to-run-the-project-locally) 🏠
2. [Overall Structure](#overall-structure) 🏗️
3. [State Management](#state-management) 🧩
4. [Precise Number Calculations](#precise-number-calculations) 📊
5. [Tasks and Deliverables](#tasks-and-deliverables) 📋
6. [Notes and Thoughts](#notes-and-thoughts) 📝
7. [Technologies](#technologies) 🔧

---

## **How to Run the Project Locally** 🏠

### **Backend Setup** 🔧

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/ShaheryarRaza34/Cinema-Calc-Coding-Challenge.git
    cd Cinema-Calc-Coding-Challenge/backend
    ```

2. **Configure the MySQL Database Connection String:**

    Edit the `appsettings.json` file to configure the connection string:
    ```json
    "ConnectionStrings": {
        "DefaultConnection": "server=localhost;port=3306;database={database_name};user={user_name};password={user_password}"
    }
    ```

3. **Restore Dependencies:**
    ```bash
    dotnet restore
    ```

4. **Run Migrations:**

    To set up the database schema:
    ```bash
    dotnet ef migrations add InitialMigration
    dotnet ef database update
    ```

5. **Run the Backend Server:**
    ```bash
    dotnet run
    ```

### **Frontend Setup** 🌐

1. **Navigate to the Frontend Folder:**
    ```bash
    cd ../frontend
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Run the Frontend App:**
    ```bash
    npm start
    ```

    The frontend will be running at `http://localhost:3000` by default.

---

## **Overall Structure** 🏗️

The project is organized into two main parts:

1. **Backend:**
    - **`/backend`**: Contains the .NET Core API project.
        - **Controllers**: Handle HTTP requests and responses.
        - **Models**: Represent the data structure.
        - **Data**: Includes the database context and repository for data access.
        - **Services**: Business logic for the application.
        - **DTOs**: Data Transfer Objects used to map data between the frontend and backend.
        - **Configurations**: Settings and dependency injection configuration.

2. **Frontend:**
    - **`/frontend`**: Contains the React application.
        - **Components**: UI elements and functionality.
        - **Providers**: Custom hooks for interacting with the backend.
        - **CSS**: Styling for the components.
        - **Pages**: Main application pages.

---

## **State Management** 🧩

In the frontend, state is managed using React's built-in state hooks (`useState`) and context API. This approach was chosen for its simplicity and direct integration with React's functional components. For managing more complex state logic or global state, context API allows us to share state across multiple components without prop drilling.

---

## **Precise Number Calculations** 📊

Precise number calculations are handled using JavaScript's built-in number types and arithmetic operations. For critical financial calculations, ensure proper rounding and handling of floating-point arithmetic to avoid precision errors. In the backend, precise calculations are managed using decimal types to ensure accurate financial computations.

---

## **Tasks and Deliverables** 📋

1. **Setup and Configuration:**
    - Configure backend and frontend environments.
    - Set up MySQL database and Entity Framework Core.

2. **Backend Development:**
    - Implement CRUD operations for expenses.
    - Set up data access layer and migrations.
    - Develop API endpoints and integrate with the frontend.

3. **Frontend Development:**
    - Create UI components for managing expenses.
    - Implement state management and API integration.
    - Design and style the application for a user-friendly experience.

---

## **Notes and Thoughts** 📝

- **Future Enhancements:** Consider adding user authentication, improving error handling, and optimizing performance.
- **Testing:** Implement unit and integration tests to ensure the reliability of the application.
- **Deployment:** Set up CI/CD pipelines for automated deployment and monitoring.

---

## **Technologies** 🔧

### **Backend:**
- **.NET Core 6.0** 🚀
- **Entity Framework Core** 📦
- **MySQL** Database 🗄️
- **AutoMapper** for model mapping 🔄
- **Swagger** for API documentation 📜

### **Frontend:**
- **React** ⚛️
- **CSS Modules** 🖍️
- **React Hooks** for state management 🔗
- **Fetch** for HTTP requests 🌐

---
