import React, { useEffect, useState } from "react";

const GoogleAuth = () => {
  const [user, setUser] = useState(null);
  const adminEmails = import.meta.env.VITE_ADMIN_EMAILS.split(",");

  useEffect(() => {
    // Charger le widget Google au démarrage
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    // Rendu du bouton invisible, mais prompt automatique
    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      { theme: "outline", size: "large", width: 0, height: 0 }
    );

    // Affiche le prompt automatique si utilisateur déjà connecté
    window.google.accounts.id.prompt();
  }, []);

  const handleCredentialResponse = (response) => {
    const jwt = response.credential;
    const payload = JSON.parse(atob(jwt.split(".")[1])); // decode JWT
    setUser(payload); // payload.email contient l'email
  };

  const isAdmin = user && adminEmails.includes(user.email);

  return (
    <div>
      {/* Widget Google Sign-In */}
      <div id="googleSignInDiv"></div>

      {user && (
        <div>
          <h1>Bienvenue {user.name}</h1>

          {isAdmin ? (
            <div className="admin-panel">
              <h2>Fonctionnalités Administrateur</h2>
              <button>Ajouter un utilisateur</button>
              <button>Supprimer un utilisateur</button>
            </div>
          ) : (
            <p>Fonctionnalités standard</p>
          )}
        </div>
      )}
    </div>
  );
};

export default GoogleAuth;
