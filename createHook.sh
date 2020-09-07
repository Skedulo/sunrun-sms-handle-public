HOOK_FILENAME=$1
node $HOOK_FILENAME > temp.json

curl -s -X POST -H "Authorization: Bearer $SKEDULO_TOKEN" -H "Content-Type: application/json" -d @temp.json "https://api.skedulo.com/webhooks"