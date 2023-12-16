import 'bootstrap/dist/css/bootstrap.css'
import Titulo from '@/components/Titulo'
import AdmProvider from '@/contexts/adm';

export const metadata = {
  title: 'Biblioteca',
  description: 'Biblioteca online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">  
    <head>
      <link rel="shortcut icon" href="../castroalves2.png" type="image/x-icon" />  
    </head>    
      <body>
        <AdmProvider>
          <Titulo />
          {children}
        </AdmProvider>
      </body>
    </html>
  )
}
