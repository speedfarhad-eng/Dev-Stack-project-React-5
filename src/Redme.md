<!-- 1.   Name of your project

  <!-- ----> DevStack -->

2.   A little description
     ------> DevStack is a modern web app where developers can choose frontend, backend, and other technologies to build their own custom tech stack easily.
   -------------------------------------------

3.  Technology that you use
    
    1. Frontend & Build Tool: React, Vite

    2. Styling & UI: Tailwind CSS, DaisyUI, HTML5

    3. Icons & Alerts: React Icons, React Toastify
    
    
4.  3 features about your project

    1. Interactive Stack Builder: Users can pick their favorite technologies by category to build a custom tech stack.

    2. Real-time Stack Management: A right-side panel shows selected technologies instantly, and users can remove or manage them easily.

    3. Technology Exploration: Users can check technology details, categories, and ratings to choose the best tools



 1. What is JSX, and why is it used in React?
        What JSX is and why it is used in React (where it is located in this project):
        JSX is a JavaScript syntax extension that allows you to write HTML directly inside your code.

       ----> Where it is used: It is used inside the return statement of almost all components in the project (such as App.tsx, Nav.tsx, Banner.tsx, TechnologiesCard.tsx) to design the UI.
 ---------------------------------------------------------------------------------------      
 2. What is the difference between props and state?
----->  Props are data received from outside, while State is a component's own internal data. In Technologies.tsx, the current value of selectedTech is stored as a state using useState, and then that state along with the update function (setSelectedTech) are passed as props to AllTechnologies and YourStack.
-----------------------------------------------------=================--------------------
 3. What does the useState hook do, and where did you use it in this project?
 ------>Tracking User Selections: To keep track of the list of technologies selected by the user (selectedTech).

------>Initializing Data Fetching: In App.tsx via const [dataPromise] = useState(() => languagefetch()) to initialize and cache the data-fetching promise. This prevents redundant fetch calls on every component re-render and keeps the UI layout and scroll position stable during loading.
-----------------------------------------------------------------------------------------
4. What does the useEffect hook do, and why did you need it to load the JSON data?
------>Role of useEffect: useEffect handles side-effects (like data fetching) in components. It is traditionally needed for JSON data loading because fetching is an asynchronous task that must run after the component renders.

------>Project Implementation: In this project, data was fetched asynchronously using async/await inside the data-fetching function (such as languagefetch() in App.tsx) to retrieve the JSON data smoothly.
----------------------------------------------------------------------
 5.Why does every item in a .map() list need a unique key prop?
     ----> The key prop allows React to easily identify which items have changed, been updated, or been deleted. As we know, a unique key must always be provided whenever we use .map().
   ------------------------------------------------------------   
 6.What is conditional rendering? Show one place you used it (example: the empty stack message).
 Using a ternary operator to check if an item is in the stack and conditionally displaying either "Add to Stack" or "Added to Stack" on the button is a prime example of conditional rendering in React.
 -----------------------------------------------------------
 7 .How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

you pass data from a parent component to a child component:-
When we pass data and functions from the Technologies.tsx parent component to AllTechnologies, TechnologiesCard, and YourStack..
<AllTechnologies
  fetchData={fetchData}  
  selectedTech={selectedTech} 1   //1  and 2 are being passed to the child component as props.
  setSelectedTech={setSelectedTech}2 
/>
------->how data is sent from the child to the parent: when I click "Add to Stack", the child component calls the setSelectedTech function to add a new tech card:
const handleAddToStack = () => {
  if (isSelected) return;
  setSelectedTech((farhad) => [...farhad, tech]); // New data sent from the child to the parent
  // ...
}; -->
 
