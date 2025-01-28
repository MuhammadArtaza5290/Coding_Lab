import Link from "next/link";
function page() {
  return (
    <>
    <button><Link href="/about">About</Link></button>
    <button><Link href="/services">Service</Link></button>
    <div>About in next js</div>
    </>
  )
}

export default page