import '../styles/global.scss'
import { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import {Slide, ToastContainer} from "react-toastify"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
        <ToastContainer autoClose={3000} theme="colored" position="bottom-center" transition={Slide}/>
      </AuthProvider>
    </>
  )
}
