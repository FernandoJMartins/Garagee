import Sidebar from "../components/Opcoes/Sidebar"
import ServicoProvider from "./contexts/teste"
import "./style.css"

export const metadata = {
  title: 'Garage',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <ServicoProvider>
          <Sidebar />
          {children}
        </ServicoProvider>
        </body>
    </html>
  )
}
