import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";
import { useState, useEffect, createContext } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }
    
    const res = signup(email, senha);
    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/Company");
  };
  return (
    <div>
     <h1>Cadastre seus dados</h1>
     <form>
        <input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}/>
      <input type="email"
      placeholder="Confirme seu E-mail"
      value={emailConf}
      onChange={(e) => [setEmailConf(e.target.value), setError("")]}/>
      
      <input type="password"
      placeholder="Digite sua Senha"
      value={senha}
      onChange={(e) => [setSenha(e.target.value), setError("")]}
     />

        <label>{error}</label>
        <button onClick={handleSignup}>Cadastrar</button> 
        <br></br>
        <label>
          Já tem uma conta?
            <Link to="/Company">&nbsp;Entre</Link>
        </label>
        </form>
        </div>
  );
};

export default Signup;