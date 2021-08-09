from urllib import request, parse

url = 'https://www.google.com/'

data = {
    "search": "python urllib"
}

data = parse.urlencode(data).encode()

headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
}

req = request.Request(url, data=data, headers=headers, method="POST")
print(req.get_method() + " " + req.get_full_url() + "\n" + str(req.header_items()) + "\n" + str(data))

try:
    resp = request.urlopen(req, data=data)
    print(resp.read().decode())
except Exception as e:
    print(e.read().decode())