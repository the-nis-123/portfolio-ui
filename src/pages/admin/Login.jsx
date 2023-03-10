import useFormData from "../../hooks/useFormData";
import { useLoginMutation } from "../../app/api/authApiSlice";
import Spinner from "../../components/loading/Spinner";
import  './login.css';

function Login() {
  const { handleChange, formData} = useFormData();
  const [login, response] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(formData).unwrap();
    console.log(res);
  }


  return (
    <div className='login page-wrapper'>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>

        <input 
          type='text'
          name='email'
          placeholder='Email address'
          autoComplete='off'
          onChange={handleChange}
        />

        <input 
          type='password' 
          name='password'
          placeholder='Password'
          autoComplete='off'
          onChange={handleChange}
        />

        <section className='form-buttons-wrapper'>
          <input 
            type='submit' 
            value='Submit'
          />
          {response?.isLoading && <Spinner/>}
        </section>
      </form>
    </div>
  )
}

export default Login;