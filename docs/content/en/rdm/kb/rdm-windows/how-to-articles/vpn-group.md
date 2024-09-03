---
_schema: default
eleventyComputed:
  title: VPN groups
---
{% snippet, "badgeInfo" %}
VPN groups are defined inside each individual entry in the VPN/SSH/Gateway section.
{% endsnippet %}

When multiple entries are configured to use the same VPN group, the VPN connection will stay active until the last session disconnects. ![VPN groups](https://cdnweb.devolutions.net/docs/RDMW6084_2024_2.png)

The VPN close mode needs to be set to ***On sessions close*** to use this feature.

The VPN group name needs to be exactly the same to ensure that {{ en.RDM }} increments the usage counter.