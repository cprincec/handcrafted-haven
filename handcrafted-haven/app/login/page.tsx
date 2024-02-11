import HHLogo from '@/app/components/handcraftedhavenlogo';
import LoginForm from '@/app/components/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Login',
};

export default function LoginPage() {
  return (
    <div className="relative mx-auto flex w-full max-w-[400px] flex-col items-center justify-center space-y-2.5 p-4 md:-mt-32 md:min-h-screen md:w-full">
      <div className="flex w-full items-end rounded-lg p-3 md:h-36">
        <div>
          <HHLogo />
        </div>
      </div>
      <LoginForm />
    </div>
  );
}
