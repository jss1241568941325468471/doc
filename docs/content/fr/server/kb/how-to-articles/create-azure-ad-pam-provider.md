---
eleventyComputed:
  title: Créer un fournisseur PAM Azure AD
  description: Le guide suivant fournit les étapes pour créer un fournisseur PAM utilisateur Azure AD pour {{ fr.DVLS }}.
---
Le guide suivant fournit les étapes pour créer un fournisseur PAM utilisateur Azure AD pour {{ fr.DVLS }}.

#### Dans le portail Azure
1. Dans une page de navigateur, ouvrir le [Portail Microsoft Azure AD](https://azure.microsoft.com) et se connecter à votre compte.
1. Sélectionner ***Azure Active Directory*** dans la section ***Azure Services***. Si vous ne le voyez pas, cliquer sur ***More services*** pour faire apparaître d'autres services.
![Azure Active Directory Service](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2132.png)
1. Sélectionner ***Microsoft Entra ID*** dans la section ***Azure Services***. Si vous ne le voyez pas, cliquer sur ***More services*** pour faire apparaître d'autres services.
![Microsoft Entra ID](https://cdnweb.devolutions.net/docs/DVLS6085_2024_2.png)
1. Dans ***App registrations***, cliquer sur ***New registration***.
![App registrations – New registration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2133.png)
1. Définir le ***Name*** de votre application.
![Register an application](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2291.png)
1. Cliquer sur ***Register*** en bas lorsque terminé.
![Set the Name and click Register](https://cdnweb.devolutions.net/docs/DVLS6087_2024_2.png)

#### Dans {{ fr.DVLS }}
6. Se connecter à votre {{ fr.DVLS }}.
1. Aller à ***Administration – Privileged Access – Providers***, puis cliquer sur ***Add***.
![Administration – Privileged Access – Providers – Add](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2134.png)
1. Sélectionner ***Azure AD User*** comme nouveau fournisseur PAM, puis cliquer sur ***Continue***.
![Add New PAM Provider – Azure AD User](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8065.png)
1. Dans la fenêtre ***Provider***, entrer un ***Name*** (obligatoire) et une ***Description*** (optionnelle) pour votre nouveau fournisseur PAM utilisateur Azure AD. Si besoin, sélectionner un ***Password template*** dans la liste déroulante.
![Name, Description, and Password template](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2135.png)

#### Dans le portail Azure
10. Dans l'***Overview*** de votre nouvelle inscription d'application, copier l'***ID de répertoire (tenant)***.
![Copy the Directory (tenant) ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2136.png)

#### Dans {{ fr.DVLS }}
11. Coller l'ID copié à l'étape précédente dans le champ ***Tenant ID***.
![Tenant ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2138.png)

#### Dans le portail Azure
12. Toujours dans l'***Overview*** de votre nouvelle inscription d'application, copier l'***ID d'application (client)***.
![Copy the Application (client) ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2137.png)

#### Dans {{ fr.DVLS }}
13. Coller l'ID copié à l'étape précédente dans le champ ***Client ID***.
![Client ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2139.png)

#### Dans le portail Azure
14. Dans ***Certificates & secrets***, cliquer sur ***Client secrets***, puis sur ***New client secret***.
![New client secret](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8064.png)
1. Dans la fenêtre ***Add a client secret***, entrer une ***Description*** et sélectionner une date d'expiration pour ce secret client, selon vos meilleures pratiques de sécurité internes.
![Add a client secret](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2140.png)
1. Cliquer sur ***Add***.
1. Copier la ***Value*** de ce nouveau secret client en cliquant sur l'icône ***Copy to clipboard*** à côté.
![Copy the Client Secret Value](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8067.png)

#### Dans {{ fr.DVLS }}
18. Coller la valeur copiée à l'étape précédente dans le champ ***Secret key***.
![Secret key](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8068.png)
1. Tester la connexion pour voir si elle fonctionne, puis cliquer sur ***Save***. La fenêtre ***Scan Configuration*** apparaîtra : la garder ouverte car elle sera remplie à une étape ultérieure.

#### Dans le portail Azure
{% snippet, "badgeCaution" %}
Attribuer des permissions API comme décrit dans les étapes 20 à 26 est utile uniquement si vous souhaitez effectuer une détection de comptes Azure (scan). Si ce n'est pas le cas, pour éviter d'attribuer des permissions inutiles à l'application, passer à l'étape 27.
{% endsnippet %}

20. Dans ***API permissions***, cliquer sur ***Add a permission***.
![API permissions – Add a permission](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2141.png)
1. Dans la fenêtre ***Resquest API permissions***, sélectionner ***Microsoft Graph***.
![Microsoft Graph](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2142.png)
1. Cliquer sur ***Application permissions***, puis cocher les cases à côté des permissions API Microsoft Graph suivantes pour les sélectionner :
    * ***Group.Read.All***
    * ***RoleManagement.Readwrite.Directory***
    * ***User.Read.All***
   ![Select API permissions](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2143.png)

   {% snippet, "badgeInfo" %}
   Utiliser la barre de filtre au-dessus de la liste des permissions pour trouver celles que vous recherchez.
   {% endsnippet %}

23. Lorsque toutes les permissions ci-dessus ont été sélectionnées, cliquer sur ***Add permissions*** en bas.
1. La liste des permissions sera mise à jour pour inclure celles qui viennent d'être sélectionnées. Supprimer toutes les autres permissions inutiles en utilisant le bouton à points de suspension à côté.
![Remove Unnecessary Permissions](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2328.png)
1. Les permissions nécessitent un consentement d'administrateur. Cliquer sur le bouton ***Grant admin consent for < Your Organization >***, puis cliquer sur ***Yes*** pour confirmer.
![Grant admin consent for your organization](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2329.png)
1. Pour confirmer que le consentement d'administrateur a été accordé, vérifier le ***Status*** de vos permissions.
![Granted Status](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2330.png)
1. Pour accorder à l'application la capacité de faire tourner les mots de passe, quitter les ***App registrations*** pour revenir à Azure Active Directory, puis sélectionner ***Roles and administrators*** dans le menu de gauche.
1. Dans ***All roles***, cliquer sur le rôle ***Helpdesk Administrator***. Si les comptes gérés par le module PAM sont membres de n'importe quel rôle ou groupe d'administrateur, alors l'application a besoin du rôle ***Privileged Authentication Administrator***.
![All roles – Helpdesk Administrator](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8072.png)
1. Dans ***Assignments***, cliquer sur le bouton ***Add assignments***.
![Helpdesk Administrator – Add assignments](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8073.png)
1. Filtrer la liste pour trouver l'application Azure précédemment créée, la sélectionner, puis cliquer sur ***Add***.
![Add assignments](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8074.png)
Votre nouvelle affectation devrait maintenant être affichée dans ***Assignments***.

#### Dans {{ fr.DVLS }}
31. Les dernières étapes sont dédiées à la configuration d'un scan pour ce fournisseur. Dans la fenêtre ***Scan Configuration*** qui est apparue lorsque vous avez enregistré la configuration de votre fournisseur à l'étape 19, sous ***General***, entrer un ***Name*** pour cette configuration.
![Scan Configuration Name](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2144.png)
1. Sous ***Configuration***, sélectionner ***Groups*** ou ***Roles*** dans la liste déroulante ***Search mode***. Vous pouvez filtrer le ***Search mode*** pour des groupes ou rôles Azure AD spécifiques en cliquant sur le bouton ***Edit*** à côté de la liste déroulante.
![Scan Configuration Search mode](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8077.png)
1. Cliquer sur ***OK*** lorsque la configuration est terminée.
1. Dans {{ fr.DVLS }}, aller à ***Administration – Privileged Access – Scan Configurations***. Si l'option ***Start Scan on Save*** a été laissée activée pendant la configuration du scan, le scan devrait avoir démarré de lui-même. Pendant le processus, la colonne ***Status*** affiche une icône de sablier à côté de l'entrée du scan.
![Administration – Privileged Access – Scan Configurations](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2145.png)
1. Lorsque le processus est terminé, l'icône de sablier change en une coche verte. À ce moment-là, sélectionner des comptes et les importer dans les comptes privilégiés comme tout autre type de compte privilégié.
