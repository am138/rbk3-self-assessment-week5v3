## Authentication
- Explain why each system fails (hacked), and how to guard against that failure when using the follwoing types of passwords:
- Commit with th comment "passwords"

- Plaintext passwords
using a plain text is not safe at all if a third person (man in the middle) could acsess the request he can acsess the password easily because the password being sent is not protected the haker has accsess to the whole database

- Encrypted passwords
this is more sequre than the first one in this way the letters or characters of the password are changed to other characters based on a specific rule (for example shifting the letters one letter back)
example: 'dog' when encripted becomes 'eph'
this had its cons: some users use commom passwords such as 12345 or hello. if the hacker gets accsess to the database he will check repeated passwords and try to decript it if he succeeds finding outwhat the encription rule is he will have acsess to the whole database passwords  

- Hashed passwords
hashing uses ascii code the programmer working on the website can add a salt to every password in the database. the salt is fixed for every website and random its picked by the programmer. when the salt is added to the password then hashed we will get the password that will be saved in the database. the password can be decrypted and the salt will be removed 