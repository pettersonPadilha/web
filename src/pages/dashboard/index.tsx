import { canSSRAuth } from "../../utils/canSSRAuth";

export default function Dashboard() {
    return(
        <h1>Bem vindo ao dashboard</h1>
    );
}

export const getServerSideProps = canSSRAuth(async (context) => {
    return {
        props: {}
    }
}) 