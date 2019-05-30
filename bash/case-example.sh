case "$1" in
  purple) echo "You are born of royalty!";;
  red) echo "You are born of fire!";;
  blue) echo "You are born of tranquility!";;
  *)
    echo "I don't recognize that color"
    exit 1
  ;;
esac