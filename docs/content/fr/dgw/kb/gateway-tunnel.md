---
_schema: default
eleventyComputed:
  title: '{{ fr.DGW }} Type de connexion Tunnel'
  description: >-
    Le Tunnel {{ fr.DGW }} peut répondre à des besoins similaires au
    réacheminement de port SSH/tunnel SSH, mais il ne nécessite rien d'autre que
    {{ fr.DGW }} lui-même.
  keywords:
    - Tunnel SSH
---
Le ***Tunnel {{ fr.DGW }}*** peut répondre à des besoins similaires au réacheminement de port SSH/tunnel SSH, mais il ne nécessite rien d'autre que {{ fr.DGW }} lui-même. Il est utile lors de l'utilisation de connexions qui ne sont pas prises en charge nativement dans {{ fr.RDM }} via le {{ fr.DGW }}. L'entrée se trouve sous ***Nouvelle Entrée*** – ***Session*** – ***Connexions à distance***. {% snippet, "badgeInfo" %}
{{ fr.DGW }} doit être configuré dans la source de données {{ fr.RDM }} puis configuré via [héritage](/rdm/kb/rdm-windows/knowledge-base/inheritance/) ou sur la connexion elle-même. L'option se trouve sous ***Propriétés*** – ***Connexion*** – ***VPN/SSH/Passerelle*** – ***VPN/SSH/Passerelle*** – ***Général***.
{% endsnippet %}

![Tunnel](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0116.png)

## Écouteurs

{% snippet, "badgeWarning" %}
Si l'***Écouteur*** est réglé sur 0.0.0.0, il acceptera les connexions de n'importe quelle source au sein du réseau. En raison de la difficulté à suivre la responsabilité, il est recommandé de ***NE PAS*** faire cela pour plusieurs raisons de sécurité.
{% endsnippet %}

* Dans presque tous les scénarios, l'écouteur (adresse de liaison) doit être réglé sur l'adresse de bouclage (127.0.0.1) de la machine locale.
* ***Transfert TCP*** : C'est l'équivalent du réacheminement de port.
* Proxies ***HTTP*** et ***SOCKS5*** : Ces écouteurs sont configurés comme des proxies, ce qui permet d'utiliser un navigateur autre que Google Chrome. Cela signifie également qu'ils utilisent une destination dynamique. {% snippet, "badgeInfo" %}
          Des ports dynamiques peuvent être utilisés avec les trois types d'écouteurs. Si la valeur est 0, il trouvera automatiquement un port disponible.
          {% endsnippet %}

### Règles d'autorisation

Les écouteurs ***HTTP*** et ***SOCKS5*** utiliseront également les ***Règles d'autorisation*** pour spécifier les destinations autorisées, tout ce qui n'est pas sur la liste blanche sera refusé.

Des ***Filtres de cible*** peuvent être spécifiés en utilisant des adresses IP ou des noms d'hôte. Les deux peuvent contenir des caractères génériques. Chaque ***Filtre de cible*** doit spécifier explicitement un port de destination. Laisser le port par défaut à '0' entraînera une erreur lors de la tentative d'enregistrement du filtre. ![Default](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0163.png)

#### Exemples de filtres de cible valides

<table><thead><tr><th><p>Filtre de cible</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p><code>windjammer.net:80</code></p></td><td><p>Autorise le trafic HTTP vers le nom d'hôte windjammer.net.</p></td></tr><tr><td><p><code>*.windjammer.net:443</code></p></td><td><p>Autorise le trafic HTTPS vers n'importe quel sous-domaine de windjammer.net mais pas vers windjammer.net directement.</p></td></tr><tr><td><p><code>192.168.0.*:22</code></p></td><td><p>Autorise le trafic SSH vers n'importe quelle adresse IP entre 192.168.0.0 et 192.168.0.255.</p></td></tr><tr><td><p><code>*:3389</code></p></td><td><p>Autorise le trafic RDP vers n'importe quel point de terminaison accessible par le {{ fr.DGW }}.</p></td></tr></tbody></table>

Il est possible d'ajouter plusieurs ***Filtres de cible*** à votre entrée adaptés à votre utilisation prévue du tunnel. Par exemple, il est possible d'ajouter le même nom d'hôte plusieurs fois mais avec des ports différents, comme 80 et 443, pour permettre à la fois le trafic HTTP et HTTPS.

### Utilisation du Tunnel {{ fr.DGW }} en dehors de {{ fr.RDM }}

Une fois ouvert, il est possible d'utiliser un ***Tunnel {{ fr.DGW }}*** à partir d'une application externe à {{ fr.RDM }}. Il est possible, par exemple, de l'utiliser avec un navigateur Web ou toute autre application qui prend en charge le type de proxy (TCP, HTTP ou SOCKS5) spécifié dans la connexion.

#### Exemple : Utilisation du tunnel avec l'outil en ligne de commande cURL

Il est possible d'ajouter votre point de terminaison proxy avec le port spécifié ou celui qui a été généré par l'entrée ***Tunnel {{ fr.DGW }}*** avec l'argument -x.

```bash
curl -x socks5h://127.0.0.1:65535 windjammer.net
```

{% snippet, "badgeCaution" %}
Si vous avez défini vos filtres de cible en utilisant des noms d'hôte, il est important de s'assurer que votre application ne résout pas le nom d'hôte avant de l'envoyer au tunnel ; sinon, le trafic sera refusé. Les applications ont généralement des paramètres pour activer ou désactiver ce comportement. Par exemple, dans le navigateur Web Firefox, il est nécessaire d'activer l'option ***Proxy DNS lors de l'utilisation de SOCKS v5*** dans le panneau de configuration du proxy pour que ce scénario fonctionne correctement.
{% endsnippet %}
