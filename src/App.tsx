import React from "react";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">My Application</h1>
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="flex flex-row gap-8 w-full justify-center">
          <Counter />
          <RichTextEditor />
        </div>
        <div className="flex items-center justify-center w-full mt-8">
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default App;