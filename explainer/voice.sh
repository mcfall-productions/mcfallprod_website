#!/bin/zsh
# Stand-in voice (macOS say). Swap by writing build/seg_<id>.wav from another engine, then run build_timeline.py.
cd "$(dirname "$0")"; V="${1:-Samantha}"
python3 -c "import json;[print(s['id']+'\t'+s['say']) for s in json.load(open('narration.json'))]" | while IFS=$'\t' read id txt; do
  say -v "$V" -r 175 -o build/seg_$id.aiff "$txt" && ffmpeg -y -loglevel error -i build/seg_$id.aiff -ar 44100 -ac 1 build/seg_$id.wav
done
