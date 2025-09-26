import { useEffect, useState } from "react";

export const useGoogleAuth = () => {
  const [user, setUser] = useState(null);
  const adminEmails = import.meta.env.VITE_ADMIN_EMAILS.split(",");

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      { theme: "outline", size: "large", width: 0, height: 0 }
    );

    window.google.accounts.id.prompt();

    function handleCredentialResponse(response) {
      const jwt = response.credential;
      const payload = JSON.parse(atob(jwt.split(".")[1]));
      setUser(payload);
    }
  }, []);

  const isAdmin = user && adminEmails.includes(user.email);

  return { user, isAdmin };
};
