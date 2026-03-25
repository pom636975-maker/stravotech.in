import React, { useState } from 'react';
import { auth } from '../../services/firebase';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

interface Props {
  onClose?: () => void;
}

const LoginModal: React.FC<Props> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      onClose && onClose();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose && onClose();
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <button onClick={handleGoogle} className="w-full btn mb-2">Sign in with Google</button>
        <form onSubmit={handleEmail} className="space-y-2">
          <input
            type="email"
            placeholder="Email"
            className="border px-2 py-1 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-2 py-1 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn w-full">Sign in</button>
        </form>
        <button className="mt-4 text-sm text-gray-600" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default LoginModal;
