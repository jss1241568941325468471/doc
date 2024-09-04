---
_schema: default
eleventyComputed:
  title: Lexicon
---
{% var, "RDM" false %} is a software that has an extensive set of functionalities. Here are the major concepts that are important to understand to use the program to its full potential.

## Connection{#connection}

Any type of entry that allows you to connect to a remote host, service or device is a connection. An IP address or host name is normally used as well as credentials.

## Credential entry{#credential-entry}

A credential is used to control access to a resource by identifying the user. It can be a classic username/password pair held by the application or even by an external source.

## Data source{#data-source}

It is a container for entries. It can be a local file or a database (either local or shared). You can use multiple distinct data sources in the application, although only one is considered active at one point in time. See [Data Sources](/rdm/data-sources/) for more information.

## Entry{#entry}

All items in your data source are entries. There are multiple types. The entry is an abstract concept that serves as a container for all specific types.

## Information entry{#information-entry}

An information entry can contain various items like account information, emails and serial numbers. Unlike credential entries, information entries are meant to be shared. Therefore, the data in the information entries is not encrypted. Its principal use in {% var, "RDM" false %} is to hold web site information, from the URL to the credentials. This allows auto log in on the specified web site.

## Session{#session}

In the early days of {% var, "RDM" false %}, it was mainly aimed at managing Microsoft Remote Desktop. A session was a term that was in use back then to describe a connection to Microsoft Remote Desktop Services. It appears widely in our documentation. Any technology that connects and that needs to use authentication is a session.