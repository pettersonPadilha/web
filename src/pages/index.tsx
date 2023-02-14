import Head from "next/head";
import Image from "next/image";
import LogoImg from "../../public/logo/logo.png";
import { Container,Content } from "../styles/global";
import {Input} from "../Components/ui/Input/index";
export default function Home() {
  return (
    <>
        <Head> <title>Pops Pizza | Home</title>  </Head>
        <Container>
            <Image src={LogoImg} alt="logo pops Pizza"/>
            <Content>
                <form>
                    <Input placeholder="Digite seu e-mail" type="text"/>
                    <Input placeholder="Digite sua senha" type="password"/>
                </form>
            </Content>
        </Container> 
    </>
  )
}
