
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const handleClick = async() => {
        const token = localStorage.getItem('token');
        if (token) {
            alert('Token found: ');

            try{
                const response = await fetch('/api/authorization', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });
                if(response.status === 200) {
                    alert('Authorization successful');
                    navigate('/dashboard');
                } else {
                    alert('Authorization failed');
                }
            }
            catch (error) {
                console.error('Error fetching authorization:', error);
                alert('Error fetching authorization');
            }
        } else {
            alert('No token found in localStorage');
        }
    }
  return (
    <div>
        
        <h1>Welcome to the Blog App</h1>
        <p>This is a simple blog application where you can read and write blogs.</p>
        <p>Feel free to explore the features and enjoy your time here!</p>
        
        <button onClick={handleClick}>Click button</button>`
    </div>
  );
}

export default Home;