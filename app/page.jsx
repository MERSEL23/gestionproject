//import LoginForm from '/components/LoginForm';
import { fetchUser } from '/app/lib/Data';
import { fetchDemand } from './lib/Data';
import LoginPage from './login/page';


const  Home = async ()=> {
  const user = await fetchUser();
  return (
    <main>
      <LoginPage/>
    </main>
  );
}
export default Home;