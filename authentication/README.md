## Authentication
- Explain why each system fails (hacked), and how to guard against that failure when using the follwoing types of passwords:
- Commit with th comment "passwords"

- Plaintext passwords
  if any one gained access to the database -somehow- all accounts will be hacked ..

- Encrypted passwords
  can be decrypted -reversed- , finding a way to decrypt one means decrypting them all .

- Hashed passwords
  using rainbow tables , can try all possible ways .. this can be avoided by salting the password before the hash , different salt for each password , it means even getting one will not help the hacker gussing the others ..