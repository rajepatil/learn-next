import Link from 'next/link';
const Navbar = () =>
{
    return (
        <div>

            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/About"><a>About</a></Link></li>
            </ul>
            <style jsx>{`
                ul {
                    display: flex;
                    color: #fff;
                    list-style: none;
                    
                 }

                 ul li a{
                     font-size: 18px;
                     text-decoration: none;
                     margin: 10px;
                 }

        `}</style>
        </div>
    );
}

export default Navbar;