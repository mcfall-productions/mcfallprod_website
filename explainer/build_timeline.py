"""Join build/seg_<id>.wav with gaps into build/voice.wav and write build/timeline.js (scene start/end seconds)."""
import json, subprocess, wave
GAP, LEAD, TAIL = 0.6, 0.8, 1.6
segs = json.load(open('narration.json'))
t, tl, lst = LEAD, [], []
for s in segs:
    w = wave.open(f"build/seg_{s['id']}.wav"); d = w.getnframes() / w.getframerate()
    tl.append({'id': s['id'], 'start': round(t, 2), 'end': round(t + d, 2)}); t += d + GAP
total = round(t - GAP + TAIL, 2)
f = ['-i', 'build/silence_lead.wav']
subprocess.run(['ffmpeg','-y','-loglevel','error','-f','lavfi','-i',f'anullsrc=r=44100:cl=mono','-t',str(LEAD),'build/silence_lead.wav'])
subprocess.run(['ffmpeg','-y','-loglevel','error','-f','lavfi','-i',f'anullsrc=r=44100:cl=mono','-t',str(GAP),'build/silence_gap.wav'])
subprocess.run(['ffmpeg','-y','-loglevel','error','-f','lavfi','-i',f'anullsrc=r=44100:cl=mono','-t',str(TAIL),'build/silence_tail.wav'])
parts = ['build/silence_lead.wav']
for i, s in enumerate(segs):
    parts += [f"build/seg_{s['id']}.wav"] + (['build/silence_gap.wav'] if i < len(segs)-1 else ['build/silence_tail.wav'])
open('build/list.txt','w').write(''.join(f"file '{p.split('/')[-1]}'\n" for p in parts))
subprocess.run(['ffmpeg','-y','-loglevel','error','-f','concat','-safe','0','-i','build/list.txt','-c','copy','build/voice.wav'],check=True)
open('build/timeline.js','w').write('window.TIMELINE=' + json.dumps({'total': total, 'scenes': tl}) + ';')
print(total, tl)
