## Authentication
- Explain why each system fails (hacked), and how to guard against that failure when using the follwoing types of passwords:
- Commit with th comment "passwords"

- Plaintext passwords
  the plain text password its password with out any type of production   
  (encryption) (its clear)
  thats mean these type of password is not secure 

  ex. entered pass.:hanan
      saved pass.: hanan
      (they are same)

      it will hacked easly , so if the hacker reach to the database he will take all the passwords 

    how to protect:
    make some way to make the way to my database hard to reach (cahnge the data base pass. and encrypt it)
    encrypt the passwords in my data base 

- Encrypted passwords
these passwords is encrypted with some encoding(encrypt) system like (utf_8)

  ex. entered pass.:hanan
      saved pass.: 25hjg9825
      (they are not same)

it will hacked if the hacker know the used encoding sys.((utf_8))
so if he reach to the database he will take all the passwords and make 
decrypted to ((utf_8)) [because each encryp. sys. has decrypte one] 

how to protect:
change the database password from time to time
update the encrypt sys. that I used for these passwords in my data base
add random number to each encrypted pass 

- Hashed passwords
 these password encrypted or hashing by ASCI_code system

 it will hacked easily because the ASCI sys. popular and all of us know how 
 it is work 
 [ each letter capital or small letter or any symbol has its weight ] 
 so its easy to convert from plain text pass. to be encrypted one by using hash way and its easy hacked 

 how to protect:
 generate a salt (which is random number) and add it to each hased password
