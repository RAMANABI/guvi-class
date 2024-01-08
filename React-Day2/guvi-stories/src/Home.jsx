import './App.css'

const greeting = {
    name: "Hello",
    title: "React.js",
    val: "Type here!"
};

function display(title){
    return title;
}

function Home() {

  return (
   <div>
    <p>{greeting.name}, {greeting.title}, and {display("Node.js")}</p>
    <label htmlFor='search'>Search=</label>
    <input type="text" id="search" value={greeting.val} />
   </div>
  )
}

export default Home
