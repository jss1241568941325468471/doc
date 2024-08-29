---
eleventyComputed:
  title: Entry security analyzer
  description: The Entry security analyzer follows a set of rules to determine the strength of the password with a score from 0 to 100. There are two categories of rules.
---
The ***Entry security analyzer*** evaluates the strength of passwords stored in the data source. A strength password control is also displayed under most password fields of entries.
![Password strength](https://cdnweb.devolutions.net/docs/RDMW0026_2024_2.png)
The ***Entry security analyzer*** follows a set of rules to determine the strength of the password with a score from 0 to 100. There are two categories of rules.

### Reinforce
These are the rules which make the passwords stronger:

* The password length
* The number of uppercase letters (A-Z)
* The number of lowercase letters (a-z)
* The number of digits (0-9)
* The number of symbols (!, @, #, $, etc.)
* The number of digits or symbols in the middle of the password
* Three or more of the rules above are met

The minimum requirements for a Strong password are:

* The password is at least 5 characters long
* The password contains uppercase and lowercase characters
* The password contains digits

### Weakening
These are the rules which make the passwords weaker:

* The password contains only letters
* The password contains only digits
* The password has repeated characters
* The password has consecutive uppercase letters (two or more)
* The password has consecutive lowercase letters (two or more)
* The password has consecutive digits (two or more)
* The password has sequential letters (ABCD, DCBA)
* The password has sequential digits (1234, 4321)

## Settings
![Entry security analyzer](https://cdnweb.devolutions.net/docs/RDMW0025_2024_2.png)

| OPTION                            | DESCRIPTION                                                                  |
|-----------------------------------|------------------------------------------------------------------------------|
| Show all entries                  | Shows you all the entries in your session, including those without password. |
| Show VPN analysis                 | Add the VPN Host column.                                                     |
| Show compromised password (pwned) | Show if the password has been pwned. A [pwned password](/rdm/kb/rdm-windows/how-to-articles/pwned-password-check/) is a password that has been exposed in data breaches (i.e., they are owned/pwned by hackers). |
| Edit                              | Open the current entry to edit it.                                           |
| Forbidden Passwords               | Create a list of prohibited passwords.                                       |
| Export Settings                   | Export the password analyzer settings.                                       |

