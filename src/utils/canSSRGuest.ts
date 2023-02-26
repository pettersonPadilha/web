import {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult} from "next";
import {parseCookies} from "nookies";

export function canSSRGuest<P>(fn:GetServerSideProps<P>) {
    return async (context:GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(context)

        // redirect para o dashboard
        if(cookies["@nextauth.token"]) {
            return {
                redirect: {
                    destination: "/dashboard",
                    permanent: false
                }
            }
        }

        return await fn(context);
    }
}