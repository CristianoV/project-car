import Link from 'next/link';
import { useState } from 'react';
import { RiAccountCircleLine } from 'react-icons/ri';

interface ButtonLoginProps {
  token: string | undefined;
}

export default function ButtonLogin({ token }: ButtonLoginProps) {
  return token ? (
    <Link href='/perfil'>
      <RiAccountCircleLine />
      Perfil
    </Link>
  ) : (
    <Link href='/login'>
      <RiAccountCircleLine />
      Conecte-se
    </Link>
  );
}
