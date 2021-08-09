# Base64 encoding is a type of conversion of bytes into ASCII characters. 
# In mathematics, the base of a number system refers to how many different characters represent numbers. 
# The name of this encoding comes directly from the mathematical definition of bases - we have 64 characters that represent numbers.

# The Base64 character set contains:
#     26 uppercase letters
#     26 lowercase letters
#     10 numbers
#     + and / for new lines (some implementations may use different characters)

import base64
from urllib import parse

client_id = 'browser'
client_secret = 'supersecret'
client_id_plus_secret = client_id + ":" + client_secret
print(client_id_plus_secret)

print("Encoding...")
# Encode to Base64
client_auth_bytes = client_id_plus_secret.encode()
print(client_auth_bytes)
client_auth_base64_bytes = base64.b64encode(client_auth_bytes)
print(client_auth_base64_bytes)

# Practical example would be to pass this as a Header

headers = {
    'Authorization': 'Basic ' + client_auth_base64_bytes.decode('ascii')
}
print(headers)

# Now you can place a request or transmit as you need

print("Decoding...")
# Decode from Base64
print(client_auth_base64_bytes)
decoded_client_auth_base64_bytes = client_auth_base64_bytes.decode('ascii')
print(decoded_client_auth_base64_bytes)
decoded_client_auth_bytes = base64.b64decode(decoded_client_auth_base64_bytes)
print(decoded_client_auth_bytes)
client_auth_string = decoded_client_auth_bytes.decode('ascii')
print(client_auth_string)