import { auth } from '@/auth';
import Navbar from './navbar';

export default async function NavBarWrapper() {
  const session = await auth();
  console.log(session);

  return <Navbar loggedInUser={session?.user ? session.user : null} />;
}
