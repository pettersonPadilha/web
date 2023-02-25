import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import Image from "next/image"
import logoImg from "../../../public/logo/logo.png";
import Link from "next/link";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function SignUp() {
    return (
        <>
            <Head> <title>Faça seu cadastro</title> </Head>
            <div className={styles.containerCenter}>
                <Image className={styles.img} src={logoImg} alt="logo" />
                <div className={styles.login}>
                    <h1>Criando sua conta</h1>
                    <form action="">
                        <Input placeholder="Digite seu nome" type="text" />
                        <Input placeholder="Digite seu email" type="email" />
                        <Input placeholder="Digite sua senha" type="password" />
                        <Button type="submit" loading={false}>Cadastrar</Button>
                    </form>
                    <Link href="/" className={styles.text}> 
                        Já possui uma conta ? Faça o login
                    </Link>
                </div>
            </div>
        </>
    )
}
