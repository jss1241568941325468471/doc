---
eleventyComputed:
  title: Broadcast actions in SSH sessions
  description: In {{ en.RDM }}, you can manage two or more active SSH session with Broadcast actions to send commands on all the sessions at the same time.
---
{% youtube '9FrSyzRvw30' %}

In {{ en.RDM }}, you can manage two or more active SSH session with ***Broadcast actions*** to send commands on all the sessions at the same time.
{% snippet, "badgeInfo" %}
An upgraded database, by an administrator, might be required.
{% endsnippet %}

1. Open at least two SSH sessions.
1. Right-click on any SSH tab, click ***Broadcast input***, then ***Manage broadcast***.
![!!KB4526](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4526.png)
1. Select all the required session in the list and close the window.
![!!KB4527](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4527.png)

You can now broadcast commands on all the sessions at the same time.

To remove a session from the broadcast, you can either bring the ***Manage broadcast*** window to uncheck the session, or on the specific SSH tab, right-click to bring the menu, click ***Broadcast input***, then ***Remove from broadcast***.