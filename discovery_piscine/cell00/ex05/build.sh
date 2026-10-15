#!/bin/bash
if [ $# -eq 0 ]; then
    echo "No arguments provided."
else
    for arg in "$@"; do
        mkdir "ex$arg"
    done
fi
#give the script execute permissions chmod +x build.sh
#ls -l
#./build.sh 
#./build.sh 00
#ls -l
#./build.sh 01 02 03 04
#ls -l