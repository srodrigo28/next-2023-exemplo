import Link from "@/components/Link";

function Title({ children }){
  return (
    <>
      <h1> {children}</h1>
      <style jsx>{`

        h1{ color: red; }

      `}</style>
    </>
  )
}

export default function Home() {
  return (
      <div>
        <Title>Home</Title>
          <Link href="/faq" > Faq </Link>
          <Link href="/register" > Register </Link>

        <p> <i> Next 13 Development </i> </p>
      </div>
  )
}
