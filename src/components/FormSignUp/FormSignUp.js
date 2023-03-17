import { useState } from "react";
import { Form } from "./styles";
import { AUTH_SIGNUP_URL } from "../../Constants/urls";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { White } from "../../Constants/colors";
import axios from "axios";

export default function FormSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  function signup(e) {
    e.preventDefault();
    setDisable(true);

    const body = { email, name, image, password };
    console.log("Dados enviados para a API:", body);

    axios
      .post(AUTH_SIGNUP_URL, body)
      .then((resp) => {
        setDisable(false);
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
        setDisable(false);
      });
  }

  return (
    <Form onSubmit={signup}>
      <input
        data-test="email-input"
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={disable}
        required
      />
      <input
        data-test="password-input"
        placeholder="senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={disable}
        required
      />
      <input
        data-test="user-name-input"
        placeholder="nome"
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={disable}
        required
      />
      <input
        data-test="user-image-input"
        placeholder="foto"
        type="photo"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        disabled={disable}
        required
      />
      <button data-test="signup-btn" type="submit" disabled={disable}>
        {disable ? <ThreeDots color={White} /> : "Cadastrar"}
      </button>
    </Form>
  );
}
