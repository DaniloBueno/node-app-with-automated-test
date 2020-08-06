#!/bin/bash

start()
{
    forever start -al /dev/null -ao /dev/null -ae /dev/null server.js
    return
}

stop()
{
    forever stop server.js
    return
}

restart()
{
    stop
    start
    return
}

help()
{ 
    echo "Usage: ./server.sh start, stop, clear or restart"
    echo "where,"
    echo "       start    - start the server"
    echo "       stop     - stop the server"
    echo "       restart  - restart the server"
}

if [ $# -eq 0 ] ; then
    help
    exit 1
fi 

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    help|*)
        help
        ;;
esac
:
