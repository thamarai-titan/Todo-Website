import Nav from "../ui/home/nav-bar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <Nav/>
    {children}
    
</>
}