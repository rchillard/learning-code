echo 'List JQ'
echo '{ "name": "ryan", "profession": "pancake-maker"}' | jq 

echo 'Select JQ'
echo '{ "name": "ryan", "profession": "pancake-maker"}' | jq '.name'

echo 'List JQ'
curl -s https://api.github.com/repos/facebook/react | jq

echo 'Select JQ'
curl -s https://api.github.com/repos/facebook/react | jq .'stargazers_count'

echo 'Iterate through list with JQ'
echo '[1,2,3'] | jq '.[]'

echo 'Iterate through array and remove names with JQ'
curl -s https://api.github.com/search/repositories?q=service+worker | jq '.items[].name'