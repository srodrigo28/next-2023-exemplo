const { default: Link } = require("@/components/Link");

export default function Page404(){
    return(
        <div>
            <h1>Esse link / página não foi encontrada</h1>
            <Link href="/"> Voltar para página Principal ? </Link>
        </div>
    )
}