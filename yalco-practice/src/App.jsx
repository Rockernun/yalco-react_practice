const element1 = <h2>Hello, World!</h2>
const element2 = (
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
)

console.log(element1);
console.log(element2);

const language = "JavaScript";

//  JSX 작성 연습
function BasicExpressions() {
  const name = 'Park';
  const age = 25;
  const isAdmin = true;

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age next year: {age + 1}</p>
      <p>{name + "'s Profile"}</p>
      <p>{`${name} is ${age} years old.`}</p>
      <p>Admin status : {String(isAdmin)}</p>
    </div>
  );
}

function ObjectArrayExpressions() {
  const user = {
    name : "Karina",
    email : "karina@aespa.com"
  };
  const colors = ["red", "blue", "green"];
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <p>User : {user.name} {user.email}</p>
      <p>First color : {colors[0]}</p>
      <p>Color count : {colors.length}</p>

      <p>Doubleds : {
          numbers.map((num) => (num * 2)).join(", ")
        }</p>

        <p>Evens : {
        numbers.filter((num) => (num & 2 === 0)).join(", ")
        }</p>
    </div>
  );
} 

function App() {
  return (
    <>
      <h1>JSX</h1>
      {language}
      <BasicExpressions />
      <ObjectArrayExpressions />
    </>
  );
}

export default App;