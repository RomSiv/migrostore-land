import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const singIn = async () => {
    await createUserWithEmailAndPassword(auth, name, email, message);
  };

  return (
    <div>
      <input
      onChange={(e) => setName(e.target.value)}
      />
      <input
      onChange={(e) => setEmail(e.target.value)}
     />
      <input 
      onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={singIn}>Messege</button>
    </div>
  );
};
