import Link from 'next/Link'

const FirstPage = () => {
    return(
        <div>
           <Link href='/'>
                <a>Take Me Home</a> 
           </Link>
            <h1>First Page</h1>
        </div>
    )
}

export default FirstPage;