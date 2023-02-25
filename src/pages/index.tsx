import { useContext, FormEvent, useState} from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image"
import logoImg from "../../public/logo/logo.png";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Link from "next/link";
import {authContext} from "../contexts/AuthContext";
import {toast} from "react-toastify"

export default function Home() {
    const {signIn} = useContext(authContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    async function handleLogin(event: FormEvent) {
        event.preventDefault();
        if(email === "" || password === "") {
            toast.warning("Preencha todos os campos")
            return;
        }
        setLoading(true)
        let data = {
            email,
            password
        }

        await signIn(data)

        setLoading(false)

    }
    return (
        <>
            <Head> <title>Pops Pizza</title> </Head>
            <div className={styles.containerCenter}>
                <Image className={styles.img} src={logoImg} alt="logo" />
                <div className={styles.login}>
                    <form onSubmit={handleLogin}>
                        <Input placeholder="Digite seu email" type="text"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder="Digite sua senha" type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Button type="submit" loading={loading}>Acessar</Button>
                    </form>
                    <Link href="signup" className={styles.text}> 
                        Não possui uma conta ? Cadastre-se
                    </Link>
                </div>
            </div>
        </>
    )
}
