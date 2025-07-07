import { useEffect, useState } from "react"

interface LoginFormState {
  username: string,
  password: string;
}
const App = () => {

  
  const [data, setData] = useState<string>("");
  const [message, setMessage] = useState<LoginFormState>({
    username: '',
    password: '',
  });
  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => alert(`Error : ${error}`));
  },[])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setMessage(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    try{
      console.log(message);
      const response = await fetch('/api/message', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      const data = await response.json();
      console.log(data.message);
    }
    catch(err){
      alert(`error ${err}`);
    }
  }
  return (
    <div>
      <h1>{data}</h1>
      <form onSubmit={handleSubmit}>
        <input id="3" type="text" name="username" value={message.username} onChange={handleChange}/>
        <input type="password" name="password" value={message.password} id="password" onChange={handleChange}/>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default App
