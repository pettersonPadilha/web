import {useState, FormEvent,useContext} from "react"
import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import Image from "next/image"
import logoImg from "../../../public/logo/logo.png";
import Link from "next/link";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import {authContext} from "../../contexts/AuthContext";
import {toast} from "react-toastify"


export default function SignUp() {
    const {signUp} = useContext(authContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSignUp(event:FormEvent) {
        event.preventDefault();

        if(name === "" || email === "" || password === "") {
            toast.warning("Preencha todos os campos!")
            return;
        }

        setLoading(true)
        let data = {name, email, password}

        await signUp(data)

        setLoading(false);

    }


    return (
        <>
            <Head> <title>Faça seu cadastro</title> </Head>
            <div className={styles.containerCenter}>
                <Image className={styles.img} src={logoImg} alt="logo" />
                <div className={styles.login}>
                    <h1>Criando sua conta</h1>
                    <form action="" onSubmit={handleSignUp}>
                        <Input placeholder="Digite seu nome" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        <Input placeholder="Digite seu email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder="Digite sua senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Button type="submit" loading={loading}>Cadastrar</Button>
                    </form>
                    <Link href="/" className={styles.text}> 
                        Já possui uma conta ? Faça o login
                    </Link>
                </div>
            </div>
        </>
    )
}
