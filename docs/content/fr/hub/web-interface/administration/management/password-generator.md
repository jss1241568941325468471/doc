---
_schema: default
eleventyComputed:
  title: Password generator
  description: >+
    The Password Generator allows to create random passwords that are difficult
    to interpret or predict, due to a mix of uppercase and lowercase letters,
    numbers and punctuation symbols.

  status:
  keywords:
---
Le ***Générateur de mots de passe*** permet de créer des mots de passe aléatoires difficiles à interpréter ou à prédire, grâce à un mélange de lettres majuscules et minuscules, de chiffres et de symboles de ponctuation.

<br>Vous pouvez créer et imposer des [***Modèles de mots de passe***](/hub/web-interface/administration/management/password-templates/) pour suivre les politiques de sécurité de votre organisation.

![Password generator](https://cdnweb.devolutions.net/docs/HUBB6018_2024_1.png "Password generator")

### **Générer des mots de passe avec le générateur de mots de passe**

1. Aller à la section ***Général*** dans les ***Propriétés*** d'une entrée.
2. À côté du champ ***Mot de passe***, cliquer sur le menu à trois points pour accéder à l'outil ***Générateur de mots de passe***.
3. Personnaliser tous les critères que vous souhaitez pour votre mot de passe, puis cliquer sur ***Générer***.
4. Dans la liste proposée, choisir et cliquer sur un mot de passe.

   En bas de la liste, vous pouvez examiner la force et la phonétique du mot de passe sélectionné.

5. Cliquer sur ***Sélectionner*** pour fermer et remplir automatiquement le champ ***Mot de passe***.

   Vous pouvez également créer un ***Modèle de mot de passe*** à partir de vos paramètres du ***Générateur de mots de passe***. Il suffit de personnaliser les paramètres et de cliquer sur ***Ajouter un modèle*** à côté de la liste déroulante ***Modèle***.

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Modèle</p></td><td><p>Créer ou choisir un <a href="https://docs.devolutions.net/server/web-interface/administration/templates/password-templates/"><em><strong>Modèle de mots de passe</strong></em></a>.</p></td></tr><tr><td><p>Mode</p></td><td><p>Choisir un paramètre de <em><strong>Mode</strong></em> pour les mots de passe.</p><ul><li><p><em><strong>Par défaut</strong></em>: Personnaliser la longueur et le nombre minimum de caractères par type que vous souhaitez pour les mots de passe.</p></li><li><p><em><strong>Phrase secrète</strong></em>:<em><strong> </strong></em>Générer une <strong>phrase secrète</strong> avec une longueur personnalisée, un séparateur de mots, une majuscule à la première lettre, un ajout de numéro et un dictionnaire.</p></li></ul></td></tr><tr><td><p>Majuscules (A, B...)</p></td><td><p>Inclure des lettres majuscules dans la génération des mots de passe.</p></td></tr><tr><td><p>Soulignement ( _ )</p></td><td><p>Inclure le caractère de soulignement ( _ ) dans la génération des mots de passe.</p></td></tr><tr><td><p>Caractères ANSI élevés</p></td><td><p>Inclure des caractères de '-' à U255 (à l'exclusion de U255) dans la génération des mots de passe.</p></td></tr><tr><td><p>Moins ( - )</p></td><td><p>Inclure le caractère moins ( - ) dans la génération des mots de passe.</p></td></tr><tr><td><p>Parenthèses ([], (), &lt;&gt;)</p></td><td><p>Inclure des caractères de parenthèses dans la génération des mots de passe.</p></td></tr><tr><td><p>Chiffres (0, 1, 2...)</p></td><td><p>Inclure des chiffres dans la génération des mots de passe.</p></td></tr><tr><td><p>Caractères spéciaux (!, $, %, &amp;...)</p></td><td><p>Inclure des caractères spéciaux dans la génération des mots de passe.</p></td></tr><tr><td><p>Minuscules (a, b, c...)</p></td><td><p>Inclure des lettres minuscules dans la génération des mots de passe.</p></td></tr><tr><td><p>Espace ( )</p></td><td><p>Inclure le caractère espace dans la génération des mots de passe.</p></td></tr><tr><td><p>Conforme XML</p></td><td><p>Générer des mots de passe conformes XML.</p></td></tr><tr><td><p>Nombre de mots de passe</p></td><td><p>Nombre maximum de mots de passe générés.</p></td></tr><tr><td><p>Inclure les caractères suivants</p></td><td><p>Inclure de force des caractères dans le mot de passe.</p></td></tr><tr><td><p>Exclure les caractères suivants</p></td><td><p>Exclure de force des caractères du mot de passe.</p></td></tr></tbody></table>
