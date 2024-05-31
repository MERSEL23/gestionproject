//import LoginForm from '/components/LoginForm';
import { fetchUser } from '/app/lib/data';

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