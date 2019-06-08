# Pass JQ a file
echo 'Find dependencies in package.json'
jq '.dependencies' package.json

echo 'Print out all dependency names'
jq '.dependencies | keys' package.json

echo 'Print out all raw dependency names without array'
jq -r '.dependencies | keys | .[]' package.json

echo 'Run script to check unused dependencies'
sh ./check-unused-dependencies.sh