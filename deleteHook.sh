HOOK_ID=$1

curl -s -X DELETE -H "Authorization: Bearer $SKEDULO_TOKEN" "https://api.skedulo.com/webhooks/$HOOK_ID"