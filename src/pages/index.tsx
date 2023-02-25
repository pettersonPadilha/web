import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image"
import logoImg from "../../public/logo/logo.png";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head> <title>Pops Pizza</title> </Head>
            <div className={styles.containerCenter}>
                <Image className={styles.img} src={logoImg} alt="logo" />
                <div className={styles.login}>
                    <form action="">
                        <Input placeholder="Digite seu email" type="text" />
                        <Input placeholder="Digite sua senha" type="password" />
                        <Button type="submit" loading={false}>Acessar</Button>
                    </form>
                    <Link href="signup" className={styles.text}> 
                        Não possui uma conta ? Cadastre-se
                    </Link>
                </div>
            </div>
        </>
    )
}
