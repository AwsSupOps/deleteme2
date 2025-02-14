// import { useEffect, useState } from "react";
// //import type { Schema } from "../amplify/data/resource";
// //import { generateClient } from "aws-amplify/data";

// import { generateClient } from "aws-amplify/data";
// import type { Schema } from "@/data-schema";

// const client = generateClient<Schema>();

// function App() {
//   const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

//   useEffect(() => {
//     client.models.Todo.observeQuery().subscribe({
//       next: (data) => setTodos([...data.items]),
//     });
//   }, []);

//   function createTodo() {
//     client.models.Todo.create({ content: window.prompt("Todo content") });
//   }

//   return (
//     <main>
//       <h1>My todos</h1>
//       <button onClick={createTodo}>+ new</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.content}</li>
//         ))}
//       </ul>
//       <div>
//         🥳 App successfully hosted. Try creating a new todo.
//         <br />
//         <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
//           Review next step of this tutorial.
//         </a>
//       </div>
//     </main>
//   );
// }

// export default App;



// adding auth ui from https://github.com/aws-amplify/docs/pull/8065/files

//


import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';



Amplify.configure(outputs);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
};

//
// import type { FormEvent } from "react"
// import { Amplify } from "aws-amplify"

// import { signUp } from "aws-amplify/auth"
// import outputs from "../amplify_outputs.json"

// Amplify.configure(outputs)

// interface SignUpFormElements extends HTMLFormControlsCollection {
//   email: HTMLInputElement
//   password: HTMLInputElement
// }


// interface SignUpForm extends HTMLFormElement {
//   readonly elements: SignUpFormElements
// }

// export default function App() {
//   async function handleSubmit(event: FormEvent<SignUpForm>) {
//     event.preventDefault()
//     const form = event.currentTarget
//     // ... validate inputs
//     await signUp({
//       username: form.elements.email.value,
//       password: form.elements.password.value,
//     })
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email:</label>
//       <input type="text" id="email" name="email" />
//       <label htmlFor="password">Password:</label>
//       <input type="password" id="password" name="password" />
//       <input type="submit" />
//     </form>
//   )
// }