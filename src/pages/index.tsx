import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image"
import logoImg from "../../public/logo/logo.svg";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
export default function Home() {
    return (
        <>
            <Head> <title>Pops Pizza</title> </Head>
            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="logo" />
                <div className={styles.login}>
                    <form action="">
                        <Input placeholder="Digite seu email" type="text" />
                        <Input placeholder="Digite sua senha" type="password" />
                        <Button type="submit" loading={false}>Entrar</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
