```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a simple paragraph.</p>
      <MyComponent/>
    </div>
  );
}

export function MyComponent(){
  return(
    <p>This is a child component</p>
  );
}
```