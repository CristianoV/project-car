import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiAccountCircleLine } from 'react-icons/ri';
import { BiLogOut } from 'react-icons/bi';

interface ButtonLoginProps {
  token: string | undefined;
}

export default function ButtonLogin({ token }: ButtonLoginProps) {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/logout', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    router.push('/');
  };
  return token ? (
    <>
      <Link href='/perfil'>
        <RiAccountCircleLine />
        Perfil
      </Link>
      <Link href='/perfil' onClick={(e) => handleSubmit(e)}>
        <BiLogOut />
      </Link>
    </>
  ) : (
    <Link href='/login'>
      <RiAccountCircleLine />
      Conecte-se
    </Link>
  );
}
